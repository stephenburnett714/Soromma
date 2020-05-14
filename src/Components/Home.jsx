import React from 'react'
import background from '../Images/home-background.jpg'

export default function Home() {
    return(
        <div className="home" id="home">
            <img className="home-background" src={background} alt="home"/>
            <div class="home-text">Soromma Technology <br/>
            <div class="home-subtext"> Tag Line</div>
            </div>
        </div>

    )
}