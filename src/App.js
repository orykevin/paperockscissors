import './App.css';
import React, { useState } from 'react';
import image01 from "./img/hand-paper-wht.svg"
import image02 from "./img/hand-rock-wht.svg"
import image03 from "./img/hand-scis-wht.svg"
import Rule from "./component/rule.js"
import Specialrule from "./component/Specialrule.js"
import Playmode from "./component/Playmode.js"

function App() {
  const [display,setDisplay] = useState({
    display:0,
  })
  const displayRule = (i) => {
    setDisplay({display:i});
  }
  const [displayPlay,setDisplayPlay] = useState({
    display:false,
  })
  const [verify,setVerify] = useState({
    picked:false,
    bothPicked:false,
    round:1,
    mode:0,
    replace:false,
    needReplace:false,
    choosing:false,
    point:0,
})

  return (
    <div className="App">
      <h1 className="title-front">Paper Rock Scissors V.2</h1>
      <div className="logo-front">
        <img src={image01} alt="paper" />
        <img src={image02} alt="rock" />
        <img src={image03} alt="scissors" />
      </div>
      <button className="button-1" onClick={()=>{setDisplayPlay({mode:0,display:true});setVerify({...verify,mode:0})}}>Normal mode</button>
      <button className="button-1" onClick={()=>{setDisplayPlay({mode:1,display:true});setVerify({...verify,mode:1})}}>Special mode</button>
      <button className="button-2" onClick={() => displayRule(1)}>RULE</button>
      <Rule display={display} displayRule={displayRule}/>
      <Specialrule display={display} displayRule={displayRule}/>
      <Playmode display={display} setDisplay={setDisplay} displayPlay={displayPlay} setDisplayPlay={setDisplayPlay} displayRule={displayRule} verify={verify} setVerify={setVerify} />
    </div>

  );
}

export default App;
