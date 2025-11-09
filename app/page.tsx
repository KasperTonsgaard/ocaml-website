"use client"
import OCaml from 'app/components/ocaml'
import { useLocale } from './context/LocaleContext'

export default function Page() {
  const { t } = useLocale()
  
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          {t('home.title')}
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          {t('home.pressSpace')} <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-xs font-mono">{t('footer.space')}</kbd> {t('home.toDance')}
        </p>
      </div>
      <div className="flex justify-center">
        <OCaml/>
      </div>
    </section>
  )
}
