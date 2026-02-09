export default function Stage({step}){
    return (
        <>
        <div className="stage">
            <div className="flex">
                <div id={step==1?"one":"two"}>
                    1
                </div>
                SELECT
            </div>
            <div className="line"></div>
            <div className="flex">
                <div id={step==2?"one":"two"}>
                    2
                </div>
                CONFIG
            </div>
            <div className="line"></div>
            <div className="flex">
                <div id={step==3?"one":"two"}>
                    3
                </div>
                INVITE
            </div>
        </div>
        </>
    )
}