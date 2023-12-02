import React from 'react'
import { useParams } from 'react-router-dom'

import './Lessons.css'
//Chapter Styles
import './Lessons.css'

function Lessons() {
    const { id } = useParams()
    console.log(id)
    return (
        <div className='lessons'>
            <h1>Hi I'm Chapter {id}</h1>
        </div>
    )
}

export default Lessons