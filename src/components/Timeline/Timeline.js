import "./Timeline.css"

export const Timeline = (world) => {
    return (
    <div className="timeline">
        <div className="outer">
                {world.events?.map(
                    (event) => {
                        return (
                        <div className="card">
                        <div className="timeline-event">
                        <h3 className="title">{`${event.name}`}</h3>
                        <p>{`${event.date} ${event.date_suffix}`}</p>
                        <p>{`${event.description}`}</p>
                        </div>
                        </div>
                        )
                    }
                )}

        </div>
    </div>
    )

}

