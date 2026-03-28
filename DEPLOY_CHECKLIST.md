# AMSC Performance — Pre-Deployment Checklist

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

## Performance & Database
- [x] No database — N/A
- [x] Images use lazy loading and proper sizing
- [x] Next.js automatic optimizations enabled

## Observability
- [x] Vercel logs enabled by default for production errors
- [x] Vercel deployment notifications configured

## Deployment Safety
- [x] Build passes locally (`npm run build`)
- [x] Preview URL reviewed before production deployment
- [x] Rollback plan: Vercel → Deployments → Instant Rollback
- [x] This checklist committed and reviewed
