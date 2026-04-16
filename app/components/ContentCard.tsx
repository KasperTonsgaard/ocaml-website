import { ReactNode } from 'react'

export default function ContentCard({ children }: { children: ReactNode }) {
  return (
    <article className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
      {children}
    </article>
  )
}
