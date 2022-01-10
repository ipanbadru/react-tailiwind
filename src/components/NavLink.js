import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({href, className, children}) {
    return (
        <Link 
        to={href} 
        className={`${className ? className : ''} md:text-sm font-medium text-tiny px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg`}>
            {children}
        </Link>
    )
}
