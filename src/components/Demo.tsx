'use client'

import { useState } from "react"
import { Copy, Check, CheckCircle2 } from "lucide-react"

const steps = [
  {
    id: 1,
    label: 'Create Intent',
    color: 'blue',
    description: 'Your agent creates a payment intent via the AgentPay API.',
    code: `const response = await fetch('https://api.agentpay.ai/v1/intent', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: 0.001,     // SOL
    currency: 'SOL',
    description: 'Access premium data endpoint',
  }),
});

const { intentId, paymentAddress } = await response.json();`,
  },
  {
    id: 2,
    label: 'Pay with Solana',
    color: 'purple',
    description: 'The agent sends a Solana transaction to the payment address.',
    code: `import { Connection, PublicKey, SystemProgram,
         Transaction, sendAndConfirmTransaction } from '@solana/web3.js';

const connection = new Connection('https://api.mainnet-beta.solana.com');

const tx = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: agentWallet.publicKey,
    toPubkey: new PublicKey(paymentAddress),
    lamports: 1_000_000, // 0.001 SOL
  })
);

const signature = await sendAndConfirmTransaction(connection, tx, [agentWallet]);`,
  },
  {
    id: 3,
    label: 'Verified',
    color: 'green',
    description: 'AgentPay confirms the payment and grants API access instantly.',
    code: `// Verify payment and get access token
const verify = await fetch('https://api.agentpay.ai/v1/verify', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
  body: JSON.stringify({ intentId, signature }),
});

const { accessToken, expiresAt } = await verify.json();

// Use the access token to call the protected endpoint
const data = await fetch('/api/premium-data', {
  headers: { 'X-AgentPay-Token': accessToken },
});`,
  },
]

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  green: 'bg-green-500/10 border-green-500/20 text-green-400',
}

export default function Demo() {
  const [activeStep, setActiveStep] = useState(0)
  const [copied, setCopied] = useState(false)

  const step = steps[activeStep]

  const copyCode = () => {
    navigator.clipboard.writeText(step.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="demo" className="relative bg-slate-950 text-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See how it works
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From payment intent to verified access in three steps.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Step Selector */}
          <div className="flex flex-row lg:flex-col gap-3">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveStep(i)}
                className={`flex-1 lg:flex-none flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                  activeStep === i
                    ? 'bg-slate-800 border-slate-600'
                    : 'bg-slate-900/50 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-9 h-9 rounded-full border flex-shrink-0 ${colorMap[s.color]}`}
                >
                  {activeStep > i ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <span className="font-bold text-sm">{s.id}</span>
                  )}
                </div>
                <span className="font-medium text-sm hidden sm:block">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Code Panel */}
          <div className="lg:col-span-2">
            <div className="mb-3">
              <h3 className="text-lg font-semibold">{step.label}</h3>
              <p className="text-slate-400 text-sm mt-1">{step.description}</p>
            </div>
            <div className="relative rounded-xl border border-slate-800 bg-slate-900/80 p-6">
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
              <pre className="overflow-x-auto text-sm font-mono leading-relaxed text-slate-300 pr-8">
                <code>{step.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
