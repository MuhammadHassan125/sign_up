import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <>
            <section className='section'>
                <div className='header'>
                    <div className='links'>
                    <Link to='/Signup'>Signup</Link>
                    <Link to='/Login'>Login</Link>
                    <Link to='/Reset'>Reset Password</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
