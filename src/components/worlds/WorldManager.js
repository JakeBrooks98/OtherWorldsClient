//get all worlds
export const getAllWorlds = () => {
    return fetch("http://localhost:8000/worlds", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

//get a world by its id
export const getSingleWorld = (world) => {
    return fetch(`http://localhost:8000/worlds/${world}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

//get posts by user id
export const getMyWorlds = () => {
    return fetch("http://localhost:8000/worlds/myworlds", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

//delete a world
export const deleteWorld = (worldId) => {
    return fetch(`http://localhost:8000/worlds/${worldId}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     }
    })
    .then(getAllWorlds)
}

//update a world
export const editWorld = (worldId, updatedWorld) => {
    return fetch(`http://localhost:8000/worlds/${worldId}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     },
     body: JSON.stringify(updatedWorld)
    })
    .then(getSingleWorld(worldId))
}

//create a new world
export const createWorld = (world) => {
    return fetch(`http://localhost:8000/worlds`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     },
     body: JSON.stringify(world)
    })
    .then(getAllWorlds)
}

//get newest world for the homepage
export const getNewestWorld = () => {
    return fetch(`http://localhost:8000/worlds/whatsnew`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}