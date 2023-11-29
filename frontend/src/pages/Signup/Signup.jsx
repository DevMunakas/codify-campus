import React, { useState } from 'react'

import './Signup.css'

import { NavLink, useNavigate } from 'react-router-dom'
function Signup() {
    const [signupFullName, setSignupFullName] = useState()
    const [signupEmail, setSignupEmail] = useState()
    const [signupPassword, setSignupPassword] = useState()
    const [signupConfirmPassword, setSignupConfirmPassword] = useState()


    function handleSignupFormSubmition(e) {
        e.preventDefault()
        console.log('This is signup fullname: ' + signupFullName)
        console.log('This is signup email: ' + signupEmail)
        console.log('This is signup password: ' + signupPassword)
        console.log('This is signup confirm password: ' + signupConfirmPassword)

    }
    return (
        <div className='signup'>
            {/*             <NavLink
                to='/login'
                className="signup__button--goBack button__goBack"
            >
                <box-icon name='arrow-back' size='25px' color='#fff'></box-icon>
                Go back
            </NavLink> */}
            <div className="signup__container">
                <h1 className="signup__header">Sign Up</h1>
                <form
                    onSubmit={handleSignupFormSubmition}
                    autocomplete="off"
                    className="signup__form"
                >
                    <div className="signup__fullName">
                        <label htmlFor="fullName"
                            className="login__label--fullName login__label "
                        >Full Name</label>
                        <input
                            value={signupFullName}
                            onChange={(e) => setSignupFullName(e.target.value)}
                            id='fullName'
                            type="text"
                            className="signup__form--fullName signup__input"
                            maxLength={25}
                            required
                            aria-label='Full Name'
                            placeholder='please enter your Full Name'
                        />
                    </div>
                    <div className="signup__email">
                        <label htmlFor="email"
                            className="signup__label--email signup__label"
                        >Email Address</label>
                        <input
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                            id='email'
                            type="email"
                            className="signup__input--email signup__input"
                            required
                            aria-label='Email Address'
                            placeholder='please enter your email Adress'
                        />
                    </div>
                    <div className="signup__password">
                        <label htmlFor="password"
                            className="signup__label--password signup__label"
                        >Password</label>
                        <input
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            id='password'
                            type="password"
                            className="signup__input--password signup__input"
                            maxLength={15}
                            required
                            aria-label='Password'
                            placeholder='please enter your password'
                        />
                    </div>
                    <div className="signup__confrimPassword">
                        <label htmlFor="email"
                            className="signup__label--email signup__label"
                        >Confrim Your Password</label>
                        <input
                            value={signupConfirmPassword}
                            onChange={(e) => setSignupConfirmPassword(e.target.value)}
                            id='confrimPassword'
                            type="password"
                            className="signup__input--email signup__input"
                            maxLength={15}
                            required
                            aria-label='Confirm Password'
                            placeholder='please enter your password again '
                        />
                    </div>
                    <button
                        type='submit'
                        className="signup__form--button signup__button"
                    >Sign Up</button>
                    <NavLink
                        className="signup__option"
                        to='/login'
                    >
                        I already have an account  ?
                        <span className='signup__option--bold'> Login </span>
                    </NavLink>
                </form>
            </div>

        </div >
    )
}

export default Signup