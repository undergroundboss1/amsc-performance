'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f6] border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Tagline */}
          <div>
            <img
              src="/images/amsc-logo.svg"
              alt="AMSC Performance"
              className="h-10 mb-4"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.insertAdjacentHTML('afterend', '<div class="font-bold text-2xl tracking-tight mb-4"><span class="text-3xl font-black">AMSC</span><div class="text-[9px] tracking-[0.3em] font-normal -mt-1">PERFORMANCE</div></div>');
              }}
            />
            <p className="text-secondary text-sm mt-6 leading-relaxed">
              Train Smarter. Move Better. Perform Longer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-[2px] mb-5 text-text">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-secondary text-sm hover:text-accent transition-colors">Home</Link>
              <Link href="/programs" className="block text-secondary text-sm hover:text-accent transition-colors">Programs</Link>
              <Link href="/philosophy" className="block text-secondary text-sm hover:text-accent transition-colors">Philosophy</Link>
              <Link href="/member-portal" className="block text-secondary text-sm hover:text-accent transition-colors">Member Portal</Link>
              <Link href="/apply" className="block text-secondary text-sm hover:text-accent transition-colors">Apply</Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-[2px] mb-5 text-text">Programs</h4>
            <div className="space-y-3">
              <Link href="/programs/one-on-one" className="block text-secondary text-sm hover:text-accent transition-colors">1-on-1 Coaching</Link>
              <Link href="/programs/online" className="block text-secondary text-sm hover:text-accent transition-colors">Online Training</Link>
              <Link href="/programs/consulting" className="block text-secondary text-sm hover:text-accent transition-colors">Team Consulting</Link>
              <Link href="/programs/group" className="block text-secondary text-sm hover:text-accent transition-colors">Group Training</Link>
              <Link href="/programs/youth" className="block text-secondary text-sm hover:text-accent transition-colors">Youth Development</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-[2px] mb-5 text-text">Connect</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-secondary hover:text-accent hover:border-accent transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#e5e5e5] py-6 text-center">
        <p className="text-[#999] text-xs">
          &copy; 2026 AMSC Performance. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
