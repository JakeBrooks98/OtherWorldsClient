import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { createMap } from "./DrawingManager";

export const SaveMapDrawing = () => {
    //get the image data of the canvas to be saved
    let canvas;
    let dataURL;
    let map
    const { worldId } = useParams()



    return (
        <button onClick={
            () => {
                canvas = document.getElementById('canvas');
                dataURL = canvas.toDataURL();
                map = {
                    map_image: dataURL,
                    world: worldId
                }
                createMap(map)
            }
        }>Save</button>
    )

}