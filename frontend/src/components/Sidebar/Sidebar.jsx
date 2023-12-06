//React Hooks
import React, { useState } from 'react'
//React Router Dom
import { NavLink } from 'react-router-dom'

//Fake Sidebar Data
import CourseData from '../../CourseMaterial/CourseData.json';
//Sidebar Styles
import './Sidebar.css'

console.log(CourseData)

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

            <div className="sidebar__content">

                <ul className="sidebar__list">
                    {CourseData && CourseData?.contents.map((course) => (
                        <li
                            key={course.id}
                            className="sidebar__item"
                        >
                            <NavLink
                                to={`Lessons/${course.title}`}
                                className="sidebar__link">
                                {`${course.id}. ${course.title}`}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside >
    )
}

export default Sidebar