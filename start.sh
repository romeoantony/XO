#!/bin/bash

# XO Game - Quick Start Script
# This script helps you get started with the XO Game quickly

echo "🎮 XO Game - Quick Start"
echo "========================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Ask user what they want to do
echo "What would you like to do?"
echo "1) Start development server"
echo "2) Build for production"
echo "3) Preview production build"
echo "4) Deploy to GitHub Pages (requires gh-pages package)"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Starting development server..."
        echo "The app will open at http://localhost:5173"
        npm run dev
        ;;
    2)
        echo ""
        echo "🏗️  Building for production..."
        npm run build
        echo ""
        echo "✅ Build complete! Files are in the 'dist' folder."
        ;;
    3)
        echo ""
        echo "👀 Building and previewing production build..."
        npm run build && npm run preview
        ;;
    4)
        echo ""
        echo "🚀 Deploying to GitHub Pages..."
        if ! npm list gh-pages &> /dev/null; then
            echo "Installing gh-pages..."
            npm install --save-dev gh-pages
        fi
        npm run deploy
        ;;
    *)
        echo "Invalid choice. Please run the script again."
        exit 1
        ;;
esac
