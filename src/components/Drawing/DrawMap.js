import { useEffect, useState, useRef } from "react"
import { SaveMapDrawing } from "./saveDrawing"
import "./Draw.css"


export const DrawMap = ({setWorld}) => {

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 750;
        canvas.height = 500;

        const context = canvas.getContext("2d")
        context.scale(1,1)
        context.lineCap = "round"
        context.strokeStyle = "black"
        context.lineWidth=3
        contextRef.current = context;
    }, [])

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }

    const stopDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    const draw =({nativeEvent}) => {
        if(!isDrawing){
            return
        }
        const {offsetX, offsetY} = nativeEvent
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke()

    }

    return (
        <>
        <canvas id="canvas"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        />

        <SaveMapDrawing setWorld={setWorld}/>

        </>
    )
}