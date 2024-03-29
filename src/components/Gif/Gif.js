import React from "react";
import { Link } from "wouter";

import './styles.css'
const Gif = ({ id, title, url }) => {

    return (
        <div className="Gif">
            <div className="Gif-buttons">

            </div>
            <Link to={`/gif/${id}`} className='Gif-link'>
                <h4>{title}</h4>
                <img loading='lazy' alt={title} src={url} />
            </Link>
        </div>
    )
}

export default React.memo(Gif, (prevProps, nextProps) => prevProps.id === nextProps.id)