import { getNewestWorld } from "./worlds/WorldManager"
import { useState, useEffect } from "react"
import "./HomePage.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from "react-router-dom"

export const HomePage = () => {
    const [world, setWorld] = useState({})
    const history = useHistory()

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
                    Enrich your worlds with varied and vibrant character by adding regions and history or even draw your own custom map!</p>
                <br/>
                <p>    Whether it be for novels, video games, movies, tv, tabletop etc. Other Worlds is perfect for creating and managing your own custom setting.
                Immerse yourself in the rich fantastical realms created by our other users or <Link to="/worldform">create your own today</Link>!
                </p>
            </div>
            </div>
            <div className="whats-new">
                <h3 className="whats-new">What's New?</h3>
                <div class="whats_new_card" onClick={
                            () => {
                                history.push(`/worlds/${world.id}`)
                            }
                        }>
                <div class="background">
                <div class="left"></div>
                <div class="right"></div>
                </div>
                <div class="content-container" >
                    
                        <div className="words">
                        <p className="new-title">{world.name}</p>
                        <p className='description'>{world.description}</p>
                        </div>
                        <img className="card-img" src="https://mmos.com/wp-content/uploads/2021/05/a3-still-alive-blue-moon-forest-banner.jpg"></img>
                    
                </div>
            </div>
            </div>
        </section>
    )
}