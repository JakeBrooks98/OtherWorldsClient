
export const EditWorld = (world, setWorldToUpdate) => {

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
        </form>
    )
}