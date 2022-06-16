import { deleteWorld, getAllWorlds } from "../worlds/WorldManager"

export const Modal = ({worldId, history, setModalStatus}) => {
    
    return <dialog id="delete_world">
        <div className="modal-content">
            <p>Are you sure you want to destroy your world?</p>
            <button onClick={
                () => {
                    deleteWorld(worldId)
                    .then(()=> setModalStatus(false) )
                    .then(history.push("/worldcatalog"))
                }
            }>Yes Destroy It</button>
            <button onClick={
                () => {
                    setModalStatus(false)
                }
            }>No</button>
        </div>
    </dialog>
}