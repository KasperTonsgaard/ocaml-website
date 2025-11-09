"use client"
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const navItems = {
    '/': {
        name: 'Home',
    },
    '/game-jams': {
        name: 'Game Jams',
    },
    '/publications': {
        name: 'Publications',
    },
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OCaml's Universe</span>
        </a>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors" 
          aria-controls="navbar-default" 
          aria-expanded={isOpen}
        >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <li key={path}>
                <Link
                  href={path}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
