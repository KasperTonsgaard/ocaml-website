"use client"
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useLocale } from '../context/LocaleContext'

const navItems = {
    '/': 'nav.home',
    '/game-jams': 'nav.gameJams',
    '/publications': 'nav.publications',
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { t, locale, setLocale } = useLocale()
  const langDropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{t('footer.universe')}</span>
        </a>
        
        <div className="flex items-center md:order-2">
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
        </div>
        
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 md:ml-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:items-center">
            {Object.entries(navItems).map(([path, translationKey]) => {
              return (
                <li key={path}>
                <Link
                  href={path}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(translationKey)}
                </Link>
                </li>
              )
            })}
            
            {/* Language Dropdown */}
            <li className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors cursor-pointer"
              >
                <span className="text-xl">{locale === 'da' ? '🇩🇰' : '🇬🇧'}</span>
                <FontAwesomeIcon icon={faChevronDown} size="xs" className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                  <button
                    onClick={() => {
                      setLocale('da')
                      setIsLangOpen(false)
                      setIsOpen(false)
                    }}
                    className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg transition-colors ${
                      locale === 'da' ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                  >
                    <span className="text-xl">🇩🇰</span>
                    <span className="text-sm text-gray-900 dark:text-white">Dansk</span>
                  </button>
                  <button
                    onClick={() => {
                      setLocale('en')
                      setIsLangOpen(false)
                      setIsOpen(false)
                    }}
                    className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg transition-colors ${
                      locale === 'en' ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                  >
                    <span className="text-xl">🇬🇧</span>
                    <span className="text-sm text-gray-900 dark:text-white">English</span>
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
