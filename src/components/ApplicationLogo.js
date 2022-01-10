import React from 'react';

export default function ApplicationLogo() {
    return (
        <a href="/" className="inline-flex items-center gap-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h1 className='text-xl font-semibold tracking-tighter'>
                <span className='text-gray-600'>Jan</span><span className='text-black'>uari</span>
            </h1>
        </a>
    )
}