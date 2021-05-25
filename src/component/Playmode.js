import React, { useState } from 'react';
import Historyboard from "./Historyboard.js"
import Screenplay from "./Screenplay.js"
import Scoreboard from "./Scoreboard.js"
import Infoboard from "./Infoboard"
import Playpick from "./Pickplay"
import { ReactComponent as RuleIco} from "../img/rule-ico.svg"

const Playmode = ({display,displayRule,displayPlay,setDisplayPlay,verify,setVerify}) => {
    const [score,setScore] = useState([])
    const [pick,setPick] = useState({p1:1,p2:1})
    const [picked,setPicked] = useState({p1:"not",p2:""})
    const [random,setRandom] = useState(Math.floor(Math.random() * 3));
    const [point,setPoint] = useState({p1:0,p2:0,tie:0})
    const replayGame = () =>{
        setScore([]);
        setPick({p1:1,p2:1});
        setPicked({p1:"not",p2:""})
        setPoint({p1:0,p2:0,tie:0})
        setVerify({...verify,picked:false,bothPicked:false,round:1,replace:false,needReplace:false,choosing:false})
        setReplace({p1:-1,p2:-1})
        setReplaced({p1:0,p2:-1})
        setRandom(Math.floor(Math.random() * 3))
    }
    const [replace,setReplace] = useState({p1:-1,p2:-1})
    const [replaced,setReplaced] = useState({p1:0,p2:-1})
    return (
        <div className={`play-mode ${displayPlay.display ? "display" : ""}`}>
            <h1>{`${displayPlay.mode == 0 ? "Normal Mode" : "Special mode"} - Round ${verify.round}`}</h1>
            <div className="nav-icon">
            <RuleIco className="rule-ico" fill="#494949" onClick={()=>displayRule(1)} />
            <p onClick={()=>{setDisplayPlay({...displayPlay,display:false});replayGame()}}>x</p>
            </div>
            <Historyboard score={score} />
            <Screenplay pick={pick} setPick={setPick} random={random} picked={picked} />
            <Scoreboard verify={verify} picked={picked} point={point} setPoint={setPoint} />
            <Infoboard point={point} picked={picked} replayGame={replayGame} setDisplayPlay={setDisplayPlay} displayPlay={displayPlay} verify={verify} replaced={replaced} setReplaced={setReplaced} replace={replace} setVerify={setVerify}/>
            <Playpick pick={pick} setPick={setPick} random={random} setRandom={setRandom} verify={verify} setVerify={setVerify} picked={picked} setPicked={setPicked} score={score} setScore={setScore} point={point} setPoint={setPoint} replace={replace} setReplace={setReplace} replaced={replaced} setReplaced={setReplaced} />
        </div>
    )
}

export default Playmode
