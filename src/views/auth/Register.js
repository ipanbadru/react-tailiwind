import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Select from '../../components/Select'

export default function Register() {
    return (
        <div>
            <form>
                <div className="mb-5">
                    <Label forInput="name">Name</Label>
                    <Input name="name" id="name" placeholder="john Doe" />
                </div>
                <div className="mb-5">
                    <Label forInput="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="john@domain.com" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
                    <div className="mb-6">
                        <Label forInput="password">Password</Label>
                        <Input type="password" name="password" id="password" />
                    </div>
                    <div className="mb-6">
                        <Label forInput="password_confirmation">Confirm Password</Label>
                        <Input type="password" name="password_confirmation" id="password_confirmation" />
                    </div>
                </div>
                <div className="mb-6">
                    <Label forInput="gender">Gender</Label>
                    <Select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Select>
                </div>
                <div className="mb-5 flex items-center justify-between">
                    <Checkbox label="Agree with Privacy and Terms" forInput="acceptance" name="acceptance" id="acceptance"/>
                </div>

                <div className="flex items-center justify-between">
                    <Button className='bg-gray-700 hover:bg-gray-800 focus:ring-gray-200'>Register</Button>
                    <span>
                        Already have account ? {" "}
                        <Link to="/login" className='text-gray-600 font-medium'>Login</Link>
                    </span>
                </div>
            </form>
        </div>
    )
}
