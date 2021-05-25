import React from 'react'
import imagerule from '../img/paper-rule1.svg'

const Rule = ({display,displayRule}) => {
    return (
        <div className={`paper-rule ${display.display == 1 ? "display" : ""}`}>
            <nav>
            <span className="close-btn" onClick={()=>displayRule(0)}>x</span>
            <p>rule</p>
            <p className="clickable" onClick={()=>displayRule(2)}>special mode</p>
            </nav>
            <img src={imagerule} alt="" />
        </div>
    )
}

export default Rule
