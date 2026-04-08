'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import Link from 'next/link';

function SuccessContent() {
  const searchParams = useSearchParams();
  const reference = searchParams.get('reference') || searchParams.get('trxref');

  // Clear saved session state
  useEffect(() => {
    sessionStorage.removeItem('amsc_plan');
    sessionStorage.removeItem('amsc_client_id');
  }, []);

  return (
    <section className="py-12 px-6 bg-background min-h-[80vh] pt-24 pb-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-600/20 border-2 border-green-500/40 mb-6">
            <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl tracking-widest mb-4">
            YOU&apos;RE IN.
          </h1>
          <p className="text-secondary font-body text-base max-w-md mx-auto">
            Your payment has been received. Welcome to AMSC Performance — your training journey starts now.
          </p>
          {reference && (
            <p className="text-white/30 font-body text-xs mt-3">
              Reference: {reference}
            </p>
          )}
        </div>

        {/* What Happens Next */}
        <div className="bg-surface border border-white/5 rounded-xl p-8 text-left mb-8">
          <h2 className="font-display font-bold text-sm tracking-widest uppercase text-white/60 mb-6">
            What Happens Next
          </h2>
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-display font-bold text-sm">
                1
              </span>
              <div>
                <h3 className="font-display font-bold text-white tracking-wide text-sm">Download Trainerize</h3>
                <p className="text-secondary text-sm font-body mt-1">
                  Download the Trainerize app — this is where your training programs, progress tracking, and coach communication will live.
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href="https://apps.apple.com/app/trainerize/id634561456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-surface-light border border-white/10 rounded-lg px-4 py-2.5 text-white text-xs font-display font-semibold tracking-wider hover:border-white/30 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.trainerize.hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-surface-light border border-white/10 rounded-lg px-4 py-2.5 text-white text-xs font-display font-semibold tracking-wider hover:border-white/30 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-1.96a1.12 1.12 0 010 1.68l-2.54 1.47-2.5-2.5 2.5-2.5 2.54 1.47zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                    </svg>
                    Google Play
                  </a>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-display font-bold text-sm">
                2
              </span>
              <div>
                <h3 className="font-display font-bold text-white tracking-wide text-sm">Check Your Email</h3>
                <p className="text-secondary text-sm font-body mt-1">
                  Your coach will send you a Trainerize invitation within 24 hours. Accept the invite to access your personalized training program.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-display font-bold text-sm">
                3
              </span>
              <div>
                <h3 className="font-display font-bold text-white tracking-wide text-sm">Start Training</h3>
                <p className="text-secondary text-sm font-body mt-1">
                  Once you&apos;re set up on Trainerize, your first session details and schedule will be shared with you. Welcome to the system.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-surface-light border border-white/5 rounded-xl p-6 mb-8">
          <p className="text-secondary text-sm font-body">
            Questions? Reach out to us on{' '}
            <a
              href="https://instagram.com/amscperformance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Instagram @amscperformance
            </a>{' '}
            and we&apos;ll get you sorted.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block font-display text-sm font-semibold tracking-wider text-secondary hover:text-white transition-colors"
        >
          {'\u2190'} Back to Home
        </Link>
      </div>
    </section>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <section className="py-12 px-6 bg-background min-h-[80vh] flex items-center justify-center pt-24">
          <p className="text-secondary font-body text-sm">Loading...</p>
        </section>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
