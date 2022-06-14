import { getSingleWorld } from "../worlds/WorldManager"

//create an event
export const createEvent = (event) => {
    return fetch(`http://localhost:8000/events`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     },
     body: JSON.stringify(event)
    })
}

export const deleteEvent = (eventId, worldId) => {
    return fetch(`http://localhost:8000/events/${eventId}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     }
    })
    .then(getSingleWorld(worldId))
}