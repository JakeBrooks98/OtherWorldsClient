import { getSingleWorld } from "../worlds/WorldManager"

//create a region
export const createRegion = (region) => {
    return fetch(`https://other-worlds-server.herokuapp.com/regions`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     },
     body: JSON.stringify(region)
    })
}

//get all biomes for the create regions
export const getBiomes = () => {
    return fetch("https://other-worlds-server.herokuapp.com/biomes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteRegion = (regionId) => {
    return fetch(`https://other-worlds-server.herokuapp.com/regions/${regionId}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     }
    })
}