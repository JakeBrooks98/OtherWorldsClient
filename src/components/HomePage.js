import { getNewestWorld } from "./worlds/WorldManager"
import { useState, useEffect } from "react"
import "./HomePage.css"

export const HomePage = () => {
    const [world, setWorld] = useState({})

    useEffect(
        () => {
            getNewestWorld()
                .then(setWorld)
        },
        []
    )

    return (
        <section>
            <div className="welcome-block">
            <h1>Welcome To Other Worlds</h1>
            <div className="welcome-message">
                <p>Welcome to Other Worlds, the perfect tool for all your world building needs. Dive deep into the world building process as you create wondrous and spectacular new lands. 
                    Enrich your worlds with varied and vibrant character by adding regions and history!</p>
                <br/>
                <p>    Whether it be for novels, video games, movies, tv, tabletop etc. Other Worlds is perfect for creating and managing your own custom setting.
                Immerse yourself in the rich fantastical realms created by our other users or create your own today!
                </p>
            </div>
            </div>
            <div className="whats-new">
                <h3>What's New?</h3>
                <div class="whats_new_card">
                <div class="background">
                <div class="left"></div>
                <div class="right">
                
                </div>
                </div>
                <div class="content-container">
                    
                        <div className="words">
                        <p className="new-title">{world.name}</p>
                        <p className='description'>{world.description}</p>
                        </div>
                    
                </div>
            </div>
            </div>
        </section>
    )
}