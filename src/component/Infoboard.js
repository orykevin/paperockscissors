import React from 'react'
const Infoboard = ({picked,point,replayGame,setDisplayPlay,displayPlay,verify,setReplaced,replaced,replace,setVerify}) => {
    const prs = ["paper","rock","scissors"]
    const infoText = [
        "take your pick",
        "choose one to be replace",
        "choose one to replacing "+prs[replace.p1],
        "You Win",
        "You Lose",
    ]
    const displayText = () =>{
        if(point.p1 > 0 || point.p2 > 0){
            if(verify.mode === 1){
                if(verify.replace && point.p1 > 0 || verify.replace && verify.choosing){
                    return infoText[2];
                }else if(verify.replace && point.p2 > 0){
                    return infoText[1]
                }
            }
        }
        if(picked.p1 ==="not" && point.p1 !== 3 && point.p2!==3 ) return infoText[0];
        if(point.p1 === 3) return infoText[3];
        if(point.p2 === 3) return infoText[4];
    }
    const replaceds = (x) =>{
        console.log(x)
        setReplaced({...replaced,p1:x})
        setVerify({...verify,replace:false,choosing:false})
    }
    return (
        <div>
            <div className="infoboard">
                <p>{displayText()}</p>
                <div className={`replace-item ${verify.choosing ||point.p1 === 1 && verify.replace ? "displayFl":""}`}>
                    <span onClick={()=>replaceds(3)}>Gloves</span>
                    <span onClick={()=>replaceds(4)}>Hammer</span>
                    <span onClick={()=>replaceds(5)}>Gun</span>
                </div>
                <div className={`end-round ${point.p1 === 3||point.p2===3?"displayFl":""}`}>
                    <button className="playagain-btn" onClick={()=>replayGame()} >Play Again</button>
                    <button className="exit-btn" onClick={()=>{setDisplayPlay({...displayPlay,display:false});replayGame()}}>Exit</button>
                </div>
            </div>
        </div>
    )
}

export default Infoboard
