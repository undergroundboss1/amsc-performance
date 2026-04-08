import { NextResponse } from 'next/server';
import { getSupabase } from '../../../lib/supabase';
import { getPlanById } from '../../../lib/plans';
import { validateRegistration, sanitize } from '../../../lib/validators';

/**
 * POST /api/clients
 *
 * Creates a new client record in the database.
 * Called from Step 2 of the /join flow after the user fills in their details.
 *
 * SECURITY:
 * - All input is validated and sanitized server-side
 * - Plan must exist in our plans list (prevents price manipulation)
 * - Rate limiting should be added at the edge (Vercel / middleware) for production
 */
export async function POST(request) {
  try {
    const body = await request.json();

    // Validate all fields server-side
    const { valid, errors } = validateRegistration(body);
    if (!valid) {
      return NextResponse.json({ error: 'Validation failed', errors }, { status: 400 });
    }

    // Verify plan exists and get the REAL price (never trust client-sent price)
    const plan = getPlanById(body.planId);
    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid plan selected.', errors: ['Please select a valid training plan.'] },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const clientData = {
      full_name: sanitize(body.fullName),
      email: sanitize(body.email).toLowerCase(),
      phone: sanitize(body.phone),
      sport: sanitize(body.sport || ''),
      training_goals: sanitize(body.goals || ''),
      availability: sanitize(body.availability || ''),
      health_info: sanitize(body.healthInfo || ''),
      selected_plan: plan.id,
      plan_price: plan.price, // Always use server-side price
      payment_status: 'pending',
    };

    // Insert into Supabase
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('clients')
      .insert(clientData)
      .select('id')
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to save your details. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ clientId: data.id }, { status: 201 });
  } catch (err) {
    console.error('Client creation error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
