import React from 'react'
import { useParams } from 'react-router-dom'


//Chapter Styles
import './Lessons.css'
function Lessons() {
    const { id } = useParams()
    console.log(id)
    return (
        <div className='Lessons'>
            <h1>Hi I'm Chapter {id}</h1>
        </div>
    )
}

export default Lessons