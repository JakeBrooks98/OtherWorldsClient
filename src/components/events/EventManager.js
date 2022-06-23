
//create an event
export const createEvent = (event) => {
    return fetch(`https://other-worlds-server.herokuapp.com/events`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     },
     body: JSON.stringify(event)
    })
}

export const deleteEvent = (eventId) => {
    return fetch(`https://other-worlds-server.herokuapp.com/events/${eventId}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     }
    })
}