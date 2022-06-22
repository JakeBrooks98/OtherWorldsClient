import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getSingleWorld } from '../worlds/WorldManager';
import { createMap } from "./DrawingManager";

export const SaveMapDrawing = ({setWorld}) => {
    //get the image data of the canvas to be saved
    let canvas;
    let dataURL;
    let map
    const { worldId } = useParams()



    return (
        <button className="save-map" onClick={
            () => {
                canvas = document.getElementById('canvas');
                dataURL = canvas.toDataURL();
                map = {
                    map_image: dataURL,
                    world: worldId
                }
                createMap(map)
                .then(() => getSingleWorld(worldId))
                    .then(setWorld)
            }
        }>Save</button>
    )

}