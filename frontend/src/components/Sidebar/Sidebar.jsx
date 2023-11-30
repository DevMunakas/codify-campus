//React Hooks
import React, { useState } from 'react'
//React Router Dom
import { NavLink } from 'react-router-dom'

//Fake Sidebar Data
import { topics } from './SidebarData'
//Sidebar Styles
import './Sidebar.css'


function Sidebar() {
    const [sidebarOnClick, setSidebarOnClick] = useState(false)
    return (
        <aside className={sidebarOnClick ? 'sidebar active' : 'sidebar'}>
            <button
                onClick={() => setSidebarOnClick(!sidebarOnClick)}
                className='sidebar__menu--button'
            >
                <box-icon
                    name='arrow-back'
                    size='20px'
                    color='#149eca'
                ></box-icon>
                {sidebarOnClick ? 'Hide' : 'Show'} Menu
            </button >


            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>

        </aside >
    )
}

export default Sidebar