import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    return (
        <div className="card">
            <img src={url} alt={title} height="200px" width="250px" />
            <p>{title}</p>
        </div>
    )
}
