import React from 'react'

export default function Button({children, className, ...props}) {
    return (
        <button
        {...props}
        className={`${className ? className : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-200'} text-white border border-transparent px-6 py-2.5 rounded-lg text-sm font-medium transition duration-300 focus:outline-none focus:ring`}
        >
            {children}
        </button>
    )
}
