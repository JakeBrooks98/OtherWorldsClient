import { deleteMap } from "../Drawing/DrawingManager";
import { getSingleWorld } from "./WorldManager";
import { DrawMap } from "../Drawing/DrawMap"

export const EditWorld = (world, worldId, setWorldToUpdate, setWorld) => {

    const changeWorldState = (event) => {
        const newWorld = Object.assign({}, world)
        newWorld[event.target.name] = event.target.value
        setWorldToUpdate(newWorld)
    }

    return (
        <form className="worldForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">World Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        defaultValue={world.name}
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
                        defaultValue={world.description}
                        onChange={changeWorldState} />
                </div>

            </fieldset>
            <div className="map-with-delete">
                <div className="map-with-delete">
                    {world.image?.length > 0 ? <img className="drawn-map" src={`${world.image[0]?.map_image}`} /> : world.is_user ? <DrawMap setWorld={setWorld} /> : ""}
                </div>
                {world.image ? <button className="map_delete_button" onClick={
                    () => {
                        deleteMap(world.image[0].id)
                            .then(getSingleWorld(worldId))
                            .then(setWorld)
                    }
                }><i class="fa-regular fa-trash-can"></i></button> : ""}

            </div>
        </form>
    )
}