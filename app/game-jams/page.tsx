"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faArrowUpRightFromSquare, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { useLocale } from '../context/LocaleContext'
import ContentGrid from '../components/ContentGrid'
import ContentCard from '../components/ContentCard'

const gameJams = [
  {
    id: 'kjam-25',
    titleKey: 'gameJams.kjam25.title',
    descriptionKey: 'gameJams.kjam25.description',
    date: 'November 2025',
    statusKey: 'gameJams.kjam25.status',
    href: '/game-jams/kjam-25',
    developers: [
      { name: 'Kristian Anton Hedegaard' },
      { name: 'Mikkel Maae Østergaard', link: 'https://mikkelmaae.dev' }
    ],
    hostedByKey: 'gameJams.kjam25.hostedBy',
    jamWebsite: 'https://dsau.dk'
  },
  {
    id: 'gmtk-2025',
    titleKey: 'gameJams.gmtk2025.title',
    gameName: 'On Loopin\'s Tail',
    descriptionKey: 'gameJams.gmtk2025.description',
    date: 'August 2025',
    statusKey: 'gameJams.gmtk2025.status',
    href: 'https://sebsen.itch.io/on-loopins-tail',
    external: true,
    developers: [
      { name: 'D. Jestford' },
      { name: 'SebsenCK' },
      { name: 'Jeppe Tofft' },
      { name: 'Robert F. G. B.' }
    ],
    hostedByKey: 'gameJams.gmtk2025.hostedBy',
    jamWebsite: 'https://itch.io/jam/gmtk-2025'
  }
]

export default function GameJamsPage() {
  const { t } = useLocale()
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('gameJams.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('gameJams.description')}
            <br /><br />
            {t('gameJams.checkThem')}
          </p>
        </div>

        {/* Game Jams Grid */}
        <ContentGrid>
          {gameJams.map((jam) => (
            <ContentCard key={jam.id}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                  {t(jam.titleKey)}
                </h2>
                <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                  <span>{jam.date}</span>
                  <span className="mt-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
                    {t(jam.statusKey)}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t(jam.descriptionKey)}
              </p>

              {/* Game Jam Details — stacked for narrower cards */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">{t('gameJams.developers')}:</strong>
                    <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
                      {jam.developers.map((dev, idx) => (
                        <li key={idx}>
                          {dev.link ? (
                            <a
                              href={dev.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              {dev.name}
                            </a>
                          ) : (
                            dev.name
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">{t('gameJams.hostedBy')}:</strong>
                    <p className="text-gray-700 dark:text-gray-300">{t(jam.hostedByKey)}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">{t('gameJams.gameJam')}:</strong>
                    <a
                      href={jam.jamWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      {t('gameJams.visitWebsite')}
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                {jam.external ? (
                  <a
                    href={jam.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {t('gameJams.playGame')}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="ml-2" />
                  </a>
                ) : (
                  <Link
                    href={jam.href}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {t('gameJams.playGame')}
                    <FontAwesomeIcon icon={faGamepad} size="sm" className="ml-2" />
                  </Link>
                )}

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {t('gameJams.gameId')}: {jam.id}
                </div>
              </div>
            </ContentCard>
          ))}
        </ContentGrid>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {t('gameJams.moreGames')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t('gameJams.stayTuned')}
          </p>
        </div>
      </div>
    </div>
  )
}