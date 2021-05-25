import React from 'react'
import  { ReactComponent as HandPaper} from "../img/hand-paper-blu.svg"
import  { ReactComponent as HandRock} from "../img/hand-rock-blu.svg"
import  { ReactComponent as HandSciss} from "../img/hand-scis-blu.svg"
import  { ReactComponent as HandGlov} from "../img/hand-glov-blu.svg"
import  { ReactComponent as HandHamm} from "../img/hand-hammer-blu.svg"
import  { ReactComponent as HandGun} from "../img/hand-gun-blu.svg"

const Pickplay = ({pick,setPick,random,setRandom,verify,setVerify,picked,setPicked,score,setScore,point,setPoint,replace,setReplace,replaced,setReplaced}) => {
    const clickPicked = (x) =>{
        console.log("this is normal")
        setPicked({...picked,p1:x});
        setRandom(Math.floor(Math.random() * 3));
        setTimeout(()=>{
        setPicked({p1:x,p2:random});
        setPick({p1:x,p2:random})
        setScore([...score,{p1:x,p2:random}])
        winIcon(x,random)
        setTimeout(()=>{
            setPicked({p1:"not",p2:""})
            setVerify({...verify,round:verify.round+1})
        },1500)
        },3500)
    }
    const clickSpecial = (x) =>{
        //console.log("this is special")
        if(point.p1 === 2|| point.p2 === 2){
                console.log("end Round !")
                setPicked({...picked,p1:x});
                const randnum = Math.floor(Math.random() * (5-3+1))+3;
                console.log(randnum)
                setTimeout(()=>{
                setPicked({p1:x,p2:randnum});
                setPick({p1:x,p2:randnum})
                setScore([...score,{p1:x,p2:randnum}])
                winIcon(x,randnum)
                setTimeout(()=>{
                setPicked({p1:"not",p2:""})
                setVerify({...verify,round:verify.round+1})
                },1500)
                },3500)
                return
        }else if(!(point.p1 > 0 || point.p2 > 0)){
            //console.log("not yet get point")
            setPicked({...picked,p1:x});
            setRandom(Math.floor(Math.random() * 3));
            setTimeout(()=>{
            setPicked({p1:x,p2:random});
            setPick({p1:x,p2:random})
            setScore([...score,{p1:x,p2:random}])
            winIcon(x,random)
            setTimeout(()=>{
            setPicked({p1:"not",p2:""})
            setVerify({...verify,round:verify.round+1,replace:true})
            setReplace({...replace,p1:x});
            setReplaced({...replaced,p1:x});
        },1500)
        },3500)
        }else if (verify.replace) {
            if(verify.replace){
                if(point.p1 > 0)
                console.log("replaced "+ handData[0].name);
                setReplace({...replace,p1:x});
                setReplaced({...replaced,p1:x});
                setVerify({...verify,choosing:true});
            }
        console.log("choose another")
        }else if(replaced.p1 > 2){
            console.log("point 2!")
            if(replace.p1 === x){
                setPicked({...picked,p1:replaced.p1});
                setRandom(Math.floor(Math.random() * 3));
                setTimeout(()=>{
                setPicked({p1:replaced.p1,p2:random});
                setPick({p1:replaced.p1,p2:random})
                setScore([...score,{p1:replaced.p1,p2:random}])
                winIcon(replaced.p1,random)
                setTimeout(()=>{
                setPicked({p1:"not",p2:""})
                setVerify({...verify,round:verify.round+1})
                },1500)
                },3500)
                return
            }
            setPicked({...picked,p1:x});
            setRandom(Math.floor(Math.random() * 6));
            setTimeout(()=>{
            setPicked({p1:x,p2:random});
            setPick({p1:x,p2:random})
            setScore([...score,{p1:x,p2:random}])
            winIcon(x,random)
            setTimeout(()=>{
            setPicked({p1:"not",p2:""})
            setVerify({...verify,round:verify.round+1})
        },1500)
        },3500)
        }
    }
    const winIcon = (x,y) => {
        //paper
        if(x == 0 && y == 1) return setPoint({...point,p1:point.p1+1});
        if(x == 0 && y == 4) return setPoint({...point,p1:point.p1+1});
        //rock
        if(x == 1 && y == 2) return setPoint({...point,p1:point.p1+1});
        if(x == 1 && y == 5 ) return setPoint({...point,p1:point.p1+1});
        //paper
        if(x==2 && y == 0) return setPoint({...point,p1:point.p1+1});
        if(x==2 && y == 3) return setPoint({...point,p1:point.p1+1});
        //gloves
        if(x==3 && y == 4) return setPoint({...point,p1:point.p1+1});
        if(x==3 && y == 1) return setPoint({...point,p1:point.p1+1});
        if(x==3 && y == 0) return setPoint({...point,p1:point.p1+1});
        //hammer
        if(x==4 && y == 5) return setPoint({...point,p1:point.p1+1});
        if(x==4 && y == 1) return setPoint({...point,p1:point.p1+1});
        if(x==4 && y == 2) return setPoint({...point,p1:point.p1+1});
        //gun
        if(x==5 && y == 3) return setPoint({...point,p1:point.p1+1});
        if(x==5 && y == 0) return setPoint({...point,p1:point.p1+1});
        if(x==5 && y == 2) return setPoint({...point,p1:point.p1+1});
        if(x == y) return setPoint({...point,tie:point.tie+1});
        return setPoint({...point,p2:point.p2+1});
    }
    const disableButton = () =>{
        if(picked.p1!=="not") console.log(true);
        if(point.p1 == 3) console.log(true);
        if(point.p2 == 3) console.log(true);
        console.log(false)
    }
    const handData = [
        {name:"paper",img:(<HandPaper className="hand-pick" />)},
        {name:"rock",img:(<HandRock className="hand-pick" />)},
        {name:"scissors",img:(<HandSciss className="hand-pick" />)},
        {name:"gloves",img:(<HandGlov className="hand-pick" />)},
        {name:"hammer",img:(<HandHamm className="hand-pick" />)},
        {name:"gun",img:(<HandGun className="hand-pick" />)}
    ]
    const replacing = (x) =>{
        if(replace.p1 === -1 || !x === replace.p1 ){
            //console.log("apper")
            return x;
        }else if(point.p1 === 2 || point.p2 === 2){
            return x+3;
        }else if(x === replace.p1){
            return replaced.p1;
        }else{
            return x;
        }
    }
    const disableBut = () =>{
        if(picked.p1!=="not") return true
        if(point.p1 == 3) return true
        if(point.p2==3) return true  
        if(verify.replace && verify.choosing) return true 
        if(verify.replace && point.p1 ===1) return true
        return false
    }
    return (
        <div className ="pick-play">
            <button className={`first-pick ${picked.p1=="not"&&point.p1 !== 3 &&point.p2 !==3 ?"f1":""}`} disabled={disableBut()} onClick={()=>verify.mode === 0 ? clickPicked(0) : (point.p1 === 2 || point.p2 === 2) ? clickSpecial(3) : clickSpecial(0)}>
                {verify.mode === 0 ? handData[0].img : handData[replacing(0)].img}
                <p>{verify.mode === 0 ? handData[0].name : handData[replacing(0)].name}</p>
            </button>
            <button className={`second-pick ${picked.p1=="not"&&point.p1 !== 3 &&point.p2 !==3?"s2":""}`} disabled={disableBut()} onClick={()=>verify.mode === 0 ? clickPicked(1) : (point.p1 === 2 || point.p2 === 2) ? clickSpecial(4) : clickSpecial(1)}>
                {verify.mode === 0 ? handData[1].img : handData[replacing(1)].img}
                <p>{verify.mode === 0 ? handData[1].name : handData[replacing(1)].name}</p>
            </button>
            <button className={`third-pick ${picked.p1=="not"&&point.p1 !== 3 &&point.p2 !==3?"t3":""}`} disabled={disableBut()} onClick={()=>verify.mode === 0 ? clickPicked(2) : (point.p1 === 2 || point.p2 === 2) ? clickSpecial(5) : clickSpecial(2)}>
                {verify.mode === 0 ? handData[2].img : handData[replacing(2)].img}
                <p>{verify.mode === 0 ? handData[2].name : handData[replacing(2)].name}</p>
            </button>
        </div>
    )
}

export default Pickplay
