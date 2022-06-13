//This module is responsible for displaying all worlds as a catalog
import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { getMyWorlds } from "./WorldManager";

export const MyWorlds = () => {
    const [worlds, setWorlds] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getMyWorlds()
                .then(setWorlds)
        },
        []
    )

    //map through all worlds and display them as cards with just name and description
    return (
        <>
        <section>
            <h1>My Worlds</h1>
            <div className="catalog">
                {worlds.map(
                    (world) => {
                        return <div className="world-card" onClick={
                            () => {
                                history.push(`/worlds/${world.id}`)
                            }
                        }>
                            <Link to={`/worlds/${world.id}`}><h3>{`${world.name}`}</h3></Link>
                            <p>{`${world.description}`}</p>
                            </div>
                    }
                )}
            </div>
        </section>
        </>
    )

}