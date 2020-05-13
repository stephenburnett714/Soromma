import React from 'react'
import background from '../Images/home-background.jpg'

export default function Home() {
    return(
        <div className="home" id="home">
            <div className="home-background" src={background} ></div>
        </div>
    )
}