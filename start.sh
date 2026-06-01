#!/bin/bash
# React Quiz Application - Quick Start Script

echo "======================================"
echo "React Quiz Application - Quick Start"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo "Visit: https://nodejs.org/ and install the LTS version"
    exit 1
fi

echo "✅ Node.js detected: $(node --version)"
echo "✅ npm detected: $(npm --version)"
echo ""

# Navigate to project directory
cd "$(dirname "$0")" || exit

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Starting development server..."
    echo "The app will open at: http://localhost:5173"
    echo ""
    npm run dev
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
