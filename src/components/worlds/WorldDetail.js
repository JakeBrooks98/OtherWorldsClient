//This module is responsible for displaying a single world and it's details
import React, { useEffect, useState } from "react"
import { useHistory, useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { getSingleWorld } from "./WorldManager";

export const WorldDetail = () => {
    const [world, setWorld] = useState([])
    const { worldId } = useParams()

    useEffect(
        () => {
            getSingleWorld(worldId)
                .then(setWorld)
        },
        []
    )

    //render the world details
    return (
        <>
        <section className="detail-page">
            <div>
            <h1 className="world-name">{`${world.name}`}</h1>
            <div className="world-map"></div>
            <div className="world-description">
                {`${world.description}`}
            </div>
            <div className="timeline">
                {world.events.map(
                    (event) => {
                        return (
                            <div className="timeline-event">
                            <h3>{`${event.name}`}</h3>
                            <p>{`${event.date} ${event.date_suffix}`}</p>
                            <p>{`${event.description}`}</p>
                            </div>
                        )
                    }
                )}
            </div>
            <div className="world-regions">
                {world.regions.map(
                    (region) => {
                        <div className="region-details">
                            <h3>{`${region.name}`}</h3>
                            <p>{`${region.description}`}</p>
                        </div>
                    }
                )}
            </div>
            </div>
        </section>
        </>
    )

}