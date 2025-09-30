import React from 'react'

export default function Home() {
  return (
 
      <>
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
            Bienvenido a mi
            <span className="text-indigo-600"> Homepage</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Una página de inicio simple y elegante creada con React y Tailwind CSS.
            Diseñada para ser responsive y moderna.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Comenzar
            </button>
            <button className="bg-transparent hover:bg-indigo-50 text-indigo-600 font-semibold py-3 px-8 border border-indigo-600 rounded-lg transition duration-300">
              Saber más
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rápido</h3>
              <p className="text-gray-600">Optimizado para velocidad y rendimiento máximo.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Confiable</h3>
              <p className="text-gray-600">Construido con las mejores prácticas y tecnologías modernas.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fácil de usar</h3>
              <p className="text-gray-600">Interfaz intuitiva diseñada pensando en el usuario.</p>
            </div>
          </div>
        </div>
    </>
  )
}
