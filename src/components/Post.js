import React from 'react'
import './post.css'

const post = ({id, title, body}) => {
  return (
    <div className="list">
        <h2>{title}</h2>
        <span>{body}</span>
        <span>
            <button>edit</button>
            <button>delete</button>
        </span>
    </div>
  )
}

export default post