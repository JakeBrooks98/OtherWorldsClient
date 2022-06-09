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
export const getUserWorlds = () => {

}

//delete a world
export const deleteWorld = () => {

}

//update a world
export const editWorld = () => {

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