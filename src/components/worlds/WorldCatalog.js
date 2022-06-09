//This module is responsible for displaying all worlds as a catalog
import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { getAllWorlds } from "./WorldManager";

export const WorldCatalog = () => {
    const [worlds, setWorlds] = useState([])

    useEffect(
        () => {
            getAllWorlds()
                .then(setWorlds)
        },
        []
    )

    //map through all worlds and display them as cards with just name and description
    return (
        <>
        <section>
            <h1>Explore Our Worlds</h1>
            <div>
                {worlds.map(
                    (world) => {
                        return <div className="world-card">
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