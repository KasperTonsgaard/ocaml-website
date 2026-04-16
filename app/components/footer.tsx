"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { useLocale } from '../context/LocaleContext'

export default function Footer() {
  const { t } = useLocale()
  
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 px-6 py-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              {t('footer.universe')}
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="https://github.com/KasperTonsgaard/ocaml-website" 
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('footer.github')}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </a>
            <span className="text-neutral-500 dark:text-neutral-500">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
