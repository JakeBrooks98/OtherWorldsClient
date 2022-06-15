//This module is responsible for displaying a single world and it's details
import React, { useEffect, useState } from "react"
import { useHistory, useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { editWorld, getSingleWorld } from "./WorldManager";
import { Modal } from "../modal/Modal";
import { Timeline } from "../Timeline/Timeline";
import { EditWorld } from "./EditWorld";
import { deleteRegion } from "../regions/RegionManager";
import {DrawMap} from "../Drawing/DrawMap"

export const WorldDetail = () => {
    const [world, setWorld] = useState({})
    const { worldId } = useParams()
    const [modalStatus, setModalStatus] = useState(false)
    const [worldToDelete, setWorldToDelete] = useState()
    const [worldToUpdate, setWorldToUpdate] = useState()
    const [editable, setEditable] = useState(false)
    const history = useHistory()

    useEffect(
        () => {
            getSingleWorld(worldId)
                .then(setWorld)
        },
        [worldId]
    )


    //render the world details
    //if editable is false then should display just world details
    //if editable is true then title and description should be form and delete buttons for events and regions should appear
    return (
        <>
        {modalStatus ? <Modal worldId = {worldToDelete} history={history} setModalStatus = {setModalStatus} /> : null }
        <section className="detail-page">
            <div>
                <div>
                    {editable? EditWorld(world, setWorldToUpdate) :
                    <div>
                        <h1 className="world-name">{`${world.name}`}</h1>
                        <div className="world-map"></div>
                        <div className="world-description">
                            {`${world.description}`}
                        </div>
                        <br />
                        <div><b>Map:</b></div>
                        {world.is_user ? <DrawMap /> : ""}
                        {/* {world.map ? <div>{`${world.map}`}</div>: {world.is_user ? <DrawMap /> : ""}} */}
                    </div>
                    }
                </div>
                <h2>Timeline</h2>
                {Timeline(world, editable, setEditable)}
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
                            <>
                            <div className="region_with_delete">
                                <div className="region-details">
                                    <h3>{`${region.name}`}</h3>
                                    <div>Biomes: </div><ul>
                                        {region.biome?.map(
                                        (biome) => {
                                            return(
                                                <li>{`${biome.label}`}</li>
                                            )
                                        }
                                    )}
                                        </ul>
                                    <p>{`${region.description}`}</p>
                                </div>
                                {editable ? <button className="delete_button" onClick={
                                    () => {
                                        deleteRegion(region.id)
                                        getSingleWorld(worldId)
                                    }
                                }>Delete</button>: ""}

                            </div>
                            </>
                        )
                    }
                )}
            </div>
            <div className="create_regions"></div>
                {world.is_user ? <button onClick={
                () => {
                    history.push(`/worlds/${parseInt(worldId)}/addregion`)
                }
            }>Add Region</button> : ""}
            </div>
            <div className="edit_delete_buttons">
                {world.is_user ? <>{editable ? <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const updatedWorld = {
                        name: worldToUpdate.name,
                        description: worldToUpdate.description
                    }

                    // Send PUT request to the API
                    editWorld(parseInt(worldId), updatedWorld)
                        .then(() => {
                            setEditable(false)
                        })
                }}
                className="btn btn-primary">Save</button>:<button id="editWorld" onClick={
                                        () => {
                                            setEditable(true)
                                        }
                                    }>Edit World</button>} 
                                    <button id="deleteWorld" className="delete_button" name={worldId} onClick={
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