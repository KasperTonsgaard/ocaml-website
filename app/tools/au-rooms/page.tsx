"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowUpRightFromSquare, faCalendarAlt, faMapMarkerAlt, faClock, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useLocale } from '../../context/LocaleContext'

export default function AURoomsPage() {
  const { t } = useLocale()
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link 
          href="/tools"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <FontAwesomeIcon icon={faArrowLeft} size="sm" className="mr-2" />
          {t('tools.backToTools')}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {t('tools.auRooms.title')}
            </h1>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
              {t('tools.categorySchedule')}
            </span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('tools.auRooms.subtitle')}
          </p>
        </div>

        {/* Main Description */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('tools.auRooms.aboutTool')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {t('tools.auRooms.description')}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('tools.auRooms.longDescription')}
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t('tools.keyFeatures')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faSearch} className="text-blue-600 dark:text-blue-400 mr-3" size="lg" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('tools.auRooms.feature1')}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {t('tools.auRooms.feature1Desc')}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 dark:text-blue-400 mr-3" size="lg" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('tools.auRooms.feature2')}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {t('tools.auRooms.feature2Desc')}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faClock} className="text-blue-600 dark:text-blue-400 mr-3" size="lg" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('tools.auRooms.feature3')}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {t('tools.auRooms.feature3Desc')}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 dark:text-blue-400 mr-3" size="lg" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('tools.auRooms.feature4')}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {t('tools.auRooms.feature4Desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Tool Details */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('tools.toolDetails')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-gray-900 dark:text-white block mb-1">{t('tools.developer')}:</strong>
              <p className="text-gray-700 dark:text-gray-300">
                <a
                  href="https://mikkelmaae.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Mikkel Maae Østergaard
                </a>
              </p>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white block mb-1">{t('tools.releaseDate')}:</strong>
              <p className="text-gray-700 dark:text-gray-300">November 2025</p>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white block mb-1">{t('tools.status')}:</strong>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
                {t('tools.available')}
              </span>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white block mb-1">{t('tools.institution')}:</strong>
              <p className="text-gray-700 dark:text-gray-300">Aarhus Universitet</p>
            </div>
          </div>
        </div>

        {/* Embedded Tool */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('tools.tryItOut')}
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <iframe 
              src="https://au-rooms.omikkel.com" 
              className="w-full rounded-lg border-0"
              style={{ minHeight: '600px', height: '70vh' }}
              title="AU Room Schedule Finder"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://au-rooms.omikkel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {t('tools.openInNewTab')}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="ml-2" />
          </a>
          
          <Link
            href="/tools"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {t('tools.backToTools')}
          </Link>
        </div>
      </div>
    </div>
  )
}
