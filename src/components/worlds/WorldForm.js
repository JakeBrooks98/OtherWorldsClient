import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createWorld } from './WorldManager.js'


export const WorldForm = () => {
    const history = useHistory()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentWorld, setCurrentWorld] = useState({
        name: "",
        description: ""
    })


    const changeWorldState = (event) => {
        const newWorld = Object.assign({}, currentWorld)
        newWorld[event.target.name] = event.target.value
        setCurrentWorld(newWorld)
    }

    return (
        <form className="worldForm">
            <h2 className="worldForm__name">Create a New World</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">World Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentWorld.name}
                        placeholder="Please enter your worlds name..."
                        onChange={changeWorldState}
                    />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="description">World Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Please enter a broad description of your world..."
                        onChange={changeWorldState} />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const world = {
                        name: currentWorld.name,
                        description: currentWorld.description
                    }

                    // Send POST request to your API
                    createWorld(world)
                        .then(() => history.push("/worldcatalog"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}