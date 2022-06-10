import { deleteWorld, getAllWorlds } from "../worlds/WorldManager"

export const Modal = ({worldId, history, setModalStatus}) => {
    return <div className="modal">
        <div className="modal-content">
            <p>Are you sure you want to destroy your world?</p>
            <button onClick={
                () => {
                    deleteWorld(worldId)
                        .then(() => {
                            getAllWorlds()
                            setModalStatus(false)
                            history.push("/worldcatalog")
                        })
                }
            }>Yes Destroy It</button>
            <button onClick={
                () => {
                    setModalStatus(false)
                }
            }>No</button>
        </div>
    </div>
}