import React from 'react'
import Hero from '../components/Hero'

export default function Home() {
    return (
        <div>
            <Hero>
                <Hero.Body>
                    <header className="text-white py-4 sm:py-8 md:py-16">
                        <Hero.Title className='text-transparent bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text inline-block'>New Revolution</Hero.Title>
                        <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#" className="underline decoration-sky-500 text-sky-400 font-medium">Dolorem quam</a>, recusandae quis dolorum veritatis nulla, nemo consequuntur temporibus quisquam expedita libero est facere ipsum laboriosam eveniet itaque. Rem, dicta temporibus?</p>
                        <a href="#" className="bg-white hover:bg-gray-50 hover:text-blue-500 transition duration-300 text-gray-900 px-4 py-2 text-sm md:text-tiny md:px-6 md:py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-400">
                        Browse
                        </a>
                    </header>
                </Hero.Body>
            </Hero>
            <div className="container">
                <div className="max-w-xl w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nobis incidunt! Quo excepturi molestias suscipit cupiditate! Suscipit aperiam iste accusantium incidunt, cupiditate a doloremque alias possimus, dolor tempore minima vitae?
                </div>
            </div>
        </div>
    )
}
