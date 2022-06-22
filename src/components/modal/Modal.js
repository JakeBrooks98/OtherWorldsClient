import { deleteWorld, getAllWorlds } from "../worlds/WorldManager"
import "./Modal.css"

export const Modal = ({worldId, history, setModalStatus}) => {
    
    return <dialog id="delete_world">
        <div className="modal-content">
            <p>Are you sure you want to destroy your world?</p>
            <button className="modal-btn" onClick={
                () => {
                    deleteWorld(worldId)
                    .then(()=> setModalStatus(false) )
                    .then(history.push("/worldcatalog"))
                }
            }>Yes Destroy It</button>
            <button className="modal-btn" onClick={
                () => {
                    setModalStatus(false)
                }
            }>No</button>
        </div>
    </dialog>
}