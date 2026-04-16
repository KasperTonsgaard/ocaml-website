"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'
import { useLocale } from '../../context/LocaleContext'
import { useRef, useState } from 'react'

export default function Page() {
    const { t } = useLocale()
    const gameContainerRef = useRef<HTMLElement>(null)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const toggleFullscreen = () => {
      if (!gameContainerRef.current) return

      if (!document.fullscreenElement) {
        gameContainerRef.current.requestFullscreen().then(() => {
          setIsFullscreen(true)
        }).catch((err) => {
          console.error('Error attempting to enable fullscreen:', err)
        })
      } else {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false)
        })
      }
    }

    // Listen for fullscreen changes
    if (typeof document !== 'undefined') {
      document.addEventListener('fullscreenchange', () => {
        setIsFullscreen(!!document.fullscreenElement)
      })
    }
    
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/game-jams"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faArrowLeft} size="sm" className="mr-2" />
              {t("gameJams.backToGameJams")}
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t("gameJams.kjam25.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {t("gameJams.kjam25.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                {t("gameJams.kjam25.gameJamEntry")}
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                November 2025
              </span>
            </div>
          </div>

          {/* Game Iframe */}
          <section
            ref={gameContainerRef}
            className="w-full rounded-lg overflow-hidden shadow-lg mb-8 relative bg-black"
            style={{ height: "80vh", minHeight: "600px" }}
          >
            <iframe
              src="https://gamejam25.omikkel.com"
              className="w-full h-full border-0"
              title="K-Jam 25 Game"
            />
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-gray-800 bg-opacity-75 hover:bg-opacity-100 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 z-10"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
              <span className="text-sm font-medium">
                {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              </span>
            </button>
          </section>

          {/* Game Details */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t("gameJams.aboutGame")}
            </h2>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t("gameJams.kjam25.description")}
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t("gameJams.details")}
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    {t("gameJams.developers")}:
                  </strong>
                  <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside mt-1">
                    <li>
                      <a
                        href="https://froemosen.dk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Kristian Anton Hedegaard
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mikkelmaae.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Mikkel Maae Østergaard
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    {t("gameJams.gameJam")}:
                  </strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t("gameJams.kjam25.gameJamName")}
                  </p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    {t("gameJams.date")}:
                  </strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    November 2025
                  </p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    {t("gameJams.hostedBy")}:
                  </strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a
                      href="https://dsau.dk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {t("gameJams.kjam25.hostedBy")}
                    </a>
                  </p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    {t("gameJams.institution")}:
                  </strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t("gameJams.kjam25.institution")}
                  </p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    {t("gameJams.status")}:
                  </strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t("gameJams.kjam25.status")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}