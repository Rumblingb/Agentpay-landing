import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgentPay - Payments for AI Agents',
  description: 'Accept payments from any AI agent with one line of code. Protocol-agnostic payment gateway for ChatGPT, Claude, and autonomous agents.',
  keywords: ['AI payments', 'agent payments', 'ChatGPT payments', 'Claude payments', 'autonomous agents', 'micropayments'],
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
