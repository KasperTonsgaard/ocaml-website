"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faDownload, faClock } from '@fortawesome/free-solid-svg-icons'
import { useLocale } from '../../context/LocaleContext'

// ← Change this to 'true' when PDF is uploaded to enable download
const isBookAvailable = true

export default function ONPBookPage() {
  const { t } = useLocale()
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/publications"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="sm" className="mr-2" />
            {t('publications.backToPublications')}
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('publications.onpBook.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {t('publications.onpBook.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
              {t('publications.book')}
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              50+ {t('publications.pages')}
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
              {t('publications.format')} PDF
            </span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
              5.2 MB
            </span>
            <span className={`px-3 py-1 rounded-full ${
              isBookAvailable 
                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
            }`}>
              {isBookAvailable ? t('publications.available') : t('publications.comingSoon')}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Book Cover / Preview */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg p-8 text-white text-center shadow-lg">
              <div className="text-6xl mb-4">🐷</div>
              <h3 className="text-xl font-bold mb-2">{t('publications.onpBook.title')}</h3>
              <p className="text-pink-100 mb-6">{t('publications.onpBook.authors')}</p>
              {isBookAvailable ? (
                <a
                  href="/assets/publications/onp-book.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 w-full justify-center"
                >
                  {t('publications.downloadPdf')}
                  <FontAwesomeIcon icon={faDownload} size="sm" className="ml-2" />
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center px-6 py-3 bg-gray-400 text-gray-200 font-medium rounded-lg cursor-not-allowed opacity-60 w-full justify-center"
                >
                  {t('publications.comingSoon')}
                  <FontAwesomeIcon icon={faClock} size="sm" className="ml-2" />
                </button>
              )}
            </div>
          </div>

          {/* Book Details */}
          <div className="md:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('publications.aboutBook')}
              </h2>
              
              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>{t('publications.onpBook.title')}</strong> {t('publications.onpBook.bookDescription')}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {t('publications.onpBook.bookDescription2')}
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('publications.onpBook.bookDescription3')}
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('publications.keyTopics')}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('publications.onpBook.keyTopicsList.0')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('publications.onpBook.keyTopicsList.1')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('publications.onpBook.keyTopicsList.2')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('publications.onpBook.keyTopicsList.3')}
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('publications.onpBook.keyTopicsList.4')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('publications.onpBook.keyTopicsList.5')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('publications.onpBook.keyTopicsList.6')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('publications.onpBook.keyTopicsList.7')}
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t('publications.publicationDetails')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-gray-900 dark:text-white">{t('publications.authors')}:</strong>
                    <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
                      <li>Kristian Anton Hedegaard</li>
                      <li>Jeppe Tofft</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">{t('publications.institution')}:</strong>
                    <p className="text-gray-700 dark:text-gray-300">{t('publications.onpBook.institution')}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">{t('publications.publicationDate')}:</strong>
                    <p className="text-gray-700 dark:text-gray-300">{t('publications.onpBook.publicationDate')}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">{t('publications.specialThanks')}:</strong>
                    <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
                      <li>
                        <a
                          href="https://kaspertonsgaard.dk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Kasper Tonsgaard
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">{t('publications.format')}:</strong>
                    <p className="text-gray-700 dark:text-gray-300">PDF (5.2 MB)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('publications.readyToMaster')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('publications.downloadDescription')}
            </p>
            {isBookAvailable ? (
              <a
                href="/assets/publications/onp-book.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
              >
                {t('publications.onpBook.downloadBook')}
                <FontAwesomeIcon icon={faDownload} size="lg" className="ml-2" />
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center px-8 py-4 bg-gray-400 text-gray-200 font-medium rounded-lg cursor-not-allowed opacity-60 text-lg"
              >
                {t('publications.bookComingSoon')}
                <FontAwesomeIcon icon={faClock} size="lg" className="ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}