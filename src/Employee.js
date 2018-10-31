import React from 'react'

const Employee = (props) => {
    return (
        <div className="card">
            <img src={props.headshot.url} alt={props.headshot.alt}></img>
        </div>
    )
}

export default Employee