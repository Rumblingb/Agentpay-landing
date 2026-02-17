'use client'

import Link from "next/link"
import { ArrowRight, CheckCircle2, Copy, Check } from "lucide-react"
import { useState } from "react"

const codeSnippet = `const agentpay = require('agentpay');

app.get('/api/premium-data', 
  agentpay.middleware(0.001), 
  (req, res) => {
    res.json({ data: 'Unlocked for AI Agent' });
  }
);`

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-screen flex items-center">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-blue-500 rounded-full blur-[160px]"></div>
        <div className="absolute top-[50%] right-[10%] w-96 h-96 bg-purple-500 rounded-full blur-[160px]"></div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          
          {/* Badge - Simplified */}
          <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm px-4 py-1.5 text-sm text-slate-300">
            Early Access
          </div>
          
          {/* Headline - Punchy & Clean */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Payments for AI agents.
            <span className="block text-slate-400 mt-2">One line of code.</span>
          </h1>
          
          {/* Subheading - Concise */}
          <p className="max-w-[600px] text-slate-400 text-lg md:text-xl leading-relaxed">
            Accept payments from ChatGPT, Claude, or any autonomous agent. Protocol-agnostic. Instant settlement. 0.8% fees.
          </p>

          {/* CTAs - Reordered & Refined */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
            <Link
              href="/docs"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-slate-950 shadow-lg transition-all hover:bg-slate-100 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Get API Keys
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/50 backdrop-blur-sm px-8 text-sm font-semibold text-slate-200 shadow-sm transition-all hover:bg-slate-800 hover:border-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              View Docs
            </Link>
          </div>

          {/* Code Block - Minimal & Functional */}
          <div className="pt-12 w-full max-w-3xl">
            <div className="relative rounded-xl border border-slate-800 bg-slate-950/90 backdrop-blur-sm p-6 text-left shadow-2xl group">
              
              {/* Copy Button */}
              <button
                onClick={copyCode}
                className="absolute top-4 right-4 p-2 rounded-md text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-all"
                aria-label="Copy code"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>

              {/* Code with syntax highlighting */}
              <pre className="overflow-x-auto text-sm font-mono leading-relaxed">
                <code className="text-slate-300">
                  <span className="text-purple-400">const</span> agentpay = <span className="text-blue-400">require</span>(<span className="text-green-400">'agentpay'</span>);
                  {'\n\n'}
                  app.<span className="text-blue-400">get</span>(<span className="text-green-400">'/api/premium-data'</span>,{'\n'}
                  {'  '}agentpay.<span className="text-blue-400">middleware</span>(<span className="text-orange-400">0.001</span>),{'\n'}
                  {'  '}(req, res) {'=> {'}{'\n'}
                  {'    '}res.json({'{'} data: <span className="text-green-400">'Unlocked for AI Agent'</span> {'}'});{'\n'}
                  {'  }'}){'\n'}
                  );
                </code>
              </pre>
            </div>

            {/* Feature Pills - Compact */}
            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>5-min setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Universal support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Fraud protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
