import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createRegion, getBiomes } from "./RegionManager.js"


export const RegionForm = () => {
    const history = useHistory()
    const { worldId } = useParams()
    const [biomes, setBiomes] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentRegion, setCurrentRegion] = useState({
        name: "",
        description: "",
        biome: ""
    })

    useEffect(
        () => {
            getBiomes()
            .then(
                (res) => {
                    setBiomes(res)
                }
            )
        },
        []
    )


    const changeRegionState = (event) => {
        const newRegion = Object.assign({}, currentRegion)
        newRegion[event.target.name] = event.target.value
        setCurrentRegion(newRegion)
    }

    return (
        <form className="regionForm">
            <h2 className="regionForm__name">Add a Region</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Region Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentRegion.name}
                        placeholder="Please enter the region's name..."
                        onChange={changeRegionState}
                    />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="description">Region Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="What is the significance of this region..."
                        onChange={changeRegionState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="biome">Biome:</label>
                    <select defaultValue={"0"} name="biome"
                        onChange={changeRegionState} >
                        <option value="0">Select a biome that describes your region...</option>
                        {biomes.map(biome => {
                            return <option value={biome.id}>
                                {biome.label}
                            </option>

                        })}</select>


                </div>
            </fieldset>
            

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const region = {
                        name: currentRegion.name,
                        description: currentRegion.description,
                        biome: currentRegion.biome,
                        world: worldId
                    }

                    // Send POST request to your API
                    createRegion(region)
                        .then(() => history.push(`/worlds/${worldId}`))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}