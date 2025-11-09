"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Page() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/game-jams"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faArrowLeft} size="sm" />
              Back to Game Jams
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              K-Jam 25
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Created for the yearly game jam hosted by DSAU 🎮
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                Game Jam Entry
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                November 2025
              </span>
            </div>
          </div>

          {/* Game Iframe */}
          <section
            className="w-full rounded-lg overflow-hidden shadow-lg mb-8"
            style={{ height: "80vh", minHeight: "600px" }}
          >
            <iframe
              src="https://gamejam25.omikkel.com"
              className="w-full h-full border-0"
              title="K-Jam 25 Game"
            />
          </section>

          {/* Game Details */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              About This Game
            </h2>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Created by Kristian and Mikkel for K-Jam 2025, the yearly game
                jam hosted by DSAU (dsau.dk) - the student association at Aarhus
                University. This weekend game jam challenges students to create
                the best game within a given theme, with games judged across
                different categories for prizes.
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Game Jam Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Developers:
                  </strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    Kristian & Mikkel
                  </p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Game Jam:
                  </strong>
                  <p className="text-gray-700 dark:text-gray-300">K-Jam 2025</p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Date:
                  </strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    November 2025
                  </p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Hosted By:
                  </strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a
                      href="https://dsau.dk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      DSAU (dsau.dk)
                    </a>
                  </p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Institution:
                  </strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    Aarhus University
                  </p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Status:
                  </strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    Available to Play
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}