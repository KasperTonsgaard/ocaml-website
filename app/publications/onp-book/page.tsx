"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faDownload, faClock } from '@fortawesome/free-solid-svg-icons'

// ← Change this to 'true' when PDF is uploaded to enable download
const isBookAvailable = false

export default function ONPBookPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/publications"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="sm" />
            Back to Publications
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Grisen O(n)P og Master Teoremet
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Master the Master Theorem - Learn by Example! 🐷
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
              Book
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              50+ Pages
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
              PDF Format
            </span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
              5.2 MB
            </span>
            <span className={`px-3 py-1 rounded-full ${
              isBookAvailable 
                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
            }`}>
              {isBookAvailable ? 'Available' : 'Coming Soon'}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Book Cover / Preview */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg p-8 text-white text-center shadow-lg">
              <div className="text-6xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Grisen O(n)P og Master Teoremet</h3>
              <p className="text-pink-100 mb-6">By Kristian Anton Hedegaard & Jeppe Tofft</p>
              {isBookAvailable ? (
                <a
                  href="/assets/publications/onp-book.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 w-full justify-center"
                >
                  Download PDF
                  <FontAwesomeIcon icon={faDownload} size="sm" />
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center px-6 py-3 bg-gray-400 text-gray-200 font-medium rounded-lg cursor-not-allowed opacity-60 w-full justify-center"
                >
                  Coming Soon
                  <FontAwesomeIcon icon={faClock} size="sm" />
                </button>
              )}
            </div>
          </div>

          {/* Book Details */}
          <div className="md:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                About This Book
              </h2>
              
              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>Grisen O(n)P og Master Teoremet</strong> is a focused guide designed specifically to help students master the Master Theorem - one of the most important tools for analyzing divide-and-conquer algorithms. Created by the DAT5 class of 2024-2027 at Aarhus University, this book features our beloved pig mascot guiding you through the learning process.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  The Master Theorem can seem intimidating at first, but with clear explanations, step-by-step examples, and practical applications, this book makes it accessible and even enjoyable. Each concept is illustrated with concrete examples and visual aids to ensure deep understanding.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Whether you're preparing for exams in algorithms and data structures or want to strengthen your theoretical foundation for technical interviews, this book provides everything you need to confidently apply the Master Theorem to solve recurrence relations.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Topics Covered
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Master Theorem Fundamentals
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Recurrence Relations Analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Divide-and-Conquer Algorithms
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Case Analysis & Examples
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Step-by-Step Problem Solving
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Common Pitfalls & Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Practice Problems & Exercises
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Real-World Applications
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Publication Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-gray-900 dark:text-white">Authors:</strong>
                    <p className="text-gray-700 dark:text-gray-300">Kristian Anton Hedegaard & Jeppe Tofft</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Institution:</strong>
                    <p className="text-gray-700 dark:text-gray-300">Aarhus University (DAT5 2024-2027)</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Publication Date:</strong>
                    <p className="text-gray-700 dark:text-gray-300">November 2025</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Special Thanks:</strong>
                    <p className="text-gray-700 dark:text-gray-300">Kasper Tonsgaard for valuable input</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Format:</strong>
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
              Ready to Master the Master Theorem? 🐷
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Download "Grisen O(n)P og Master Teoremet" and let our pig guide you to mastery of recurrence relations!
            </p>
            {isBookAvailable ? (
              <a
                href="/assets/publications/onp-book.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
              >
                Download Grisen O(n)P (PDF)
                <FontAwesomeIcon icon={faDownload} size="lg" />
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center px-8 py-4 bg-gray-400 text-gray-200 font-medium rounded-lg cursor-not-allowed opacity-60 text-lg"
              >
                Book Coming Soon! 🐷
                <FontAwesomeIcon icon={faClock} size="lg" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}