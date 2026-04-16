"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEye, faClock } from '@fortawesome/free-solid-svg-icons'
import { useLocale } from '../context/LocaleContext'
import ContentGrid from '../components/ContentGrid'
import ContentCard from '../components/ContentCard'

const publications = [
  {
    id: 'onp-book',
    titleKey: 'publications.onpBook.title',
    descriptionKey: 'publications.onpBook.description',
    date: 'November 2025',
    statusKey: 'publications.comingSoon',
    typeKey: 'publications.book',
    pages: '16',
    format: 'PDF',
    size: '2.4 MB',
    href: '/publications/onp-book',
    downloadUrl: '/assets/publications/onp-book.pdf',
    isAvailable: true // ← Change this to 'true' when PDF is uploaded to enable download
  }
]

export default function PublicationsPage() {
  const { t } = useLocale()
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('publications.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('publications.description')}
            <br /><br />
            {t('publications.downloadExplore')}
          </p>
        </div>

        {/* Publications Grid */}
        <ContentGrid>
          {publications.map((publication) => (
            <ContentCard key={publication.id}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {t(publication.titleKey)}
                    </h2>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                      {t(publication.typeKey)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>📅 {publication.date}</span>
                    <span>📄 {publication.pages} {t('publications.pages')}</span>
                    <span>💾 {publication.size}</span>
                    <span>📋 {publication.format}</span>
                  </div>
                </div>

                {!publication.isAvailable && (
                    <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                        <span className={`mt-1 px-3 py-1 rounded-full text-xs font-medium ${
                            publication.isAvailable
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                            : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
                        }`}>
                            {t(publication.statusKey)}
                        </span>
                    </div>
                )}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t(publication.descriptionKey)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-3">
                  {publication.isAvailable ? (
                    <a
                      download
                      href={publication.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {t('publications.downloadPdf')}
                      <FontAwesomeIcon icon={faDownload} size="sm" className="ml-2" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center px-6 py-3 bg-gray-400 text-gray-200 font-medium rounded-lg cursor-not-allowed opacity-60"
                    >
                      {t('publications.comingSoon')}
                      <FontAwesomeIcon icon={faClock} size="sm" className="ml-2" />
                    </button>
                  )}

                  <Link
                    href={publication.href}
                    className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    {t('publications.viewDetails')}
                    <FontAwesomeIcon icon={faEye} size="sm" className="ml-2" />
                  </Link>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {t('publications.publicationId')}: {publication.id}
                </div>
              </div>
            </ContentCard>
          ))}
        </ContentGrid>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {t('publications.morePublications')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t('publications.stayTunedPubs')}
          </p>
        </div>
      </div>
    </div>
  )
}