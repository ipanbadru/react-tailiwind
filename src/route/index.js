import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Guest from '../layouts/Guest'
import App from '../layouts/App'
import Home from '../views/Home'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Articles from '../views/Articles'
import Sinlge from '../views/Articles/Single'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={
                <App>
                    <Home />
                </App>
            }/>
            <Route path='/articles' element={
                <App>
                    <Articles />
                </App>
            }/>
            <Route path='/articles/single' element={
                <App>
                    <Sinlge />
                </App>
            }/>
            <Route path='/login' element={
                <Guest title="Login">
                    <Login />
                </Guest>
            }/>
            <Route path='/Register' element={
                <Guest title="Register" cardClassName="lg:w-2/5">
                    <Register />
                </Guest>
            }/>
        </Routes>
    )
}
