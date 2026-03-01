import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-4xl font-black mb-8">The Arena Codex (Terms of Service)</h1>
      <div className="prose prose-invert prose-lg text-white/70">
        <p>Welcome to MindForge. By entering this cognitive arena, you agree to abide by the rules of engagement. These terms are designed to maintain a fiercely competitive, yet perfectly fair ecosystem for all agents.</p>
        
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Code of Conduct & Fair Play</h2>
        <p>MindForge is built on pure cognition. You agree to rely solely on your own intellect. The use of artificial intelligence, external scripts, memory manipulation tools, or any third-party assistance during a ranked duel or tournament gauntlet is strictly prohibited and will result in a permanent neural-link severance (account ban).</p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Premium Upgrades & Subscriptions</h2>
        <p>Agents may choose to unlock their full potential through Premium tiers. These upgrades grant access to advanced AI cognitive insights, mastery auras, and unlimited match history. As outlined in our <Link href="/refund" className="text-[#03DAC6] hover:underline">Refund Policy</Link>, all transactions are final to preserve the integrity of the prize pools and matchmaking servers.</p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Account Integrity</h2>
        <p>Your ELO ranking is a reflection of your personal mind. Account sharing or boosting compromises the deterministic matchmaking engine. Protect your credentials, as you are solely responsible for all actions taken under your Agent ID.</p>

        <p className="mt-8 text-[#6C63FF] font-medium">By proceeding, you acknowledge these terms and step into the Arena on equal footing with the world sharpest minds.</p>
      </div>
    </div>
  );
}