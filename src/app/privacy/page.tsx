export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-4xl font-black mb-8">Data Shielding (Privacy Policy)</h1>
      <div className="prose prose-invert prose-lg text-white/70">
        <p>Your cognitive data is your most valuable asset. At MindForge, we treat your privacy with the same rigor we apply to our anti-cheat architecture. We collect data to empower you, not to exploit you.</p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">What We Monitor</h2>
        <p>To provide you with accurate ELO rankings and weekly AI insights, our systems monitor your gameplay telemetry. This includes reaction times, category proficiencies (Logic, Math, Memory), and accuracy rates. We also collect basic profile information necessary for account creation and secure matchmaking.</p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Use Your Telemetry</h2>
        <p>We use your combat record to:</p>
        <ul>
          <li><strong>Ensure Fair Play:</strong> Our proprietary anti-cheat firewall analyzes sub-millisecond reaction times to detect bot activity.</li>
          <li><strong>Drive Personal Growth:</strong> We feed your performance metrics into our AI engine to generate your personalized Cognitive Profile, helping you identify areas for improvement.</li>
          <li><strong>Optimize the Arena:</strong> Match telemetry helps us balance question difficulty and refine the ELO distribution algorithm.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Zero Data Brokering</h2>
        <p>We do not—and will never—sell your personal performance data, email address, or identity to third-party data brokers or ad networks. Your mind belongs to you.</p>

        <p className="mt-8 text-white/50 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}. For data deletion requests, initiate a transmission via our Contact page.</p>
      </div>
    </div>
  );
}