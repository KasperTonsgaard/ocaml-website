"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEye, faClock } from '@fortawesome/free-solid-svg-icons'

const publications = [
  {
    id: 'onp-book',
    title: 'Grisen O(n)P og Master Teoremet',
    description: 'A comprehensive guide to understanding and mastering the Master Theorem in algorithms and data structures. This book provides clear explanations, practical examples, and step-by-step approaches to solving recurrence relations using the Master Theorem. Written by Kristian Anton Hedegaard and Jeppe Tofft from the DAT5 class at Aarhus University.',
    date: 'November 2025',
    status: 'Coming Soon',
    type: 'Book',
    pages: '50+',
    format: 'PDF',
    size: '5.2 MB',
    href: '/publications/onp-book',
    downloadUrl: '/assets/publications/onp-book.pdf',
    isAvailable: false // ← Change this to 'true' when PDF is uploaded to enable download
  }
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Publications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of books, papers, and other publications created by OCaml and the DAT5 class at Aarhus University.
            <br /><br />
            Download and explore our academic contributions!
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((publication) => (
            <article 
              key={publication.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {publication.title}
                    </h2>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                      {publication.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>📅 {publication.date}</span>
                    <span>📄 {publication.pages} pages</span>
                    <span>💾 {publication.size}</span>
                    <span>📋 {publication.format}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                  <span className={`mt-1 px-3 py-1 rounded-full text-xs font-medium ${
                    publication.isAvailable 
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
                  }`}>
                    {publication.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {publication.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-3">
                  {publication.isAvailable ? (
                    <a
                      href={publication.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Download PDF
                      <FontAwesomeIcon icon={faDownload} size="sm" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center px-6 py-3 bg-gray-400 text-gray-200 font-medium rounded-lg cursor-not-allowed opacity-60"
                    >
                      Coming Soon
                      <FontAwesomeIcon icon={faClock} size="sm" />
                    </button>
                  )}
                  
                  <Link
                    href={publication.href}
                    className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    View Details
                    <FontAwesomeIcon icon={faEye} size="sm" />
                  </Link>
                </div>
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Publication ID: {publication.id}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            More Publications Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Stay tuned for more research papers, books, and academic contributions from the DAT5 community!
          </p>
        </div>
      </div>
    </div>
  )
}