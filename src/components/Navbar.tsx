"use client";
import Link from "next/link";
import Image from "next/image"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ThemeToggler } from "./ThemeToggler/ThemeToggler";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from "@constants";
import { usePathname } from 'next/navigation'
export const Navbar = () => {

  const pathname = usePathname();
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 via-transparent to-transparent">
      <nav className="container  relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/snap2.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-14"
                      />
                    </span>
                    <span className="font-extrabold">Snapsavvy</span>
                  </span>
                </Link>

                <DisclosureButton
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </DisclosureButton>

                <DisclosurePanel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                  <SignedIn>
                  {navLinks.map((item, index) => {
                            const isActive = item.route === pathname
                    return (
                      <li className={`sidebar-nav_element group ${
                        isActive ? 'bg-emerald-50 text-gray-800 hover:text-gray-900' : 'text-teal-950 dark:text-teal-50'
                      }`} key={index}>
                      <Link  href="/" className="w-full flex gap-x-3 font px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                                   <Image 
                        src={item.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {item.label}
                  </Link>
                      </li>
        
                    )
                  })}
                  </SignedIn>
                    <SignedOut>
                  <button className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                    <Link href="/sign-in">Login</Link>
                    </button>
                </SignedOut>
                  <UserButton afterSignOutUrl='/' showName />
                  </>
                </DisclosurePanel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <SignedIn>
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navLinks.map((menu, index) => {
              return (
                <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-2 py-2 text-md font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu.label}
                </Link>
              </li>
              )
            })}
          </ul>
          </SignedIn>
        </div>

        <div className="hidden mr-3 space-x-4 justify-center items-center lg:flex nav__item">
        <ThemeToggler/>
        <SignedOut>
          <button className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            <Link href="/sign-in">Login</Link>
            </button>
        </SignedOut>
        <div className="text-gray-800 dark:text-slate-100">
        <UserButton afterSignOutUrl='/' showName />
        </div>
        </div>
      </nav>
    </div>
  );
}

