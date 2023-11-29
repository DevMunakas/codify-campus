import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import './Login.css'
function Login() {
    const [loginUsername, setLoginUsername] = useState()
    const [loginPassword, setLoginPassword] = useState()


    function handleLoinFormSubmition(e) {
        e.preventDefault()
    }
    return (
        <div className='login'>
            <NavLink
                to='..'
                relative='path'
                className="login__button--goBack button__goBack"
            >
                <box-icon name='arrow-back' size='25px' color='#fff'></box-icon>
                Go back
            </NavLink>

            <div className="login__container">
                <h1 className="login__header">Login</h1>
                <form
                    onSubmit={handleLoinFormSubmition}
                    className="login__form"
                >
                    <div className="login__username">
                        <label htmlFor="username"
                            className="login__label--username login__label "
                        >Username</label>
                        <input
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                            id='username'
                            type="text"
                            className="login__input--username login__input"
                            required
                            aria-label='username'
                            placeholder='please enter your username'
                        />
                    </div>
                    <div className="login__password">
                        <label htmlFor="password"
                            className="login__label--password login__label"
                        >Password</label>
                        <input
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            id='password'
                            type="password"
                            className="login__input--password login__input"
                            maxLength={15}
                            required
                            aria-label='password'
                            placeholder='please enter your password'
                        />
                    </div>
                    <button
                        type='submit'
                        className="login__form--button login__button"
                    >Login</button>
                    <NavLink
                        className="login__option"
                        to='/signup'
                    >
                        I don't have an account  ?
                        <span className='login__option--bold'> Register</span>
                    </NavLink>
                </form>
            </div>
        </div>
    )
}

export default Login