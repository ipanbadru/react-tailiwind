import React from 'react'

export default function Card() {
    return (
        <div className="max-w-xl">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <header className='border-b px-4 py-2.5 bg-gray-50/50 flex items-center justify-between'>
                    <div>
                    <h1 className="font-medium">Cart title</h1>
                    <span className="text-gray-500">Lorem, ipsum dolor.</span>
                    </div>
                    <a href="#" className='bg-gray-800 hover:bg-gray-900 transition duration-200 focus:outline-none focus:ring focus:ring-gray-300 text-white px-5 py-2.5 rounded-lg font-semibold text-sm'>New Task</a>
                </header>
                <section className='px-4 py-2.5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsam optio laborum, fugit dolores quos. Quaerat est voluptatibus non vitae eum tempora distinctio, maxime error, unde eveniet cum laborum laudantium consequuntur rerum quasi. Harum cumque quas quos sapiente quo numquam?
                </section>
                <footer className='border-t px-4 py-2.5 text-gray-500 bg-gray-50/50'>
                    Lorem ipsum dolor sit.
                </footer>
            </div>
      </div>
    )
}
