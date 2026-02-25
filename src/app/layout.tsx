import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agentpay.ai'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'AgentPay – Payments for AI Agents',
  description: 'Accept payments from any AI agent with one line of code. Protocol-agnostic payment gateway for ChatGPT, Claude, and autonomous agents.',
  keywords: ['AI payments', 'agent payments', 'ChatGPT payments', 'Claude payments', 'autonomous agents', 'micropayments', 'Solana payments'],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'AgentPay – Payments for AI Agents',
    description: 'Accept payments from any AI agent with one line of code. Protocol-agnostic payment gateway with instant Solana settlement.',
    siteName: 'AgentPay',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentPay – Payments for AI Agents',
    description: 'Accept payments from any AI agent with one line of code.',
    site: '@agentpay',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
