
//get all worlds
export const getAllWorlds = () => {
    return fetch("https://other-worlds-server.herokuapp.com/worlds", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

//get a world by its id
export const getSingleWorld = (world) => {
    return fetch(`https://other-worlds-server.herokuapp.com/worlds/${world}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

//get posts by user id
export const getMyWorlds = () => {
    return fetch("https://other-worlds-server.herokuapp.com/worlds/myworlds", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

//delete a world
export const deleteWorld = (worldId) => {
    return fetch(`https://other-worlds-server.herokuapp.com/worlds/${worldId}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
     }
    })
    .then(getAllWorlds())
}

//update a world
export const editWorld = (worldId, updatedWorld) => {
    return fetch(`https://other-worlds-server.herokuapp.com/worlds/${worldId}`, {
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
    return fetch(`https://other-worlds-server.herokuapp.com/worlds`, {
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
    return fetch(`https://other-worlds-server.herokuapp.com/worlds/whatsnew`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}