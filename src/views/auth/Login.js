import React from 'react'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import Input from '../../components/Input'
import Label from '../../components/Label'

export default function Login() {
    return (
        <div>
            <form>
                <div className="mb-5">
                    <Label forInput="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="john@domain.com" />
                </div>
                <div className="mb-6">
                    <Label forInput="password">Password</Label>
                    <Input type="password" name="password" id="password" />
                </div>
                <div className="mb-5 flex items-center justify-between">
                    <Checkbox forInput="remember" label="Remember Me" name="remember" id="remember"/>
                    <a href="#" className='text-gray-600 font-medium'>Forgot Password</a>
                </div>
                <Button className='bg-gray-700 hover:bg-gray-800 focus:ring-gray-200'>Login</Button>
            </form>
        </div>
    )
}
