//React Hooks
import React from 'react'

//HomeLayout Styles
import './HomeLayout.css'

//Component
import Sidebar from '../../components/Sidebar/Sidebar'
import Main from '../../components/Main/Main'
import { Outlet } from 'react-router-dom'
function HomeLayout() {
    return (
        <div className='HomeLayout'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default HomeLayout