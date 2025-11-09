"use client"
import { useLocale } from '../context/LocaleContext'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLocale('da')}
        className={`flex items-center gap-1 px-2 py-1 rounded transition-all ${
          locale === 'da' 
            ? 'bg-blue-100 dark:bg-blue-900' 
            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-label="Dansk"
        title="Dansk"
      >
        <span className="text-xl">🇩🇰</span>
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`flex items-center gap-1 px-2 py-1 rounded transition-all ${
          locale === 'en' 
            ? 'bg-blue-100 dark:bg-blue-900' 
            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-label="English"
        title="English"
      >
        <span className="text-xl">🇬🇧</span>
      </button>
    </div>
  )
}
