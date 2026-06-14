"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex-center min-h-screen flex-col gap-8 text-center px-4">
      {/* Animated error indicator */}
      <div className="relative w-24 h-24 flex-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/20 animate-pulse" />
        <span className="relative text-4xl select-none">⚠️</span>
      </div>

      <div className="space-y-2 max-w-md">
        <h2 className="h2-bold text-slate-900 dark:text-slate-100">
          Something went wrong
        </h2>
        <p className="p-16-regular text-slate-500 dark:text-slate-400">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        {error.digest && (
          <p className="p-14-medium text-slate-300 dark:text-slate-600 font-mono mt-1">
            Error ID: {error.digest}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={reset}
          className="submit-button text-white px-8 rounded-full h-[46px] min-w-[140px]"
        >
          Try again
        </button>
        <Link
          href="/main"
          className="flex-center px-8 py-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 p-16-semibold"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
