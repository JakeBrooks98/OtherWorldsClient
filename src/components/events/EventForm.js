import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createEvent } from './EventManager.js'


export const EventForm = () => {
    const history = useHistory()
    const { worldId } = useParams()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentEvent, setCurrentEvent] = useState({
        name: "",
        description: "",
        date: 0,
        dateSuffix: ""
    })


    const changeEventState = (event) => {
        const newEvent = Object.assign({}, currentEvent)
        newEvent[event.target.name] = event.target.value
        setCurrentEvent(newEvent)
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__name">Add an Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentEvent.name}
                        placeholder="Please enter the event name..."
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="description">Event Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Please enter a description of the event..."
                        onChange={changeEventState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event Date: </label>
                    <input type="text" name="date" required autoFocus className="form-control"
                        value={currentEvent.date}
                        placeholder="Please enter the date of the event..."
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Date Suffix: </label>
                    <input type="text" name="dateSuffix" required autoFocus className="form-control"
                        value={currentEvent.dateSuffix}
                        placeholder="Ex: BCE, CE etc..."
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const event = {
                        name: currentEvent.name,
                        description: currentEvent.description,
                        date: currentEvent.date,
                        date_suffix: currentEvent.dateSuffix,
                        world: worldId
                    }

                    // Send POST request to your API
                    createEvent(event)
                        .then(() => history.push(`/worlds/${worldId}`))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}