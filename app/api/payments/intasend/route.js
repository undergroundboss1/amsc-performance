import { NextResponse } from 'next/server';
import { getSupabase } from '../../../../lib/supabase';
import { getPlanById } from '../../../../lib/plans';

/**
 * POST /api/payments/intasend
 *
 * Initializes an IntaSend checkout session for M-Pesa / Kenyan payments.
 * Expects: { clientId: string }
 *
 * SECURITY:
 * - Fetches client data from DB (never trusts client-sent amounts)
 * - Uses server-side API key (never exposed to browser)
 * - Generates unique reference per transaction
 */
export async function POST(request) {
  try {
    const { clientId } = await request.json();

    if (!clientId) {
      return NextResponse.json({ error: 'Client ID is required.' }, { status: 400 });
    }

    // Fetch client from database
    const supabase = getSupabase();
    const { data: client, error: fetchError } = await supabase
      .from('clients')
      .select('*')
      .eq('id', clientId)
      .single();

    if (fetchError || !client) {
      return NextResponse.json({ error: 'Client not found.' }, { status: 404 });
    }

    // Must be approved before paying
    if (client.application_status !== 'approved') {
      return NextResponse.json({ error: 'Application not yet approved.' }, { status: 403 });
    }

    // Don't allow double-payment
    if (client.payment_status === 'paid') {
      return NextResponse.json({ error: 'This subscription is already paid.' }, { status: 400 });
    }

    const plan = getPlanById(client.selected_plan);
    if (!plan) {
      return NextResponse.json({ error: 'Invalid plan.' }, { status: 400 });
    }

    // Generate unique reference
    const reference = `AMSC-${Date.now()}-${clientId.slice(0, 8)}`;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://amsc-performance.vercel.app';

    // Create IntaSend checkout
    const response = await fetch('https://payment.intasend.com/api/v1/checkout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.INTASEND_API_KEY}`,
      },
      body: JSON.stringify({
        public_key: process.env.NEXT_PUBLIC_INTASEND_PUBLISHABLE_KEY,
        amount: plan.price,
        currency: 'KES',
        email: client.email,
        first_name: client.full_name.split(' ')[0],
        last_name: client.full_name.split(' ').slice(1).join(' ') || '-',
        api_ref: reference,
        redirect_url: `${siteUrl}/join/success?reference=${reference}`,
        comment: `AMSC ${plan.name} — Monthly Subscription`,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.url) {
      console.error('IntaSend checkout error:', data);
      return NextResponse.json(
        { error: 'Failed to initialize payment. Please try again.' },
        { status: 502 }
      );
    }

    // Save payment reference to client record
    await supabase
      .from('clients')
      .update({
        payment_provider: 'intasend',
        payment_reference: reference,
      })
      .eq('id', clientId);

    return NextResponse.json({ checkoutUrl: data.url });
  } catch (err) {
    console.error('IntaSend payment error:', err);
    return NextResponse.json(
      { error: 'Payment initialization failed. Please try again.' },
      { status: 500 }
    );
  }
}
