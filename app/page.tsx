export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Track API Rate Limits
          <span className="block text-[#58a6ff]">Before They Break You</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Monitor rate limit consumption across OpenAI, Anthropic, and more in real-time.
          Get email and Slack alerts before you hit limits and cause outages.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Monitoring — $15/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required to try</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Providers Supported", value: "10+" },
            { label: "Alert Channels", value: "Email & Slack" },
            { label: "Data Retention", value: "90 Days" }
          ].map((stat) => (
            <div key={stat.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl font-bold text-[#58a6ff] mb-1">{stat.value}</div>
              <div className="text-[#8b949e] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#30363d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "📊", text: "Real-time dashboards" },
            { icon: "🔔", text: "Threshold alerts" },
            { icon: "📈", text: "Historical trends" },
            { icon: "🔗", text: "Webhook support" }
          ].map((f) => (
            <div key={f.text} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{f.icon}</span>
              <span className="text-sm text-[#8b949e]">{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. No surprises.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-8">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited API providers",
              "Real-time rate limit tracking",
              "Email & Slack alerts",
              "90-day historical data",
              "Webhook integrations",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-center transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which API providers are supported?",
              a: "We support OpenAI, Anthropic, Cohere, Hugging Face, Google AI, AWS Bedrock, and more. New providers are added regularly based on user requests."
            },
            {
              q: "How do alerts work?",
              a: "Set custom thresholds (e.g., 80% of your rate limit). When consumption crosses that threshold, you receive an immediate email and/or Slack notification so you can act before hitting the limit."
            },
            {
              q: "Is my API key data secure?",
              a: "Your API keys are encrypted at rest and never logged. We only use read-only scopes to fetch usage data and never make API calls on your behalf."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} API Rate Limit Tracker. All rights reserved.</p>
      </footer>
    </main>
  );
}
