export default function AboutUs() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-4xl font-black mb-8">The Architects</h1>
      <div className="prose prose-invert prose-lg text-white/70">
        <p className="text-xl text-white font-medium mb-8">
          MindForge was forged from a simple, radical belief: our digital experiences should sharpen our minds, not numb them.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Vision</h2>
        <p>The modern mobile landscape is dominated by mindless scrolling and RNG (Random Number Generation) based games that rely on luck and pay-to-win mechanics. We wanted to build an alternative—a pure, deterministic cognitive e-sports arena.</p>
        <p>In MindForge, there are no dice rolls. There are no luck-based loot boxes that give you an advantage in combat. Every duel is a test of raw logic, spatial reasoning, and memory under pressure. The smarter, faster player always wins.</p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Lead Architect</h2>
        <p>MindForge is conceptualized and engineered by <strong>Kartikeya Mishra</strong>. Driven by a passion for complex algorithms, large language models, and competitive architecture, Kartikeya set out to build an ecosystem that bridges the gap between brain-training utilities and high-stakes competitive gaming.</p>
        
        <div className="p-6 mt-8 rounded-2xl bg-[#1E1E1E] border border-[#6C63FF]/30 border-l-4 border-l-[#6C63FF]">
          <p className="m-0 italic text-white/80">We are not just building a game; we are building a gym for the human mind. An arena where intellect is the only weapon that matters.</p>
        </div>
      </div>
    </div>
  );
}