export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center font-mono">
        <span className="text-xs text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 rounded-full">
          &gt; phase_1_scaffold_active
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold mt-6 text-zinc-100">Himmat Singh</h1>
        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto font-sans">
          B.Tech Computer Science student specializing in Python tools, local AI systems, and cloud architectures.
        </p>
      </div>
    </section>
  );
};
