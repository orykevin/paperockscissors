import React from 'react'
import firstRule from "../img/specialrule1.svg"
import scndRule from "../img/specialrule2.svg"
import thrdRule from "../img/specialrule3.svg"

const Specialrule = ({display,displayRule}) => {
    return (
        <div className={`specialrule ${display.display == 2 ? "display":""}`}>
            <span className="close-btn" onClick={()=>displayRule(0)}>x</span>
            <nav>
            <p>special mode</p>
            <p className="clickable" onClick={()=>displayRule(1)}>rule</p>
            </nav>
            <div className="explain-1">
                <h1>First point</h1>
                <img src={firstRule} alt="" />
                <p>both player choose rock,paper,scissors</p>
            </div>
            <div className="explain-2">
                <h1>Second point</h1>
                <img src={scndRule} alt="" />
                <p>Player 1 win with paper,so player banned
                    to choose paper on next round,and
                    replace paper with gun,hammer,or gloves.
                    <br />
                    <br/>
                    Player 2 lose can choose 
                    rock,paper,or scissors to replaced 
                    with gun,hammer,or gloves. </p>
            </div>
            <div className="explain-3">
                <h1>Third point</h1>
                <img src={thrdRule} alt="" />
                <p>both player choose
                   gloves,hammer,or gun</p>
            </div>
        </div>
    )
}

export default Specialrule
