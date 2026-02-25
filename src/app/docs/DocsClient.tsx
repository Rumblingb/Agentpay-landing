'use client'

import Script from 'next/script'
import Link from 'next/link'

interface RedocStatic {
  init: (
    specUrl: string,
    options: Record<string, unknown>,
    container: HTMLElement | null
  ) => void
}

declare global {
  interface Window {
    Redoc: RedocStatic
  }
}

export default function DocsClient() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Minimal nav bar */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-white hover:text-slate-300 transition-colors">
            ← AgentPay
          </Link>
          <span className="text-sm text-slate-400">API Reference</span>
        </div>
      </nav>

      {/* Redoc container – styled to fill remaining viewport height */}
      <div id="redoc-container" style={{ minHeight: 'calc(100vh - 3.5rem)' }} />

      <Script
        src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.Redoc.init(
            '/openapi.yaml',
            {
              theme: {
                colors: { primary: { main: '#3b82f6' } },
                typography: { fontFamily: 'system-ui, sans-serif' },
                sidebar: { backgroundColor: '#0f172a', textColor: '#cbd5e1' },
                rightPanel: { backgroundColor: '#020617' },
              },
              hideDownloadButton: false,
              scrollYOffset: 56,
            },
            document.getElementById('redoc-container')
          )
        }}
      />
    </div>
  )
}
