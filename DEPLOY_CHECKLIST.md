# AMSC Performance — Pre-Deployment Checklist

## Pre-Deploy Verification
- [ ] Build passes locally (`npm run build`) with zero errors
- [ ] No ESLint warnings in build output
- [ ] All pages render correctly (spot-check /, /programs, /philosophy, /apply)
- [ ] Mobile layout verified (375px breakpoint)
- [ ] No console errors in browser dev tools

## Security & Auth
- [x] No authenticated API routes exist (static site) — N/A
- [x] User inputs sanitized — Tally.so handles form submissions externally
- [x] No custom API endpoints — CORS N/A
- [x] No API endpoints — rate limiting N/A
- [x] No auth system — password reset N/A

## Error Handling
- [x] Frontend errors fail gracefully — no stack traces exposed
- [x] 404 page implemented (`app/not-found.js`)
- [x] 500/error page implemented (`app/error.js`)

## Performance
- [ ] All images compressed (target: <300KB each)
- [ ] No raw `<img>` tags — all use `next/image`
- [ ] Fonts loaded via `next/font` (no render-blocking @import)
- [ ] Third-party scripts use `next/script`
- [ ] Lighthouse Performance score >80

## SEO
- [ ] Every page has unique `metadata` (title + description)
- [ ] Open Graph and Twitter Card tags present
- [ ] `robots.txt` and `sitemap.xml` exist
- [ ] H1 present on every page
- [ ] All images have descriptive alt text

## Accessibility
- [ ] Color contrast passes WCAG AA (4.5:1 for text)
- [ ] Focus-visible states on all interactive elements
- [ ] Touch targets ≥44x44px on mobile
- [ ] `prefers-reduced-motion` respected (CSS + JS)
- [ ] Skip-to-content link present

## Observability
- [x] Vercel logs enabled by default for production errors
- [x] Vercel deployment notifications configured

## Deployment Safety
- [ ] Build passes locally (`npm run build`)
- [ ] Current state tagged in git before changes
- [ ] Preview URL reviewed before production deployment
- [ ] This checklist reviewed

---

## Rollback Procedure

### Method 1: Vercel Instant Rollback (Fastest — production)
1. Go to Vercel Dashboard → amsc-performance → Deployments
2. Find the last known good deployment
3. Click "..." → "Promote to Production"
4. Site reverts instantly, no code changes needed

### Method 2: Git Rollback (Code-level)
```bash
# List available stable tags
git tag -l

# Revert to a specific tag (creates a new commit, safe)
git revert HEAD --no-edit
git push origin main

# Or reset to a tagged stable state (destructive — use with care)
git reset --hard v1.0-stable
git push origin main --force
```

### Stable Tags
| Tag | Description | Date |
|-----|-------------|------|
| `v1.0-stable` | Baseline before audit fixes | 2026-04-04 |

### Rollback Rules
1. **Always tag before a batch of changes**: `git tag -a v1.X-stable -m "description"`
2. **One concern per commit** — never bundle unrelated fixes
3. **Test build locally before pushing** — `npm run build` must pass
4. **If anything breaks in production**: Use Vercel Instant Rollback first, then investigate
5. **Never force-push without team awareness**
