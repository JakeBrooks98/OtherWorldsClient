import { deleteEvent } from "../events/EventManager"
import { getSingleWorld } from "../worlds/WorldManager"
import "./Timeline.css"

export const Timeline = (world, editable, setEditable, setWorld) => {
    return (
    <div className="timeline">
        <div className="outer">
                {world.events?.map(
                    (event) => {
                        return (
                            <>
                        <div className="card">
                        <div className="timeline-event">
                        <p className="event_content">{`${event.date} ${event.date_suffix}`}</p>
                        <h3 className="title">{`${event.name}`}</h3>
                        <p className="event_content">{`${event.description}`}</p>
                        </div>
                        </div>
                        {editable ? <button className="delete_button" onClick={() => {
                            deleteEvent(event.id)
                            getSingleWorld(world.id)
                            .then(setWorld)
                        }
                        }>Delete</button>: ""}
                            </>
                        )
                    }
                )}

        </div>
    </div>
    )

}

