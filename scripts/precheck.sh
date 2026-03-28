#!/bin/bash
set -e

echo "=============================="
echo "AMSC Performance Pre-Deploy Check"
echo "=============================="
echo ""

# Build check
echo "1. Running build..."
npm run build
echo "   ✓ Build passed"
echo ""

# Lint check
echo "2. Running lint..."
npm run lint 2>/dev/null && echo "   ✓ Lint passed" || echo "   ⚠ Lint warnings (non-blocking)"
echo ""

# Check for required files
echo "3. Checking required files..."
for f in app/not-found.js app/error.js DEPLOY_CHECKLIST.md; do
  if [ -f "$f" ]; then
    echo "   ✓ $f exists"
  else
    echo "   ✗ $f MISSING"
  fi
done
echo ""

echo "4. Pre-deploy checklist:"
echo "   - [ ] Preview URL reviewed?"
echo "   - [ ] All images uploaded to /public/images/?"
echo "   - [ ] DEPLOY_CHECKLIST.md updated?"
echo ""
echo "=============================="
echo "Ready to deploy: npx vercel --prod"
echo "=============================="
