"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faArrowUpRightFromSquare, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const gameJams = [
  {
    id: 'kjam-25',
    title: 'K-Jam 25',
    description: 'Created by Kristian and Mikkel for K-Jam 2025, the yearly game jam hosted by DSAU (dsau.dk) - the student association at Aarhus University. This weekend game jam challenges students to create the best game within a given theme, with games judged across different categories for prizes.',
    date: 'November 2025',
    status: 'Available to Play',
    href: '/game-jams/kjam-25',
    developers: 'Kristian & Mikkel',
    hostedBy: 'DSAU',
    jamWebsite: 'https://dsau.dk'
  },
  {
    id: 'gmtk-2025',
    title: 'GMTK 2025 GameJam',
    gameName: 'On Loopin\'s Tail',
    description: 'Created by D. Jestford, SebsenCK, Jeppe Tofft, and Robert F. G. B. for the Game Maker\'s Toolkit 2025 game jam. Experience "On Loopin\'s Tail" - an innovative game that explores unique mechanics and engaging gameplay within the jam\'s theme constraints.',
    date: 'August 2025',
    status: 'Play on Itch.io',
    href: 'https://sebsen.itch.io/on-loopins-tail',
    external: true,
    developers: 'D. Jestford, SebsenCK, Jeppe Tofft & Robert F. G. B.',
    hostedBy: 'GMTK',
    jamWebsite: 'https://itch.io/jam/gmtk-2025'
  }
]

export default function GameJamsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Game Jams
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of games created at game jams by OCaml and his friends from DAT5. 
            <br /><br />
            Check them out!
          </p>
        </div>

        {/* Game Jams List */}
        <div className="space-y-8">
          {gameJams.map((jam) => (
            <article 
              key={jam.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                  {jam.title}
                </h2>
                <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                  <span>{jam.date}</span>
                  <span className="mt-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
                    {jam.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {jam.description}
              </p>
              
              {/* Game Jam Details */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">Developers:</strong>
                    <p className="text-gray-700 dark:text-gray-300">{jam.developers}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">Hosted By:</strong>
                    <p className="text-gray-700 dark:text-gray-300">{jam.hostedBy}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">Game Jam:</strong>
                    <a 
                      href={jam.jamWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      Visit Website
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
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
                    Play Game
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
                  </a>
                ) : (
                  <Link
                    href={jam.href}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Play Game
                    <FontAwesomeIcon icon={faGamepad} size="sm" />
                  </Link>
                )}
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Game ID: {jam.id}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            More Games Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Stay tuned for more exciting game jam entries and creative projects!
          </p>
        </div>
      </div>
    </div>
  )
}