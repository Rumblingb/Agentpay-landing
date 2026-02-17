#!/bin/bash

# AgentPay Landing Page - Setup Script
# This script helps you get started quickly in PyCharm

echo "🚀 AgentPay Landing Page - Quick Setup"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "Please install Node.js 18+ from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "Next steps:"
    echo "1. Run 'npm run dev' to start the development server"
    echo "2. Open http://localhost:3000 in your browser"
    echo "3. Start customizing the components in src/components/"
    echo ""
    echo "PyCharm Tips:"
    echo "- Right-click package.json and select 'Show npm Scripts'"
    echo "- Use the built-in terminal (Alt+F12) to run commands"
    echo "- Enable ESLint in Preferences > Languages > JavaScript > Code Quality Tools"
    echo ""
else
    echo ""
    echo "❌ Installation failed"
    echo "Please check the error messages above and try again"
    exit 1
fi
