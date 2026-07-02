import Link from 'next/link';

// Branded 404 for the static export (replaces Next's default white page).
// Server component, bilingual inline (no client language context needed).
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-abyss px-6 text-center">
      <p className="font-body text-[0.72rem] font-medium uppercase tracking-mega text-amber-glow">
        404
      </p>
      <h1 className="font-display text-4xl font-semibold text-bone sm:text-5xl">
        Page not found
      </h1>
      <p className="text-base text-bone/70" dir="rtl" lang="ar">
        الصفحة غير موجودة
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-amber-stage px-7 py-3.5 text-sm font-semibold uppercase tracking-wide2 text-abyss transition-colors hover:bg-amber-glow"
      >
        Back to home · العودة إلى الرئيسية
      </Link>
    </main>
  );
}
