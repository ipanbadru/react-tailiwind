import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'

export default function Articles() {
    const posts = [
        {
            title: "Lorem ipsum dolor sit amet.",
            created_at: "9 Januari 2022",
            author: "Ipan Badruzzaman",
            picture: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Lorem ipsum dolor sit amet.",
            created_at: "9 Januari 2022",
            author: "Ipan Badruzzaman",
            picture: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Lorem ipsum dolor sit amet.",
            created_at: "9 Januari 2022",
            author: "Ipan Badruzzaman",
            picture: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Lorem ipsum dolor sit amet.",
            created_at: "9 Januari 2022",
            author: "Ipan Badruzzaman",
            picture: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Lorem ipsum dolor sit amet.",
            created_at: "9 Januari 2022",
            author: "Ipan Badruzzaman",
            picture: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Lorem ipsum dolor sit amet.",
            created_at: "9 Januari 2022",
            author: "Ipan Badruzzaman",
            picture: "https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
    ]
    return (
        <>
            <Hero>
                <Hero.Body>
                        <Hero.Title>Our Articles</Hero.Title>
                        <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat sapiente vel accusamus molestiae? Dolorum, perspiciatis nisi? Ut, assumenda? Magni provident nesciunt quibusdam officiis, ex ullam dignissimos.</p>
                </Hero.Body>
            </Hero>
            <div className='container'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-16 sm:gap-y-16">
                    {posts.map((post, index) => (
                        <div key={index}>
                            <Link to="/articles/single">
                                <img className='rounded-xl mb-4 h-56 w-full object-cover object-center shadow hover:shadow-lg transition-shadow duration-300' src={post.picture} alt={post.title} />
                            </Link>
                            <Link to="/articles/single">
                                <h1 className='mb-2 sm:mb-4 font-semibold text-black'>{post.title}</h1>
                            </Link>
                            <div className="flex items-center font-mono justify-between text-sm text-gray-500">
                                <span>{post.author}</span>
                                <span>{post.created_at}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
