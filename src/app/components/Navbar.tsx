"use client" // this is a client component
import React from "react"
import { useEffect, useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Experience",
    page: "experience",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact",
    page: "contact",
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  //
  useEffect(() => {
    if (currentTheme) {
      setTheme("light");
    }
  }, []);
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full mx-auto px-4 sm:px-12 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home" smooth={true} onClick={() => scroll.scrollToTop()}>
              <div className="container flex items-center space-x-2">
                <h2 className="md:text-4xl font-bold hidden lg:block cursor-pointer">Janzenn Kyle G. Cruz</h2>
                <h2 className="text-4xl font-bold sm:block lg:hidden">JKGC</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}
          >
            <div className="items-center justify-center space-y-4 px-2 md:flex md:space-x-6 md:space-y-0 font-medium text-lg md:text-xl">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900 dark:text-neutral-100 hover:border-b-2 hover:border-neutral-900 dark:hover:border-neutral-100 cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
