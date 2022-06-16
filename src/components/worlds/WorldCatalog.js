//This module is responsible for displaying all worlds as a catalog
import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { getAllWorlds } from "./WorldManager";



export const WorldCatalog = () => {
    const [worlds, setWorlds] = useState([])
    const [startPoint, setStart] = useState(0)
    const history = useHistory()

    //search bar functionality for worlds
    // const filterWorlds = (worlds, query) => {
    //     if (!query) {
    //         return worlds;
    //     }
    
    //     return worlds.filter((world) => {
    //         const worldName = world.name.toLowerCase();
    //         return worldName.includes(query);
    //     });
    // };
    // const { search } = window.location;
    // const query = new URLSearchParams(search).get('s');
    // const [searchQuery, setSearchQuery] = useState(query || '');
    // const filteredWorlds = filterWorlds(worlds, searchQuery);



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
        {/* <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            /> */}
            <h1>Explore Our Worlds</h1>
            <section className="catalog_content">
                <div className="catalog">
                    {worlds.map(
                        (world) => {
                            if (!(world.id > (startPoint + 4)) && !(world.id < startPoint)) {
                                return <div className="world-card" key={world.id} onClick={
                                    () => {
                                        history.push(`/worlds/${world.id}`)
                                    }
                                }>
                                    <Link to={`/worlds/${world.id}`}><h3>{`${world.name}`}</h3></Link>
                                    <p>{`${world.description}`}</p>
                                </div>

                            } else {
                                return null
                            }
                        }
                    )}
                    <div className="scroll-btn">
                        <button className="catalog-btn" onClick={
                            () => {
                                setStart(startPoint + 2)
                                if (startPoint > worlds.length) {
                                    setStart(0)
                                }
                            }
                        }>></button>

                    </div>
                </div>
            </section>
        </>
    )

}