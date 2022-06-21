
import { getSingleWorld } from "../worlds/WorldManager"
import { deleteRegion } from "./RegionManager"

export const RegionDetails = (region, editable, worldId, setWorld) => {
    return (
        <>
            <div className="region_with_delete">
                <div class="card transition">
                    <h2 className="region-name" class="transition">{`${region.name}`}</h2>
                    <div>Biomes: </div><ul>
                        {region.biome?.map(
                            (biome) => {
                                return (
                                    <li>{`${biome.label}`}</li>
                                )
                            }
                        )}
                    </ul>
                    <p className="region-description">{`${region.description}`}</p>
                    <div class="cta-container transition"><a href="#" class="cta">Call to action</a></div>
                    <div class="card_circle transition"></div>
                </div>
                {editable ? <button className="delete_button" onClick={
                    () => {
                        deleteRegion(region.id)
                        getSingleWorld(worldId)
                            .then(setWorld)
                    }
                }>Delete</button> : ""}

            </div>
        </>
    )
}