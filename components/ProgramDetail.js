'use client';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

export default function ProgramDetail({ program }) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('${program.image}')`,
          backgroundColor: '#0a0a0a',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center text-white px-6">
          <span className="text-accent font-display text-xs font-bold tracking-[0.25em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            {program.label}
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl tracking-widest mt-6 mb-4">
            {program.name.toUpperCase()}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-body">
            {program.heroDesc}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 px-6 bg-surface">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title-left font-display font-bold text-3xl tracking-widest mb-6">OVERVIEW</h2>
            <p className="text-secondary text-base leading-relaxed font-body">
              {program.overview}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* What's Included */}
      <section className="py-32 px-6 bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title-left font-display font-bold text-3xl tracking-widest mb-8">WHAT&apos;S INCLUDED</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {program.features.map((feature, i) => (
                <AnimatedSection key={feature} delay={i * 0.08}>
                  <div className="card bg-surface-light p-6 border border-white/5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-accent text-lg mt-0.5 font-bold">&#10003;</span>
                      <p className="text-text text-sm leading-relaxed font-body">{feature}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Who It's For */}
      <section className="py-32 px-6 bg-surface">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title-left font-display font-bold text-3xl tracking-widest mb-6">WHO IT&apos;S FOR</h2>
            <p className="text-secondary text-base leading-relaxed font-body">
              {program.whoItsFor}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Pricing & CTA */}
      <section className="py-32 px-6 bg-background">
        <AnimatedSection>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="section-title font-display font-bold text-3xl tracking-widest mb-4">INVESTMENT</h2>
            <p className="font-display text-5xl font-bold text-white mb-2">
              {program.price}
              {program.price !== 'Contact' && (
                <span className="text-lg font-normal text-secondary"> / month</span>
              )}
            </p>
            <Link
              href={`/apply?program=${program.slug || ''}`}
              className="mt-8 inline-block bg-accent text-white px-12 py-4 rounded-full font-display text-sm font-bold tracking-wider uppercase hover:bg-accent-dark transition-all duration-200"
            >
              {program.price === 'Contact' ? 'Contact Us' : 'Start Your Application'}
            </Link>
            <p className="text-secondary text-sm mt-6 font-body">
              All programs begin with an initial assessment and consultation.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Back to Programs */}
      <section className="py-12 px-6 bg-surface text-center">
        <Link
          href="/programs"
          className="text-accent font-display font-semibold text-sm tracking-wider hover:underline"
        >
          &larr; Back to All Programs
        </Link>
      </section>
    </>
  );
}
