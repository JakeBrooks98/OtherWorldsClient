//This module is responsible for displaying a single world and it's details
import React, { useEffect, useState } from "react"
import { useHistory, useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { editWorld, getSingleWorld } from "./WorldManager";
import { Modal } from "../modal/Modal";
import { Timeline } from "../Timeline/Timeline";
import { EditWorld } from "./EditWorld";
import { DrawMap } from "../Drawing/DrawMap"
import { BackButton } from "../BackButton";
import { deleteRegion } from "../regions/RegionManager";
import "../regions/RegionCard.css";


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

    useEffect(
        () => {
            const deleteMessage = document.querySelector("#delete_world")
            if (modalStatus === true) {
                deleteMessage.showModal()
            } else {
                deleteMessage.close()
            }
        },
        [modalStatus]
    )


    //render the world details
    //if editable is false then should display just world details
    //if editable is true then title and description should be form and delete buttons for events and regions should appear
    return (
        <>
            <Modal worldId={worldToDelete} history={history} setModalStatus={setModalStatus} />
            <section className="detail-page">
                <BackButton />
                <div>
                    <div>
                        {editable ? EditWorld(world, setWorldToUpdate) :
                            <div>
                                <h1 className="world-name">{`${world.name}`}</h1>
                                <div className="world-description">
                                    {`${world.description}`}
                                </div>
                                <br />
                                <div><b>Map:</b></div>
                                <div className="world-map">

                                {world.image?.length > 0 ? <img className="drawn-map" src={`${world.image[0]?.map_image}`} /> : world.is_user ? <DrawMap setWorld={setWorld} /> : ""}
                                </div>

                                {editable & world.image ? <button className="delete_button" onClick={
                                    () => {
                                        getSingleWorld(worldId)
                                            .then(setWorld)
                                    }
                                }>Delete</button> : ""}
                            </div>
                        }
                    </div>
                    <h2>Timeline</h2>
                    {Timeline(world, editable, setEditable, setWorld)}
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
                                return (
                                    <>
                                        <div className="region_with_delete">
                                            <div classsName="region-card" class="card transition">
                                                
                                                <h2 className="region-name" class="transition">{`${region.name}`}</h2>
                                                <div>Biomes: </div><ul>
                                                    {region.biome?.map(
                                                        (biome) => {
                                                            return (
                                                                <li>{`${biome.label}`}</li>
                                                            )
                                                        }
                                                    )}
                                                </ul>
                                                <p className="region-description">{`${region.description}`}</p>
                                                <div class="cta-container transition"></div>
                                                <div class="card_circle transition"></div>
                                            </div>
                                            {editable ? <button className="delete_button" onClick={
                                                () => {
                                                    deleteRegion(region.id)
                                                    getSingleWorld(worldId)
                                                        .then(setWorld)
                                                }
                                            }>Delete</button> : ""}
                            
                                        </div>
                                    </>
                                )
                            }
                        )}
                    </div>
                    <div className="create_regions">
                        {world.is_user ? <button onClick={
                            () => {
                                history.push(`/worlds/${parseInt(worldId)}/addregion`)
                            }
                        }>Add Region</button> : ""}
                    </div>
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
                                .then(() => getSingleWorld(worldId))
                                .then(setWorld)
                        }}
                        className="btn btn-primary">Save</button> : <button id="editWorld" onClick={
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