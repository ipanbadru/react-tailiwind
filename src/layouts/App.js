import React from 'react'

export default function App({children}) {
    return (
        <div className='antialiased tracking-tighter text-gray-800'>
            {children}
        </div>
    )
}
