import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="flex justify-end p-4 bg-blue-700 text-white gap-6">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
                <Outlet />
            </main>
            <footer className="bg-gray-900 text-white mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <p className="text-gray-400">© 2025 Mi Sitio Web. Todos los derechos reservados. 😂</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
