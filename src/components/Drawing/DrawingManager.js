

//create a map
export const createMap = (map) => {
    return fetch(`http://localhost:8000/maps`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     },
     body: JSON.stringify(map)
    })
}

export const deleteMap = (mapId) => {
    return fetch(`http://localhost:8000/maps/${mapId}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     }
    })
}
