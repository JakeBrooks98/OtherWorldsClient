

//create a map
export const createMap = (map) => {
    return fetch(`https://other-worlds-server.herokuapp.com/maps`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     },
     body: JSON.stringify(map)
    })
}

export const deleteMap = (mapId) => {
    return fetch(`https://other-worlds-server.herokuapp.com/maps/${mapId}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     }
    })
}
