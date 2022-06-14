//This module is responsible for displaying all worlds as a catalog
import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { getAllWorlds } from "./WorldManager";


export const WorldCatalog = () => {
    const [worlds, setWorlds] = useState([])
    const [startPoint, setStart] =useState(0)
    const history = useHistory()

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
            <h1>Explore Our Worlds</h1>
        <section className="catalog_content">
            <div className="catalog">
                {worlds.map(
                    (world) => {
                        if(!(world.id > (startPoint+4)) && !(world.id < startPoint)){
                        return <div className="world-card" key={world.id} onClick={
                            () => {
                                history.push(`/worlds/${world.id}`)
                            }
                        }>
                            <Link to={`/worlds/${world.id}`}><h3>{`${world.name}`}</h3></Link>
                            <p>{`${world.description}`}</p>
                            </div>

                        }else{
                            return null
                        }
                    }
                )}
                <button className="catalog-btn"  onClick={
                    () => {
                        setStart(startPoint+2)
                        if(startPoint > worlds.length){
                            setStart(0)
                        }
                    }
                }>></button>
            </div>
        </section>
        </>
    )

}