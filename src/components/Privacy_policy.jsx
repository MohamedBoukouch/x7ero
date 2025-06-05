import React from 'react';
import { FaLock, FaGamepad, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
            >
              <FaChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Games
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              x7ero
            </h1>
            <div className="w-8"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700">
          {/* Policy Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <FaLock className="text-4xl mr-4 text-amber-300" />
                <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
              </div>
              <p className="text-center text-purple-200 max-w-3xl mx-auto">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          {/* Policy Content */}
          <div className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto space-y-10">
              <section className="space-y-4 bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h2 className="text-2xl font-bold text-purple-300">1. No Data Collection</h2>
                <p className="text-gray-300">
                  We want to be completely transparent - our website does not collect, store, or process any personal data from our users. 
                  The games on x7ero run directly in your browser without any tracking or data collection.
                </p>
              </section>

              <section className="space-y-4 bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h2 className="text-2xl font-bold text-purple-300">2. How Games Work</h2>
                <p className="text-gray-300">
                  All games on x7ero are embedded from third-party providers and run entirely in your browser:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-3 text-gray-300">
                  <li>No registration or login required</li>
                  <li>No cookies or tracking technologies used</li>
                  <li>All game progress is stored locally in your browser</li>
                  <li>No personal information is requested or collected</li>
                </ul>
              </section>

              <section className="space-y-4 bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h2 className="text-2xl font-bold text-purple-300">3. Third-Party Games</h2>
                <p className="text-gray-300">
                  While we don't collect any data ourselves, some embedded games may have their own privacy policies. 
                  We recommend checking the game provider's website if you have specific concerns.
                </p>
              </section>

              <section className="space-y-4 bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h2 className="text-2xl font-bold text-purple-300">4. Children's Privacy</h2>
                <p className="text-gray-300">
                  Our website is safe for all ages. Since we don't collect any data, there's no risk of accidentally 
                  collecting information from children under 13.
                </p>
              </section>

              <section className="space-y-4 bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h2 className="text-2xl font-bold text-purple-300">5. Changes to This Policy</h2>
                <p className="text-gray-300">
                  If we ever change our data practices, we'll update this policy and change the "Last Updated" date.
                </p>
              </section>

              <section className="space-y-4 bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h2 className="text-2xl font-bold text-purple-300">6. Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-gray-300 mt-3">
                  Email: <a href="mailto:privacy@x7ero.com" className="text-purple-400 hover:text-purple-300 underline transition-colors">privacy@x7ero.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default PrivacyPolicy;