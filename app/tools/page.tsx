"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faArrowUpRightFromSquare, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { useLocale } from '../context/LocaleContext'

const tools = [
  {
    id: 'au-rooms',
    titleKey: 'tools.auRooms.title',
    descriptionKey: 'tools.auRooms.description',
    date: 'November 2025',
    statusKey: 'tools.available',
    href: '/tools/au-rooms',
    websiteUrl: 'https://au-rooms.omikkel.com',
    developer: { name: 'Mikkel Maae Østergaard', link: 'https://mikkelmaae.dev' },
    category: 'tools.categorySchedule',
    features: ['tools.auRooms.feature1', 'tools.auRooms.feature2', 'tools.auRooms.feature3']
  }
]

export default function ToolsPage() {
  const { t } = useLocale()
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('tools.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('tools.description')}
            <br /><br />
            {t('tools.exploreTools')}
          </p>
        </div>

        {/* Tools List */}
        <div className="space-y-8">
          {tools.map((tool) => (
            <article 
              key={tool.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                  {t(tool.titleKey)}
                </h2>
                <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                  <span>{tool.date}</span>
                  <span className="mt-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
                    {t(tool.statusKey)}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t(tool.descriptionKey)}
              </p>

              {/* Thumbnail */}
              {tool.id === 'au-rooms' && (
                <div className="mb-6">
                  <img 
                    src="/images/tools/au-rooms-thumbnail.png" 
                    alt="AU Room Schedule Finder"
                    className="w-full rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                  />
                </div>
              )}
              
              {/* Tool Details */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">{t('tools.developer')}:</strong>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a
                        href={tool.developer.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {tool.developer.name}
                      </a>
                    </p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">{t('tools.category')}:</strong>
                    <p className="text-gray-700 dark:text-gray-300">{t(tool.category)}</p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="mt-4">
                  <strong className="text-gray-900 dark:text-white block mb-2">{t('tools.keyFeatures')}:</strong>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx}>{t(feature)}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={tool.href}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {t('tools.viewTool')}
                  <FontAwesomeIcon icon={faTools} size="sm" className="ml-2" />
                </Link>
                
                <a
                  href={tool.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  {t('tools.visitWebsite')}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <FontAwesomeIcon icon={faTools} size="3x" className="text-gray-400 dark:text-gray-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t('tools.moreTools')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t('tools.stayTuned')}
          </p>
        </div>
      </div>
    </div>
  )
}
