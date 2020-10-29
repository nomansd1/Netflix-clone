import React from 'react'
import './Tv.css';

function Tv() {
    return (
        <div className="tv">
            <div className="tv__details">
                <h1>Enjoy on your TV.</h1>
                <span>Watch on Smart TVs, Playstation, Xbox,<br/> Chromecast, 
                Apple TV, Blu-ray players, and <br/>more.
                </span>
            </div>

            <div className="tv__videoBanner">
                <img className="tv__image"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                />
                <video className="tv__video" autoPlay="true" loop
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v">
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                    
                </video>
                
            </div>
        </div>
    )
}

export default Tv
