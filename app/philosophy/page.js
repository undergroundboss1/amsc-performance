'use client';
import Link from 'next/link';
import AnimatedSection from '../../components/AnimatedSection';

const pillars = [
  {
    number: '01',
    title: 'ASSESS',
    desc: 'Every athlete begins with a clear understanding of their current capacity.',
    items: ['Movement screening', 'Strength profiling', 'Speed & power testing'],
    quote: "You can't improve what you don't measure.",
    image: '/images/system-assess.jpg',
  },
  {
    number: '02',
    title: 'DEVELOP',
    desc: 'We build the physical qualities that underpin performance.',
    items: ['Strength', 'Mobility', 'Control', 'Power'],
    quote: 'Strength is the foundation of all athletic expression.',
    image: '/images/system-develop.jpg',
  },
  {
    number: '03',
    title: 'TRANSFER',
    desc: 'We convert physical development into sport performance.',
    items: ['Speed', 'Acceleration', 'Change of direction', 'Reactivity'],
    quote: "If it doesn't transfer, it doesn't matter.",
    image: '/images/system-transfer.jpg',
  },
];

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6 text-center">
        <AnimatedSection>
          <h1 className="font-bold text-4xl md:text-6xl leading-tight mb-6 tracking-[4px]">
            TRAINING IS NOT RANDOM.<br />IT&apos;S ENGINEERED.
          </h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            At AMSC PERFORMANCE, every athlete follows a structured system designed to develop strength, improve movement, and transfer performance to sport.
          </p>
        </AnimatedSection>
      </section>

      {/* Philosophy Statements */}
      <section className="py-28 px-6 bg-[#fafafa]">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div>
              <p className="text-2xl md:text-3xl font-bold tracking-[3px]">
                WE DON&apos;T CHASE INTENSITY.
              </p>
              <p className="text-2xl md:text-3xl font-bold tracking-[3px]">
                WE BUILD CAPACITY.
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold tracking-[3px]">
                WE DON&apos;T GUESS.
              </p>
              <p className="text-2xl md:text-3xl font-bold tracking-[3px]">
                WE ASSESS, DEVELOP, AND TRANSFER.
              </p>
            </div>
            <p className="text-secondary text-base leading-relaxed">
              Because long-term performance isn&apos;t built in moments — it&apos;s built through systems.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* The AMSC Development System */}
      <section className="py-28 px-6 bg-white">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="section-title font-black text-3xl md:text-5xl tracking-[4px] mb-4">
              THE AMSC DEVELOPMENT SYSTEM
            </h2>
            <p className="text-secondary text-base max-w-3xl mx-auto">
              Every athlete progresses through a structured system designed to build and transfer performance.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.number} delay={i * 0.15}>
              <div className="card bg-[#fafafa] shadow-[0_4px_16px_rgba(0,0,0,0.06)] h-full">
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"><span class="text-gray-400 text-5xl font-black">${pillar.number}</span></div>`;
                    }}
                  />
                </div>
                <div className="p-8">
                  <span className="text-accent text-xs font-bold tracking-[3px]">{pillar.number}</span>
                  <h3 className="font-black text-2xl tracking-[3px] mt-1 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4">{pillar.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-secondary text-sm">
                        <span className="text-accent font-bold">—</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-text font-semibold text-sm italic">{pillar.quote}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Engineered Performance Outcomes */}
      <section className="py-28 px-6 bg-[#fafafa]">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="section-title font-black text-3xl md:text-5xl tracking-[4px] mb-4">
              ENGINEERED PERFORMANCE OUTCOMES
            </h2>
            <p className="text-secondary text-base mb-16">
              Our system is built on measurable progress — not assumptions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'METRICS DASHBOARD', desc: 'Data visualization coming soon' },
                { title: 'PERFORMANCE TRACKING', desc: 'Data visualization coming soon' },
                { title: 'PROGRESS ANALYSIS', desc: 'Data visualization coming soon' },
              ].map((card) => (
                <div key={card.title} className="card bg-white p-10 border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <h3 className="font-bold text-sm tracking-[2px] mb-2">{card.title}</h3>
                  <p className="text-secondary text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section
        className="relative py-36 px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/philosophy-banner.jpg')",
          backgroundColor: '#0a0a0a',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <AnimatedSection>
          <div className="relative max-w-3xl mx-auto text-center text-white">
            <h2 className="font-black text-3xl md:text-5xl tracking-[4px] mb-6">
              EXPERIENCE THE SYSTEM
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-10">
              Join athletes who train with purpose, progress with intention, and perform with confidence.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-accent text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-accent-dark transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30 tracking-wide"
            >
              Apply to Train with AMSC
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
