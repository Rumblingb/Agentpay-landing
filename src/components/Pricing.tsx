'use client'

import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <section className="relative bg-slate-900/50 text-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Built for micropayments. No monthly fees, no setup costs.
          </p>
        </div>

        {/* Pricing Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Traditional Payment Processors */}
            <div className="relative bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="mb-6">
                <div className="text-slate-400 text-sm font-medium mb-2">Traditional Processors</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">2.9%</span>
                  <span className="text-slate-400">+ $0.30</span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-slate-600 mt-1">×</span>
                  <span className="text-sm">High fees kill micropayments</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-slate-600 mt-1">×</span>
                  <span className="text-sm">Separate integration for each AI platform</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-slate-600 mt-1">×</span>
                  <span className="text-sm">Complex OAuth flows</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-slate-600 mt-1">×</span>
                  <span className="text-sm">Settlement in 2-7 days</span>
                </li>
              </ul>
            </div>

            {/* AgentPay */}
            <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30 rounded-xl p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Recommended
                </span>
              </div>

              <div className="mb-6">
                <div className="text-slate-300 text-sm font-medium mb-2">AgentPay</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">0.8%</span>
                  <span className="text-slate-400">flat</span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Micropayment-friendly pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">One integration for all AI agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Single line of code</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Instant settlement</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <button className="w-full inline-flex items-center justify-center h-12 rounded-lg bg-white text-slate-950 font-semibold transition-all hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              Need custom pricing for high volume? <a href="mailto:sales@agentpay.ai" className="text-blue-400 hover:text-blue-300 underline">Contact us</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
