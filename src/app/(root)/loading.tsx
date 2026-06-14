export default function Loading() {
  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header skeleton */}
      <div className="space-y-2">
        <div className="skeleton h-9 w-56 rounded-xl" />
        <div className="skeleton h-5 w-80 rounded-lg" />
      </div>

      {/* Search skeleton */}
      <div className="skeleton h-12 w-full max-w-96 rounded-[16px]" />

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-[16px] border border-purple-200/30 dark:border-purple-800/25 overflow-hidden"
          >
            <div className="skeleton aspect-[4/3] w-full" />
            <div className="p-4 space-y-2">
              <div className="skeleton h-5 w-3/4 rounded-lg" />
              <div className="skeleton h-4 w-1/2 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
