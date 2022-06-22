//This module is responsible for displaying all worlds as a catalog
import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { SearchBar } from "../Search";
import { getAllWorlds } from "./WorldManager";




export const WorldCatalog = () => {
    const [worlds, setWorlds] = useState([])
    const [startPoint, setStart] = useState(0)
    const history = useHistory()

    //search bar functionality for worlds
    const filterWorlds = (worlds, query) => {
        if (!query) {
            return worlds;
        }

        return worlds.filter((world) => {
            const worldName = world.name.toLowerCase();
            return worldName.includes(query);
        });
    };
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    //create a variable
    const filteredWorlds = filterWorlds(worlds, searchQuery);



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
            <div className="search-container">
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <h1>Explore Our Worlds</h1>
            <section className="catalog_content">
                <div className="catalog">
                    {filteredWorlds.map(
                        (world, index) => {
                            if (!(index > (startPoint + 3)) && !(index < startPoint)) {
                                return <div className="world-card" key={world.id} onClick={
                                    () => {
                                        history.push(`/worlds/${world.id}`)
                                    }
                                }>
                                    <Link to={`/worlds/${world.id}`}><h3 className="card-header">{`${world.name}`}</h3></Link>
                                    <p className="card-body">{`${world.description}`}</p>
                                </div>

                            } else {
                                return null
                            }
                        }
                    )}
                    <div className="scroll-btn">
                        <button className="right-catalog-btn" onClick={
                            () => {
                                setStart(startPoint + 3)
                                if (startPoint > worlds.length) {
                                    setStart(0)
                                }
                            }
                        }><i class="arrow right"></i></button>
                    </div>

                    <div className="left-scroll-btn">

                    {startPoint > 2 ? <button className="left-catalog-btn" onClick={
                            () => {
                                setStart(startPoint - 3)
                                
                            }
                        }><i class="arrow left"></i></button>: ""}

                    </div>
                </div>
            </section>
        </>
    )

}