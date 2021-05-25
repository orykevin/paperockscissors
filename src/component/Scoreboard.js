import React from 'react'
import pickedIco from "../img/picked-icon.svg"
import timerIco from "../img/timer-icon.svg"

const Scoreboard = ({verify,picked,point}) => {
    return (
        <div className="scoreboard">
            <div className="tie">
                <h4>TIE</h4>
                <h5>{point.tie}</h5>
            </div>
            <div className="score-player">
                <div className="play-1">
                    <h4>Player 1</h4>
                    <h5>{point.p1}</h5>
                    <img src={picked.p1!=="not"?pickedIco:timerIco} alt="" />
                </div>
                <div className="play-2">
                    <h4>Player 2</h4>
                    <h5>{point.p2}</h5>
                    <img src={picked.p2!==""?pickedIco:timerIco} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Scoreboard
