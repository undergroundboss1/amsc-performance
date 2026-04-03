'use client';

export default function Error({ error, reset }) {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-background pt-20">
      <div className="max-w-md">
        <h1 className="font-display font-black text-7xl tracking-widest text-accent mb-4">500</h1>
        <h2 className="font-display font-bold text-2xl tracking-widest mb-4">SOMETHING WENT WRONG</h2>
        <p className="text-secondary text-sm mb-8 leading-relaxed font-body">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="inline-block bg-accent text-white px-8 py-3 rounded-full font-display font-bold text-sm tracking-wider uppercase hover:bg-accent-dark transition-all duration-200 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
