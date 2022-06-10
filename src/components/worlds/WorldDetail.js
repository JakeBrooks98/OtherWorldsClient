//This module is responsible for displaying a single world and it's details
import React, { useEffect, useState } from "react"
import { useHistory, useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { getSingleWorld } from "./WorldManager";
import { Modal } from "../modal/Modal";

export const WorldDetail = () => {
    const [world, setWorld] = useState({})
    const { worldId } = useParams()
    const [modalStatus, setModalStatus] = useState(false)
    const [worldToDelete, setWorldToDelete] = useState()
    const history = useHistory()

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
        {modalStatus ? <Modal worldId = {worldToDelete} history={history} setModalStatus = {setModalStatus} /> : null }
        <section className="detail-page">
            <div>
            <h1 className="world-name">{`${world.name}`}</h1>
            <div className="world-map"></div>
            <div className="world-description">
                {`${world.description}`}
            </div>
                <h2>Timeline</h2>
            <div className="timeline">
                {world.events?.map(
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
            <div className="create-event">
            {world.is_user ? <button onClick={
                () => {
                    history.push(`/worlds/${worldId}/addevent`)
                }
            }>Add Timeline event</button> : ""}
            </div>
                <h2>Regions</h2>
            <div className="world-regions">
                {world.regions?.map(
                    (region) => {
                        return(
                        <div className="region-details">
                            <h3>{`${region.name}`}</h3>
                            <p>Biome: {`${region.biome.label}`}</p>
                            <p>{`${region.description}`}</p>
                        </div>
                        )
                    }
                )}
            </div>
            <div className="create_regions"></div>
                {world.is_user ? <button>Add Region</button> : ""}
            </div>
            <div className="edit_delete_buttons">
                {world.is_user ? <><button >Edit World</button> 
                                    <button id="deleteWorld" name={worldId} onClick={
                                            (evt) => {
                                                setWorldToDelete(evt.target.name)
                                                setModalStatus(true)
                                            }
                                        }>Delete World</button></> : ""}
            </div>
        </section>
        </>
    )

}