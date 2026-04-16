"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faArrowUpRightFromSquare, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { useLocale } from '../context/LocaleContext'
import ContentGrid from '../components/ContentGrid'
import ContentCard from '../components/ContentCard'

const projects = [
  {
    id: 'krawl',
    titleKey: 'projects.krawl.title',
    descriptionKey: 'projects.krawl.description',
    date: '2026',
    statusKey: 'projects.available',
    href: '/projects/krawl',
    websiteUrl: 'https://krawl.dk',
    thumbnailUrl: '/images/tools/krawl-dk.png',
    developers: [
      { name: 'Kasper Tonsgaard', link: 'https://kaspertonsgaard.dk' },
      { name: 'Mikkel Maae Østergaard', link: 'https://mikkelmaae.dev' },
      { name: 'Kristian Anton Hedegaard', link: 'https://froemosen.dk' },
    ],
    category: 'projects.categories.mobileApp',
    features: ['projects.krawl.feature1', 'projects.krawl.feature2', 'projects.krawl.feature3']
  },
  {
    id: 'au-exams',
    titleKey: 'projects.auExams.title',
    descriptionKey: 'projects.auExams.description',
    date: 'November 2025',
    statusKey: 'projects.available',
    websiteUrl: 'https://auexam.froemosen.dk',
    thumbnailUrl: '/images/tools/au-exams-thumbnail.png',
    developer: { name: 'Kristian Anton Hedegaard', link: 'https://froemosen.dk' },
    category: 'projects.categories.examViewer',
    features: ['projects.auExams.feature1', 'projects.auExams.feature2', 'projects.auExams.feature3']
  },
  {
    id: 'au-rooms',
    titleKey: 'projects.auRooms.title',
    descriptionKey: 'projects.auRooms.description',
    date: 'November 2025',
    statusKey: 'projects.available',
    href: '/projects/au-rooms',
    websiteUrl: 'https://au-rooms.omikkel.com',
    thumbnailUrl: '/images/tools/au-rooms-thumbnail.png',
    developer: { name: 'Mikkel Maae Østergaard', link: 'https://mikkelmaae.dev' },
    category: 'projects.categories.scheduleViewer',
    features: ['projects.auRooms.feature1', 'projects.auRooms.feature2', 'projects.auRooms.feature3']
  },
  {
    id: 'au-calendar-middleware',
    titleKey: 'projects.auCalendarMiddleware.title',
    descriptionKey: 'projects.auCalendarMiddleware.description',
    date: 'November 2024',
    statusKey: 'projects.available',
    websiteUrl: 'https://github.com/omikkel/au-calendar-middleware',
    thumbnailUrl: '/images/tools/au-calendar-middleware.png',
    developer: { name: 'Mikkel Maae Østergaard', link: 'https://mikkelmaae.dev' },
    category: 'projects.categories.calendarMiddleware',
    features: ['projects.auCalendarMiddleware.feature1', 'projects.auCalendarMiddleware.feature2', 'projects.auCalendarMiddleware.feature3']
  },
  {
    id: 'easy-prover',
    titleKey: 'Easy Prover!',
    descriptionKey: 'projects.easyProver.description',
    date: '2026',
    statusKey: 'projects.available',
    websiteUrl: 'https://easyprover.org',
    thumbnailUrl: '/images/tools/easy-prover.png',
    developer: { name: 'Jeppe Tofft', link: 'https://www.youtube.com/@jeppetofft' },
    category: 'projects.categories.math',
    features: ['projects.easyProver.feature1']
  },
]

export default function ProjectsPage() {
  const { t } = useLocale()
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('projects.description')}
            <br /><br />
            {t('projects.exploreProjects')}
          </p>
        </div>

        {/* Projects Grid */}
        <ContentGrid>
          {projects.map((project) => (
            <ContentCard key={project.id}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                  {t(project.titleKey)}
                </h2>
                <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                  <span>{project.date}</span>
                  <span className="mt-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
                    {t(project.statusKey)}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t(project.descriptionKey)}
              </p>

              {/* Thumbnail */}
              {project.thumbnailUrl && (
                <div className="mb-6">
                  <img
                    src={project.thumbnailUrl}
                    alt={t(project.titleKey)}
                    className="w-full rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                  />
                </div>
              )}

              {/* Project Details — stacked single column for narrower cards */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">{t('projects.developer')}:</strong>
                    {project.developers ? (
                      <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
                        {project.developers.map((dev, idx) => (
                          <li key={idx}>
                            {dev.link ? (
                              <a href={dev.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                                {dev.name}
                              </a>
                            ) : (
                              dev.name
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : project.developer && (
                      <p className="text-gray-700 dark:text-gray-300">
                        <a href={project.developer.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                          {project.developer.name}
                        </a>
                      </p>
                    )}
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">{t('projects.category')}:</strong>
                    <p className="text-gray-700 dark:text-gray-300">{t(project.category)}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-4">
                  <strong className="text-gray-900 dark:text-white block mb-2">{t('projects.keyFeatures')}:</strong>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{t(feature)}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {project.href && (
                  <Link
                    href={project.href}
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {t('projects.viewProject')}
                    <FontAwesomeIcon icon={faTools} size="sm" className="ml-2" />
                  </Link>
                )}

                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  {t('projects.visitWebsite')}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="ml-2" />
                </a>
              </div>
            </ContentCard>
          ))}
        </ContentGrid>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <FontAwesomeIcon icon={faTools} size="3x" className="text-gray-400 dark:text-gray-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t('projects.moreProjects')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t('projects.stayTuned')}
          </p>
        </div>
      </div>
    </div>
  )
}
