import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createRegion, getBiomes } from "./RegionManager.js"


export const RegionForm = () => {
    const history = useHistory()
    const { worldId } = useParams()
    const [biomes, setBiomes] = useState([])
    const [form, updateForm] = useState({ label: "" })

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

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newRegion = Object.assign({}, form)
        if (event.target.name === "biomes") {
            if (!(event.target.name in newRegion)) {
                newRegion[event.target.name] = []
            }
            let val = parseInt(event.target.id)
            if (event.target.checked) {
                newRegion[event.target.name].push(biomes.find(biome => biome.id === val))
            } else {
                newRegion[event.target.name] = newRegion[event.target.name].filter(biome => biome.id !== val)
            }
        } else {
            newRegion[event.target.name] = event.target.value
        }
        updateForm(newRegion)
    }

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
            <div className="biomes_checkboxes">
            {biomes.map(biome => {
                // logic to determine whether box should be pre-checked
                let checked_status = false
                if ("biomes" in form) {
                    if (form.biomes.length > 0) {
                        let found_biome = form.biomes.find(b => b.id === biome.id)
                        if (found_biome) {
                            checked_status = true
                        } else {
                            checked_status = false
                        }
                    } else {
                        checked_status = false
                    }
                }
                return <div key={`formBiomes-${biome.id}`} className="checkbox">
                    <input name="biomes"
                        type="checkbox"
                        htmlFor="biome"
                        id={biome.id}
                        onChange={handleControlledInputChange}
                        checked={checked_status}
                    />
                    <label htmlFor={biome.id}>{biome.label}</label>
                </div>
            })
            }
            </div>
            

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    let biomesToAdd = []
                    if(form.biomes && form.biomes.length > 0) {
                        biomesToAdd = form.biomes.map(biome => biome.id)
                    }

                    const region = {
                        name: currentRegion.name,
                        description: currentRegion.description,
                        biome: biomesToAdd,
                        world: parseInt(worldId)
                    }

                    // Send POST request to your API
                    createRegion(region)
                        .then(() => history.push(`/worlds/${worldId}`))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}