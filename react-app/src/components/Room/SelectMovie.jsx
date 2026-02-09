import Stage from "./Stage"
export default function SelectMovie({step,onMovie,onStep}){
    return(
        <>
            <div id="selectMovie">
                <h1>Create Room</h1>
                <input type="text" placeholder='Search for Movies....' />
                <Stage step={step}></Stage>
            </div>
        </>
    )
}