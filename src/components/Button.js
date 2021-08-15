import React from 'react'
import './Button.css'

export default function Button(props) {
    const{
      color, size
    } = props
    return (
        <div className={`${color} btn ${size}`} >
            {props.children}
        </div>
    )
}
