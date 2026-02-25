import type { Metadata } from 'next'
import DocsClient from './DocsClient'

export const metadata: Metadata = {
  title: 'API Reference – AgentPay',
  description: 'Interactive API documentation for AgentPay. Explore endpoints for payment intents, verification, webhooks, and more.',
}

export default function DocsPage() {
  return <DocsClient />
}
