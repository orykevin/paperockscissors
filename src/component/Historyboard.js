import React from 'react'
import paper from "../img/hand-paper-blk.svg"
import rock from "../img/hand-rock-blk.svg"
import sciss from "../img/hand-scis-blk.svg"
import glov from "../img/hand-glov-blk.svg"
import hamm from "../img/hand-hammer-blk.svg"
import gun from "../img/hand-gun-blk.svg"
import oIcon from "../img/o-icon.svg"
import xIcon from "../img/x-icon.svg"
import xGreen from "../img/x-icon-grn.svg"

const Historyboard = ({score}) => {
    const scoreIcon = (x) =>{
        if(x == 0) return paper
        if(x == 1) return rock
        if(x == 2) return sciss
        if(x == 3) return glov
        if(x == 4) return hamm
        if(x == 5) return gun
    }
    //0= paper 1= rock 2=scisscors 
    const winIcon = (x,y) => {
        //paper
        if(x == 0 && y == 1) return oIcon;
        if(x == 0 && y == 4) return oIcon;
        //rock
        if(x == 1 && y == 2) return oIcon;
        if(x == 1 && y == 5 ) return oIcon;
        //paper
        if(x==2 && y == 0) return oIcon;
        if(x==2 && y == 3) return oIcon;
        //gloves
        if(x==3 && y == 4) return oIcon;
        if(x==3 && y == 1) return oIcon;
        if(x==3 && y == 0) return oIcon;
        //hammer
        if(x==4 && y == 5) return oIcon;
        if(x==4 && y == 1) return oIcon;
        if(x==4 && y == 2) return oIcon;
        //gun
        if(x==5 && y == 3) return oIcon;
        if(x==5 && y == 0) return oIcon;
        if(x==5 && y == 2) return oIcon;
        if(x == y) return xGreen;
        return xIcon
    }
    return (
        <div className="historyboard">
                <div className="player">
                    <p className="p1">P1</p>
                    <p className="p2">P2</p>
                </div>
                {score.map(scor => 
                (
                    <div className="score-1">
                        <div className="score-p1">
                            <img src={scoreIcon(scor.p1)} alt="" />
                            <img src={winIcon(scor.p1,scor.p2)} alt="" />
                        </div>
                        <div className="score-p2">
                            <img src={scoreIcon(scor.p2)} alt="" />
                            <img src={winIcon(scor.p2,scor.p1)} alt="" />
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Historyboard
