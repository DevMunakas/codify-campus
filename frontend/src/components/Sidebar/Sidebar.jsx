//React Hooks
import React from 'react'
//React Router Dom
import { NavLink } from 'react-router-dom'

//Fake Sidebar Data
import { topics } from './SidebarData'
//Sidebar Styles
import './Sidebar.css'


function Sidebar() {
    console.log(topics[0].location)
    return (
        <aside className='sidebar'>

        </aside>
    )
}

export default Sidebar