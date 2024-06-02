import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
function Landing() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-16 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-20">
  <div className="relative z-10">
    <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
      <svg className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
        <defs>
          <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width={200} height={200} x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
          <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
        </rect>
      </svg>
    </div>
  </div>
  <div className="relative z-20 justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
  <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4">
  <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent text-white-300 sm:text-7xl">
  Revive, Colorize, and Enhance
    <span className="relative text-white-600 bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">your Images</span>
    <span className="relative whitespace-nowrap text-emerald-700 dark:text-orange-300">
      <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-500 dark:fill-orange-300/60" preserveAspectRatio="none">
        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z" />
      </svg>
      <span className="relative">with AI</span>
    </span>
  </h1>
  <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-white-400 text-white-500 dark:text-gray-300 leading-7">
  SnapSavvy’s AI Restoration feature breathes new life into old, damaged, or faded photographs. Using advanced algorithms, we remove scratches, fix blemishes, and enhance overall quality, making your photos look as good as new.
  </h2>

    <button className="px-8 py-4 mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
    <Link href="/main">Get started 🚀</Link>
    </button>

</div>

<div className='mt-10'>
<div className="grid gap-4 justify-center items-center">
  <div className="grid grid-cols-5 gap-16">
    <div>
      <Image className="h-auto max-w-full rounded-lg"  src="/img/image1.jpg" width={500} height={500} alt="" />
    </div>
    <div>
      <Image className="h-auto max-w-full rounded-lg"  src="/img/image2.jpg" width={500} height={500}  alt="" />
    </div>
    <div>
      <Image className="h-auto max-w-full rounded-lg"  src="/img/image3.jpg" width={500} height={500}  alt="" />
    </div>
    <div>
      <Image className="h-auto max-w-full rounded-lg"  src="/img/image4.jpg" width={500} height={500}  alt="" />
    </div>
    <div>
      <Image className="h-auto max-w-full rounded-lg"  src="/img/image5.jpg" width={500} height={500}  alt="" />
    </div>
  </div>
</div>
</div>
  </div>
</section>
  )
}

export default Landing
