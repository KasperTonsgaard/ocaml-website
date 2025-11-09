"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faKeyboard } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 px-6 py-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              OCaml's Universe
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="https://github.com/KasperTonsgaard" 
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </a>
            <span className="text-neutral-500 dark:text-neutral-500">
              © {new Date().getFullYear()} DAT5 Class of 2024-2027 at Aarhus University
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
