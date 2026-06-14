import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-center min-h-screen flex-col gap-8 text-center px-4">
      {/* Layered 404 text */}
      <div className="relative select-none">
        <p className="text-[160px] sm:text-[200px] font-black leading-none gradient-primary-text opacity-10 dark:opacity-[0.07]">
          404
        </p>
        <div className="absolute inset-0 flex-center">
          <p className="text-7xl sm:text-8xl font-black gradient-accent-text">
            404
          </p>
        </div>
      </div>

      <div className="space-y-2 max-w-md -mt-6">
        <h2 className="h2-bold text-slate-900 dark:text-slate-100">
          Page not found
        </h2>
        <p className="p-16-regular text-slate-500 dark:text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <Link
        href="/main"
        className="submit-button text-white px-8 rounded-full h-[46px] min-w-[160px] flex-center"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
