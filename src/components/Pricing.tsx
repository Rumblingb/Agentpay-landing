'use client'

import { Check } from "lucide-react"

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3000'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    description: 'Get started with AgentPay at no cost.',
    features: [
      'Up to 100 transactions/mo',
      '0.8% transaction fee',
      'API access',
      'Community support',
      'Basic analytics',
    ],
    cta: 'Start for Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/mo',
    description: 'For growing products with higher volume.',
    features: [
      'Unlimited transactions',
      '0.5% transaction fee',
      'Priority API access',
      'Email support',
      'Advanced analytics',
      'Webhook integrations',
      'Custom rate limits',
    ],
    cta: 'Start Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for high-volume teams.',
    features: [
      'Volume-based pricing',
      'Dedicated infrastructure',
      'SLA guarantees',
      'Dedicated support',
      'Custom integrations',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    highlight: false,
    href: 'mailto:sales@agentpay.ai',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-900/50 text-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl p-8 ${
                tier.highlight
                  ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30'
                  : 'bg-slate-950 border border-slate-800'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="text-slate-300 text-sm font-medium mb-2">{tier.name}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-slate-400">{tier.period}</span>}
                </div>
                <p className="text-slate-400 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href ?? DASHBOARD_URL}
                className={`w-full inline-flex items-center justify-center h-11 rounded-lg font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 ${
                  tier.highlight
                    ? 'bg-white text-slate-950 hover:bg-slate-100 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'
                    : 'border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 focus-visible:ring-slate-400'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Need custom pricing for high volume?{' '}
            <a href="mailto:sales@agentpay.ai" className="text-blue-400 hover:text-blue-300 underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
