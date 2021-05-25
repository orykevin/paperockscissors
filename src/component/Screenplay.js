import React from 'react'
import leftPaper from "../img/rightleft/left paper.png"
import leftRock from "../img/rightleft/left-rock.png"
import leftSciss from "../img/rightleft/left scissors.png"
import leftGlov from "../img/rightleft/left gloves.png"
import leftHamm from "../img/rightleft/left hammer.png"
import leftGun from "../img/rightleft/left gun.png"
import rightPaper from "../img/rightleft/right paper.png"
import rightRock from "../img/rightleft/right-rock.png"
import rightSciss from "../img/rightleft/right scissors.png"
import rightGlov from "../img/rightleft/right gloves.png"
import rightHamm from "../img/rightleft/right-hammer.png"
import rightGun from "../img/rightleft/right gun.png"

const Screenplay = ({pick,setPick}) => {
    const leftImage = [leftPaper,leftRock,leftSciss,leftGlov,leftHamm,leftGun]
    const rightImage = [rightPaper,rightRock,rightSciss,rightGlov,rightHamm,rightGun]
    return (
        <div className="screenplay">
                <img className="left-img" src={leftImage[pick.p1]} alt="" />
                <img className="right-img" src={rightImage[pick.p2]} alt="" />
        </div>
    )
}

export default Screenplay
