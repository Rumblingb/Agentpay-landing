'use client'

import Link from "next/link"
import { Github, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-3">AgentPay</h3>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              The universal payment gateway for AI agents. Accept payments from any autonomous agent with one line of code.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://github.com/agentpay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com/agentpay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="mailto:hello@agentpay.ai"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-slate-400 hover:text-white text-sm transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} AgentPay. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Built for the autonomous economy
          </p>
        </div>
      </div>
    </footer>
  )
}
