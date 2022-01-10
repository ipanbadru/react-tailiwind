import React from 'react'
import ArticleBody from '../../components/ArticleBody';
import Hero from '../../components/Hero'

export default function Single() {
    document.querySelector('title').innerHTML = 'The Best Article In The World';
    return (
        <div>
            <Hero>
                <Hero.Body>
                        <Hero.Title>The Best Article In The World</Hero.Title>
                        <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, consectetur.</p>
                </Hero.Body>
            </Hero>
            
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <ArticleBody />
                </div>
            </div>
        </div>
    )
}
