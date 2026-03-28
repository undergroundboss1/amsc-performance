'use client';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

export default function ProgramDetail({ program }) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('${program.image}')`,
          backgroundColor: '#0a0a0a',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center text-white px-6">
          <span className="text-accent text-xs font-bold tracking-[3px] bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            {program.label}
          </span>
          <h1 className="font-black text-4xl md:text-6xl tracking-[4px] mt-6 mb-4">
            {program.name.toUpperCase()}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {program.heroDesc}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-28 px-6 bg-white">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title-left font-bold text-3xl tracking-[3px] mb-6">OVERVIEW</h2>
            <p className="text-secondary text-base leading-relaxed">
              {program.overview}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* What's Included */}
      <section className="py-28 px-6 bg-[#fafafa]">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title-left font-bold text-3xl tracking-[3px] mb-8">WHAT&apos;S INCLUDED</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {program.features.map((feature, i) => (
                <AnimatedSection key={feature} delay={i * 0.08}>
                  <div className="card bg-white p-6 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <span className="text-accent text-lg mt-0.5 font-bold">&#10003;</span>
                      <p className="text-text text-sm leading-relaxed">{feature}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Who It's For */}
      <section className="py-28 px-6 bg-white">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title-left font-bold text-3xl tracking-[3px] mb-6">WHO IT&apos;S FOR</h2>
            <p className="text-secondary text-base leading-relaxed">
              {program.whoItsFor}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Pricing & CTA */}
      <section className="py-28 px-6 bg-[#fafafa]">
        <AnimatedSection>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="section-title font-bold text-3xl tracking-[3px] mb-4">INVESTMENT</h2>
            <p className="text-5xl font-bold text-text mb-2">
              {program.price}
              {program.price !== 'Contact' && (
                <span className="text-lg font-normal text-secondary"> / month</span>
              )}
            </p>
            <Link
              href={`/apply?program=${program.slug || ''}`}
              className="mt-8 inline-block bg-accent text-white px-12 py-4 rounded-full text-sm font-semibold hover:bg-accent-dark transition-all duration-200 tracking-wide"
            >
              {program.price === 'Contact' ? 'Contact Us' : 'Start Your Application'}
            </Link>
            <p className="text-secondary text-sm mt-6">
              All programs begin with an initial assessment and consultation.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Back to Programs */}
      <section className="py-12 px-6 bg-white text-center">
        <Link
          href="/programs"
          className="text-accent font-semibold text-sm tracking-wide hover:underline"
        >
          &larr; Back to All Programs
        </Link>
      </section>
    </>
  );
}
