'use client'

import { Zap, Shield, DollarSign, Code2 } from "lucide-react"

export default function Features() {
  return (
    <section className="relative bg-slate-950 text-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three steps between an AI agent and your API. No OAuth flows, no wallet setup, no friction.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            
            {/* Step 1 */}
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                <span className="text-blue-400 font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Agent Requests</h3>
              <p className="text-slate-400 text-sm">
                AI agent calls your protected endpoint
              </p>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-slate-700">
                  <path d="M4 16H28M28 16L20 8M28 16L20 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                <span className="text-purple-400 font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AgentPay Verifies</h3>
              <p className="text-slate-400 text-sm">
                We handle payment & identity verification
              </p>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-slate-700">
                  <path d="M4 16H28M28 16L20 8M28 16L20 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                <span className="text-green-400 font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">You Get Paid</h3>
              <p className="text-slate-400 text-sm">
                Instant settlement to your account
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          
          <div className="space-y-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Code2 className="h-5 w-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold">5-Minute Integration</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Drop in one middleware. No SDK bloat, no config files, no database changes.
            </p>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Zap className="h-5 w-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold">Protocol Agnostic</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Works with ChatGPT, Claude, custom agents. No need to support every payment method.
            </p>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20">
              <DollarSign className="h-5 w-5 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold">0.8% Fees</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lower than Stripe (2.9%), with instant settlement. Built for micropayments.
            </p>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <Shield className="h-5 w-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold">Fraud Protection</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Built-in verification and dispute handling. You focus on your product.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
