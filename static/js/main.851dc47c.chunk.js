(this.webpackJsonppaperrockscissors=this.webpackJsonppaperrockscissors||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a,n=c(1),r=c.n(n),l=c(8),s=c.n(l),i=(c(13),c(2)),o=c(3),p=(c(14),c.p+"static/media/hand-paper-wht.a0a3017b.svg"),d=c.p+"static/media/hand-rock-wht.0a60a706.svg",u=c.p+"static/media/hand-scis-wht.107b3c43.svg",b=c.p+"static/media/paper-rule1.41d7ca83.svg",m=c(0),j=function(e){var t=e.display,c=e.displayRule;return Object(m.jsxs)("div",{className:"paper-rule ".concat(1==t.display?"display":""),children:[Object(m.jsxs)("nav",{children:[Object(m.jsx)("span",{className:"close-btn",onClick:function(){return c(0)},children:"x"}),Object(m.jsx)("p",{children:"rule"}),Object(m.jsx)("p",{className:"clickable",onClick:function(){return c(2)},children:"special mode"})]}),Object(m.jsx)("img",{src:b,alt:""})]})},h=c.p+"static/media/specialrule1.0c584318.svg",O=c.p+"static/media/specialrule2.1b448102.svg",f=c.p+"static/media/specialrule3.86f0ca08.svg",g=function(e){var t=e.display,c=e.displayRule;return Object(m.jsxs)("div",{className:"specialrule ".concat(2==t.display?"display":""),children:[Object(m.jsx)("span",{className:"close-btn",onClick:function(){return c(0)},children:"x"}),Object(m.jsxs)("nav",{children:[Object(m.jsx)("p",{children:"special mode"}),Object(m.jsx)("p",{className:"clickable",onClick:function(){return c(1)},children:"rule"})]}),Object(m.jsxs)("div",{className:"explain-1",children:[Object(m.jsx)("h1",{children:"First point"}),Object(m.jsx)("img",{src:h,alt:""}),Object(m.jsx)("p",{children:"both player choose rock,paper,scissors"})]}),Object(m.jsxs)("div",{className:"explain-2",children:[Object(m.jsx)("h1",{children:"Second point"}),Object(m.jsx)("img",{src:O,alt:""}),Object(m.jsxs)("p",{children:["Player 1 win with paper,so player banned to choose paper on next round,and replace paper with gun,hammer,or gloves.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Player 2 lose can choose rock,paper,or scissors to replaced with gun,hammer,or gloves. "]})]}),Object(m.jsxs)("div",{className:"explain-3",children:[Object(m.jsx)("h1",{children:"Third point"}),Object(m.jsx)("img",{src:f,alt:""}),Object(m.jsx)("p",{children:"both player choose gloves,hammer,or gun"})]})]})},v=c.p+"static/media/hand-paper-blk.def6a061.svg",x=c.p+"static/media/hand-rock-blk.bb078fc8.svg",y=c.p+"static/media/hand-scis-blk.43352a88.svg",w=c.p+"static/media/hand-glov-blk.5f4875ae.svg",k=c.p+"static/media/hand-hammer-blk.08bf0c98.svg",E=c.p+"static/media/hand-gun-blk.6ba87339.svg",N=c.p+"static/media/o-icon.81c2bc33.svg",P=c.p+"static/media/x-icon.29481fa7.svg",S=c.p+"static/media/x-icon-grn.abca66cb.svg",C=function(e){var t=e.score,c=function(e){return 0==e?v:1==e?x:2==e?y:3==e?w:4==e?k:5==e?E:void 0},a=function(e,t){return 0==e&&1==t||0==e&&4==t||1==e&&2==t||1==e&&5==t||2==e&&0==t||2==e&&3==t||3==e&&4==t||3==e&&1==t||3==e&&0==t||4==e&&5==t||4==e&&1==t||4==e&&2==t||5==e&&3==t||5==e&&0==t||5==e&&2==t?N:e==t?S:P};return Object(m.jsxs)("div",{className:"historyboard",children:[Object(m.jsxs)("div",{className:"player",children:[Object(m.jsx)("p",{className:"p1",children:"P1"}),Object(m.jsx)("p",{className:"p2",children:"P2"})]}),t.map((function(e){return Object(m.jsxs)("div",{className:"score-1",children:[Object(m.jsxs)("div",{className:"score-p1",children:[Object(m.jsx)("img",{src:c(e.p1),alt:""}),Object(m.jsx)("img",{src:a(e.p1,e.p2),alt:""})]}),Object(m.jsxs)("div",{className:"score-p2",children:[Object(m.jsx)("img",{src:c(e.p2),alt:""}),Object(m.jsx)("img",{src:a(e.p2,e.p1),alt:""})]})]})}))]})},M=c.p+"static/media/left paper.8b9be5a5.png",V=c.p+"static/media/left-rock.e37ebdc5.png",I=c.p+"static/media/left scissors.80043d44.png",R=c.p+"static/media/left gloves.2a4f4973.png",L=c.p+"static/media/left hammer.d5ccb6c6.png",z=c.p+"static/media/left gun.b5c584a9.png",_=c.p+"static/media/right paper.53b43086.png",B=c.p+"static/media/right-rock.292521ab.png",T=c.p+"static/media/right scissors.17c485da.png",H=c.p+"static/media/right gloves.776d1683.png",F=c.p+"static/media/right-hammer.30222c84.png",X=c.p+"static/media/right gun.fff4dbfa.png",D=function(e){var t=e.pick,c=(e.setPick,[M,V,I,R,L,z]),a=[_,B,T,H,F,X];return Object(m.jsxs)("div",{className:"screenplay",children:[Object(m.jsx)("img",{className:"left-img",src:c[t.p1],alt:""}),Object(m.jsx)("img",{className:"right-img",src:a[t.p2],alt:""})]})},G=c.p+"static/media/picked-icon.c64008ae.svg",A=c.p+"static/media/timer-icon.664e162f.svg",J=function(e){e.verify;var t=e.picked,c=e.point;return Object(m.jsxs)("div",{className:"scoreboard",children:[Object(m.jsxs)("div",{className:"tie",children:[Object(m.jsx)("h4",{children:"TIE"}),Object(m.jsx)("h5",{children:c.tie})]}),Object(m.jsxs)("div",{className:"score-player",children:[Object(m.jsxs)("div",{className:"play-1",children:[Object(m.jsx)("h4",{children:"Player 1"}),Object(m.jsx)("h5",{children:c.p1}),Object(m.jsx)("img",{src:"not"!==t.p1?G:A,alt:""})]}),Object(m.jsxs)("div",{className:"play-2",children:[Object(m.jsx)("h4",{children:"Player 2"}),Object(m.jsx)("h5",{children:c.p2}),Object(m.jsx)("img",{src:""!==t.p2?G:A,alt:""})]})]})]})},Y=function(e){var t=e.picked,c=e.point,a=e.replayGame,n=e.setDisplayPlay,r=e.displayPlay,l=e.verify,s=e.setReplaced,o=e.replaced,p=e.replace,d=e.setVerify,u=["take your pick","choose one to be replace","choose one to replacing "+["paper","rock","scissors"][p.p1],"You Win","You Lose"],b=function(e){console.log(e),s(Object(i.a)(Object(i.a)({},o),{},{p1:e})),d(Object(i.a)(Object(i.a)({},l),{},{replace:!1,choosing:!1}))};return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"infoboard",children:[Object(m.jsx)("p",{children:function(){if((c.p1>0||c.p2>0)&&1===l.mode){if(l.replace&&c.p1>0||l.replace&&l.choosing)return u[2];if(l.replace&&c.p2>0)return u[1]}return"not"===t.p1&&3!==c.p1&&3!==c.p2?u[0]:3===c.p1?u[3]:3===c.p2?u[4]:void 0}()}),Object(m.jsxs)("div",{className:"replace-item ".concat(l.choosing||1===c.p1&&l.replace?"displayFl":""),children:[Object(m.jsx)("span",{onClick:function(){return b(3)},children:"Gloves"}),Object(m.jsx)("span",{onClick:function(){return b(4)},children:"Hammer"}),Object(m.jsx)("span",{onClick:function(){return b(5)},children:"Gun"})]}),Object(m.jsxs)("div",{className:"end-round ".concat(3===c.p1||3===c.p2?"displayFl":""),children:[Object(m.jsx)("button",{className:"playagain-btn",onClick:function(){return a()},children:"Play Again"}),Object(m.jsx)("button",{className:"exit-btn",onClick:function(){n(Object(i.a)(Object(i.a)({},r),{},{display:!1})),a()},children:"Exit"})]})]})})},U=c(4);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var c,a,n=function(e,t){if(null==e)return{};var c,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function K(e,t){var c=e.title,r=e.titleId,l=q(e,["title","titleId"]);return n.createElement("svg",W({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 36 36",style:{enableBackground:"new 0 0 36 36"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},l),c?n.createElement("title",{id:r},c):null,a||(a=n.createElement("path",{fill:"current",id:"Icon_awesome-hand-paper",d:"M29.9,9.8c-1.5,0-2.8,1.2-2.8,2.8c0,0,0,0,0,0v6h-0.5v-12c0-1.5-1.2-2.8-2.8-2.8 c0,0,0,0,0,0c-1.5,0-2.7,1.2-2.7,2.7v12.1h-0.5V3.8c0-1.5-1.2-2.8-2.8-2.8c0,0,0,0,0,0c-1.5,0-2.7,1.2-2.7,2.7v14.8h-0.5v-12 c0-1.5-1.2-2.8-2.8-2.8c0,0,0,0,0,0c-1.5,0-2.7,1.2-2.7,2.7v16.1l-2.2-3c-0.9-1.2-2.6-1.5-3.8-0.7s-1.5,2.6-0.7,3.8 c0,0,0,0.1,0.1,0.1l8.6,11.8c0.6,0.8,1.6,1.4,2.7,1.4h13.5c1.5,0,2.8-1,3.2-2.5l1.8-7.7c0.2-1,0.3-2,0.3-3V12.5 C32.6,11,31.4,9.8,29.9,9.8z"})))}var Q,Z=n.forwardRef(K);c.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var c,a,n=function(e,t){if(null==e)return{};var c,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function te(e,t){var c=e.title,a=e.titleId,r=ee(e,["title","titleId"]);return n.createElement("svg",$({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 36 36",style:{enableBackground:"new 0 0 36 36"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),c?n.createElement("title",{id:a},c):null,Q||(Q=n.createElement("path",{fill:"current",id:"Icon_awesome-hand-rock",className:"st0",d:"M31.8,6.5c-1.8,0-3.3,1.5-3.3,3.5c0,0,0,0,0,0.1h-0.5V7.8c0-1.9-1.4-3.5-3.2-3.6 c-1.8,0-3.3,1.5-3.3,3.5c0,0,0,0,0,0.1v2.4h-0.5V6.6c0-1.9-1.4-3.5-3.2-3.6c-1.8,0-3.3,1.5-3.3,3.5c0,0,0,0,0,0.1v3.5h-0.5V7.8 c0-1.9-1.4-3.5-3.2-3.6c-1.8,0-3.3,1.5-3.3,3.5c0,0,0,0,0,0.1v10l-0.5-0.5v-3.5c0-1.9-1.4-3.5-3.2-3.6C1.5,10,0,11.6,0,13.5 c0,0,0,0,0,0.1v4.9c0,2,0.8,3.9,2.2,5.3l7.6,7.3c0.7,0.7,1.1,1.6,1.1,2.6v0.5c0,1,0.7,1.8,1.6,1.8c0,0,0,0,0,0H29 c0.9,0,1.6-0.8,1.6-1.8c0,0,0,0,0,0V34c0-0.9,0.2-1.9,0.5-2.7l3.3-8.6c0.3-0.9,0.5-1.8,0.5-2.7v-9.8C35,8.2,33.6,6.6,31.8,6.5z"})))}var ce,ae=n.forwardRef(te);c.p;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var c,a,n=function(e,t){if(null==e)return{};var c,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function le(e,t){var c=e.title,a=e.titleId,r=re(e,["title","titleId"]);return n.createElement("svg",ne({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 36 36",style:{enableBackground:"new 0 0 36 36"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),c?n.createElement("title",{id:a},c):null,ce||(ce=n.createElement("path",{fill:"current",id:"Icon_awesome-hand-peace",className:"st0",d:"M31.1,15.2c-1.6,0-2.9,1.3-2.9,2.8h-0.6v-2.2c0-1.6-1.3-2.8-2.9-2.8 c-1.6,0-2.9,1.3-2.9,2.8c0,0,0,0,0,0V18h-0.6V3.4C21.4,1.5,19.9,0,18,0c-1.9,0-3.4,1.5-3.4,3.4c0,0,0,0,0,0V18h-1l-5-12.5 C7.9,3.8,5.9,2.9,4.2,3.6S1.5,6.2,2.2,8l5.3,13.4l-2.2,1.7C4.3,24,4,25.5,4.7,26.7l4.6,7.9c0.5,0.9,1.5,1.4,2.5,1.4h17.1 c1.3,0,2.5-0.9,2.8-2.2l2.3-9.6c0.1-0.2,0.1-0.4,0.1-0.6V18C34,16.4,32.7,15.2,31.1,15.2C31.1,15.2,31.1,15.2,31.1,15.2z"})))}var se,ie=n.forwardRef(le);c.p;function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var c,a,n=function(e,t){if(null==e)return{};var c,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function de(e,t){var c=e.title,a=e.titleId,r=pe(e,["title","titleId"]);return n.createElement("svg",oe({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 36 36",style:{enableBackground:"new 0 0 36 36"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),c?n.createElement("title",{id:a},c):null,se||(se=n.createElement("g",{id:"Group_4",transform:"translate(0)"},n.createElement("g",{id:"Group_3"},n.createElement("path",{fill:"current",id:"Path_1",className:"st0",d:"M13.4,29.3c-0.1-0.2-0.2-0.4-0.2-0.7c-1.1-3-2-5.8-5.2-6.7c-1-0.3-2.1-0.3-3.1,0l0.3,0.9 c0.3,0.9,0.8,1.7,1.3,2.4l3.9,5.1L13.4,29.3z"}),n.createElement("path",{id:"Path_2",className:"st0",d:"M8.3,20.8c3.8,1,5,4.4,6.1,7.5c0.1,0.2,0.2,0.4,0.2,0.6l6.4-2.3l-1-2.7c0-0.1,0-0.2,0-0.2 c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1l4-8.7c0.4-0.9,0-2-0.9-2.5c-0.9-0.4-2,0-2.5,0.9L19.4,16c-0.2,0.5-0.7,0.7-1.2,0.7 c-0.5,0-0.9-0.3-1.1-0.8L12.3,2.8c-0.2-0.6-0.9-1-1.6-0.7c0,0-0.1,0-0.1,0c-0.6,0.3-0.9,1-0.6,1.6l2.4,6.7l0.7,1.9 c0,0.1,0,0.2,0,0.2c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.5-0.2-0.6-0.4l-4-11C7.9,1.5,7.7,1.3,7.4,1.1C7.1,1,6.8,1,6.4,1.1 C5.8,1.3,5.5,2,5.7,2.6l4,10.9c0.1,0.3,0,0.7-0.4,0.8c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0h0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0 c0,0,0,0-0.1,0c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.1-0.2L5.4,5.3c-0.2-0.6-0.9-1-1.6-0.7c-0.6,0.2-1,0.9-0.7,1.6 l1.5,4.1l2.3,6.4c0.1,0.3,0,0.7-0.4,0.8c-0.1,0-0.1,0-0.2,0h0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0c0,0-0.1-0.1-0.1-0.1 c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.1-0.2l-2.3-6.4c-0.2-0.6-0.9-1-1.6-0.7c0,0-0.1,0-0.1,0c-0.6,0.3-0.9,1-0.6,1.6l3.4,9.2 C5.7,20.4,7,20.4,8.3,20.8z"}),n.createElement("path",{id:"Path_3",className:"st0",d:"M19.6,12.6c0.1-0.1,0.1-0.2,0.2-0.3V4.7c0-0.7-0.6-1.2-1.3-1.2c-0.7,0-1.2,0.6-1.2,1.2v8l1,2.8 L19.6,12.6z"}),n.createElement("path",{id:"Path_4",className:"st0",d:"M23.5,11.1V2.3C23.5,1.6,23,1,22.3,1S21,1.6,21,2.3v8.9C21.8,10.8,22.7,10.7,23.5,11.1z"}),n.createElement("path",{id:"Path_5",className:"st0",d:"M27.9,31.6H25c-0.2,0.5-0.6,0.9-1.1,1.1l-0.3,0.1H26c0.7,0,1.3,0.6,1.3,1.2v0.6 c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6v-0.6h-5.9L14.9,36h13c0.3,0,0.6-0.3,0.6-0.6v-3.1C28.5,31.9,28.3,31.6,27.9,31.6z"}),n.createElement("path",{id:"Path_6",className:"st0",d:"M34.3,17.5L34.3,17.5c-0.7-0.7-1.9-0.7-2.7,0l-2.3,2.3c-0.5,0.5-1.3,0.5-1.8,0 c-0.2-0.2-0.4-0.6-0.4-0.9V4.7c0-0.7-0.6-1.2-1.2-1.2c0,0-0.1,0-0.1,0c-0.7,0.1-1.2,0.7-1.2,1.3V12c0.8,0.9,0.9,2.2,0.4,3.3 l-3.9,8.4l0.9,2.6c0.8,0,1.5,0.5,1.8,1.2l1,2.9c0,0,0,0,0,0h2.3v-3.1c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.2v0l6.9-6.7 C35.1,19.4,35.1,18.2,34.3,17.5z"}),n.createElement("path",{id:"Path_7",className:"st0",d:"M23.8,31.3c0.1-0.2,0.1-0.3,0-0.5l-1-2.9c-0.1-0.2-0.3-0.4-0.6-0.4c-0.1,0-0.1,0-0.2,0l-11.6,4.2 L9.8,32l1.5,4l12.2-4.4C23.6,31.5,23.7,31.4,23.8,31.3z M22.1,31.4L22.1,31.4c-0.3,0.1-0.7,0-0.8-0.4c0,0,0,0,0,0l-0.2-0.6 l-8.7,3.2c-0.3,0.1-0.7,0-0.8-0.4c-0.1-0.3,0-0.7,0.4-0.8l8.7-3.2c0.6-0.2,1.4,0.1,1.6,0.7l0.2,0.6C22.6,30.9,22.4,31.3,22.1,31.4 L22.1,31.4z"})))))}var ue,be=n.forwardRef(de);c.p;function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}function je(e,t){if(null==e)return{};var c,a,n=function(e,t){if(null==e)return{};var c,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function he(e,t){var c=e.title,a=e.titleId,r=je(e,["title","titleId"]);return n.createElement("svg",me({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 36 36",style:{enableBackground:"new 0 0 36 36"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),c?n.createElement("title",{id:a},c):null,ue||(ue=n.createElement("g",{id:"hammer",transform:"translate(0)"},n.createElement("path",{fill:"current",id:"Path_8",className:"st0",d:"M34.2,12.6c-0.4-0.4-1.1-0.4-1.5,0c0,0,0,0,0,0c-0.4,0.4-1.1,0.4-1.5,0c-0.4-0.4-0.4-1.1,0-1.5 l0,0l-6,6c0.4-0.4,1.1-0.4,1.5,0c0.4,0.4,0.4,1.1,0,1.5c-0.4,0.4-0.4,1.1,0,1.5c0,0,0,0,0,0l1.5,1.5c0.4,0.4,1.1,0.4,1.5,0 c0,0,0,0,0,0l6-6c0.4-0.4,0.4-1.1,0-1.5c0,0,0,0,0,0L34.2,12.6z"}),n.createElement("path",{id:"Path_9",className:"st0",d:"M20,10.3l4.5,4.5l5.2-5.2c0.4-0.4,0.4-1.1,0-1.5c0,0,0,0,0,0l-3-3c-4-4-10.3-6.1-14.9-1.5 c-0.4,0.4-0.4,1.1,0,1.5c0.2,0.2,0.5,0.3,0.7,0.3c3.2,0,6.4,1.2,8.8,3.3c0.1,0.1,0.1,0.2,0,0.3L20,10.3z"}),n.createElement("path",{id:"Path_10",className:"st0",d:"M0.9,33.9c1.2,1.2,3.2,1.2,4.5,0L23,16.3l-4.5-4.5L0.9,29.4C-0.3,30.7-0.3,32.7,0.9,33.9z"}))))}var Oe,fe=n.forwardRef(he);c.p;function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var c,a,n=function(e,t){if(null==e)return{};var c,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function xe(e,t){var c=e.title,a=e.titleId,r=ve(e,["title","titleId"]);return n.createElement("svg",ge({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 36 36",style:{enableBackground:"new 0 0 36 36"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),c?n.createElement("title",{id:a},c):null,Oe||(Oe=n.createElement("path",{fill:"current",id:"Path_11",className:"st0",d:"M36,12.1V9.4h-0.1V6.9h-0.1V6h-1v0.9c0,0-25.2,0.2-29.6,0c-0.7,0-4.5,0.4-0.7,6.3 c1,1.8,0.8,4.1-0.6,5.6c-2.4,2.9-3.4,8.8-3.7,10.6H0v1.1h10.9v-2c-4.7,0.9,3.3-10.1,2.9-8.3c0.3,0.1,0.5,0.1,0.8,0.1h2.8 c1.8,0,4.1-1.9,4.1-3.6c0-0.7-0.3-1.4-0.7-2h14.1l0.5-1.7h0.6L36,12.1l-0.2,0.1l0-0.1H36z M17.5,18.7h-2.8c-0.2,0-0.4,0-0.6-0.1 c0.2-1,0.3-1.8,0.4-2.5c0.2,0.9,0.8,1.6,1.6,2c0.1,0,0.1,0,0.2,0c0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.1-0.4-0.3-0.5 c-0.9-0.4-1.1-1.8-1.2-2.4H18c1.1,0.3,1.8,1.4,1.5,2.5C19.2,18.1,18.4,18.7,17.5,18.7L17.5,18.7z M32,13H18l2.4-0.8H32V13z"})))}var ye,we,ke,Ee,Ne,Pe,Se,Ce,Me,Ve,Ie,Re,Le,ze,_e,Be,Te,He,Fe,Xe,De,Ge,Ae=n.forwardRef(xe),Je=(c.p,function(e){e.pick;var t=e.setPick,c=e.random,a=e.setRandom,n=e.verify,r=e.setVerify,l=e.picked,s=e.setPicked,o=e.score,p=e.setScore,d=e.point,u=e.setPoint,b=e.replace,j=e.setReplace,h=e.replaced,O=e.setReplaced,f=function(e){console.log("this is normal"),s(Object(i.a)(Object(i.a)({},l),{},{p1:e})),a(Math.floor(3*Math.random())),setTimeout((function(){s({p1:e,p2:c}),t({p1:e,p2:c}),p([].concat(Object(U.a)(o),[{p1:e,p2:c}])),v(e,c),setTimeout((function(){s({p1:"not",p2:""}),r(Object(i.a)(Object(i.a)({},n),{},{round:n.round+1}))}),1500)}),3500)},g=function(e){if(2===d.p1||2===d.p2){console.log("end Round !"),s(Object(i.a)(Object(i.a)({},l),{},{p1:e}));var u=Math.floor(3*Math.random())+3;return console.log(u),void setTimeout((function(){s({p1:e,p2:u}),t({p1:e,p2:u}),p([].concat(Object(U.a)(o),[{p1:e,p2:u}])),v(e,u),setTimeout((function(){s({p1:"not",p2:""}),r(Object(i.a)(Object(i.a)({},n),{},{round:n.round+1}))}),1500)}),3500)}if(d.p1>0||d.p2>0){if(n.replace)n.replace&&(d.p1>0&&console.log("replaced "+x[0].name),j(Object(i.a)(Object(i.a)({},b),{},{p1:e})),O(Object(i.a)(Object(i.a)({},h),{},{p1:e})),r(Object(i.a)(Object(i.a)({},n),{},{choosing:!0}))),console.log("choose another");else if(h.p1>2){if(console.log("point 2!"),b.p1===e)return s(Object(i.a)(Object(i.a)({},l),{},{p1:h.p1})),a(Math.floor(3*Math.random())),void setTimeout((function(){s({p1:h.p1,p2:c}),t({p1:h.p1,p2:c}),p([].concat(Object(U.a)(o),[{p1:h.p1,p2:c}])),v(h.p1,c),setTimeout((function(){s({p1:"not",p2:""}),r(Object(i.a)(Object(i.a)({},n),{},{round:n.round+1}))}),1500)}),3500);s(Object(i.a)(Object(i.a)({},l),{},{p1:e})),a(Math.floor(6*Math.random())),setTimeout((function(){s({p1:e,p2:c}),t({p1:e,p2:c}),p([].concat(Object(U.a)(o),[{p1:e,p2:c}])),v(e,c),setTimeout((function(){s({p1:"not",p2:""}),r(Object(i.a)(Object(i.a)({},n),{},{round:n.round+1}))}),1500)}),3500)}}else s(Object(i.a)(Object(i.a)({},l),{},{p1:e})),a(Math.floor(3*Math.random())),setTimeout((function(){s({p1:e,p2:c}),t({p1:e,p2:c}),p([].concat(Object(U.a)(o),[{p1:e,p2:c}])),v(e,c),setTimeout((function(){s({p1:"not",p2:""}),r(Object(i.a)(Object(i.a)({},n),{},{round:n.round+1,replace:!0})),j(Object(i.a)(Object(i.a)({},b),{},{p1:e})),O(Object(i.a)(Object(i.a)({},h),{},{p1:e}))}),1500)}),3500)},v=function(e,t){return u(0==e&&1==t||0==e&&4==t||1==e&&2==t||1==e&&5==t||2==e&&0==t||2==e&&3==t||3==e&&4==t||3==e&&1==t||3==e&&0==t||4==e&&5==t||4==e&&1==t||4==e&&2==t||5==e&&3==t||5==e&&0==t||5==e&&2==t?Object(i.a)(Object(i.a)({},d),{},{p1:d.p1+1}):e==t?Object(i.a)(Object(i.a)({},d),{},{tie:d.tie+1}):Object(i.a)(Object(i.a)({},d),{},{p2:d.p2+1}))},x=[{name:"paper",img:Object(m.jsx)(Z,{className:"hand-pick"})},{name:"rock",img:Object(m.jsx)(ae,{className:"hand-pick"})},{name:"scissors",img:Object(m.jsx)(ie,{className:"hand-pick"})},{name:"gloves",img:Object(m.jsx)(be,{className:"hand-pick"})},{name:"hammer",img:Object(m.jsx)(fe,{className:"hand-pick"})},{name:"gun",img:Object(m.jsx)(Ae,{className:"hand-pick"})}],y=function(e){return-1===b.p1||!e===b.p1?e:2===d.p1||2===d.p2?e+3:e===b.p1?h.p1:e},w=function(){return"not"!==l.p1||(3==d.p1||(3==d.p2||(!(!n.replace||!n.choosing)||!(!n.replace||1!==d.p1))))};return Object(m.jsxs)("div",{className:"pick-play",onTouchStart:"",children:[Object(m.jsxs)("button",{onTouchStart:"",className:"first-pick ".concat("not"==l.p1&&3!==d.p1&&3!==d.p2?"f1":""),disabled:w(),onClick:function(){return 0===n.mode?f(0):2===d.p1||2===d.p2?g(3):g(0)},children:[0===n.mode?x[0].img:x[y(0)].img,Object(m.jsx)("p",{children:0===n.mode?x[0].name:x[y(0)].name}),Object(m.jsx)("span",{className:"border"})]}),Object(m.jsxs)("button",{className:"second-pick ".concat("not"==l.p1&&3!==d.p1&&3!==d.p2?"s2":""),disabled:w(),onClick:function(){return 0===n.mode?f(1):2===d.p1||2===d.p2?g(4):g(1)},children:[0===n.mode?x[1].img:x[y(1)].img,Object(m.jsx)("p",{children:0===n.mode?x[1].name:x[y(1)].name}),Object(m.jsx)("span",{className:"border"})]}),Object(m.jsxs)("button",{className:"third-pick ".concat("not"==l.p1&&3!==d.p1&&3!==d.p2?"t3":""),disabled:w(),onClick:function(){return 0===n.mode?f(2):2===d.p1||2===d.p2?g(5):g(2)},children:[0===n.mode?x[2].img:x[y(2)].img,Object(m.jsx)("p",{children:0===n.mode?x[2].name:x[y(2)].name}),Object(m.jsx)("span",{className:"border"})]})]})});function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}function Ue(e,t){if(null==e)return{};var c,a,n=function(e,t){if(null==e)return{};var c,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function We(e,t){var c=e.title,a=e.titleId,r=Ue(e,["title","titleId"]);return n.createElement("svg",Ye({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),c?n.createElement("title",{id:a},c):null,ye||(ye=n.createElement("g",null,n.createElement("g",null,n.createElement("path",{fill:"current",d:"M131.187,19.652c-32.212,0-58.423,25.972-58.423,57.775l-2.124,299.552l31.867,0.228l2.125-299.663 c0-14.351,11.913-26.025,26.556-26.025h320.266V19.652H131.187z"})))),we||(we=n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M451.452,19.652c-33.386,0-60.548,27.161-60.548,60.548v336.199c0,24.304-19.779,44.083-44.083,44.083 s-44.083-19.779-44.083-44.083v-38.772c0-8.801-7.133-15.934-15.934-15.934H15.934C7.133,361.693,0,368.826,0,377.627v38.772 c0,41.879,34.071,75.95,75.95,75.95v-31.867c-24.309,0-44.083-19.779-44.083-44.083V393.56h239.004v22.838 c0,41.879,34.071,75.95,75.95,75.95c41.879,0,75.95-34.071,75.95-75.95V167.303h73.295c8.801,0,15.934-7.133,15.934-15.934v-71.17 C512,46.813,484.839,19.652,451.452,19.652z M480.133,135.436h-57.361V80.199c0-15.817,12.869-28.68,28.68-28.68 s28.68,12.864,28.68,28.68V135.436z"})))),ke||(ke=n.createElement("g",null,n.createElement("g",null,n.createElement("rect",{x:72.763,y:460.481,width:270.335,height:31.867})))),Ee||(Ee=n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M236.88,108.349h-82.324c-8.801,0-15.934,7.133-15.934,15.934s7.133,15.934,15.934,15.934h82.324 c8.801,0,15.934-7.133,15.934-15.934S245.68,108.349,236.88,108.349z"})))),Ne||(Ne=n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M332.481,172.083H154.556c-8.801,0-15.934,7.133-15.934,15.934s7.133,15.934,15.934,15.934h177.925 c8.801,0,15.934-7.133,15.934-15.934S341.282,172.083,332.481,172.083z"})))),Pe||(Pe=n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M332.481,235.817H154.556c-8.801,0-15.934,7.133-15.934,15.934c0,8.801,7.133,15.934,15.934,15.934h177.925 c8.801,0,15.934-7.128,15.934-15.934C348.415,242.95,341.282,235.817,332.481,235.817z"})))),Se||(Se=n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M332.481,299.552H154.556c-8.801,0-15.934,7.133-15.934,15.934s7.133,15.934,15.934,15.934h177.925 c8.801,0,15.934-7.133,15.934-15.934S341.282,299.552,332.481,299.552z"})))),Ce||(Ce=n.createElement("g",null)),Me||(Me=n.createElement("g",null)),Ve||(Ve=n.createElement("g",null)),Ie||(Ie=n.createElement("g",null)),Re||(Re=n.createElement("g",null)),Le||(Le=n.createElement("g",null)),ze||(ze=n.createElement("g",null)),_e||(_e=n.createElement("g",null)),Be||(Be=n.createElement("g",null)),Te||(Te=n.createElement("g",null)),He||(He=n.createElement("g",null)),Fe||(Fe=n.createElement("g",null)),Xe||(Xe=n.createElement("g",null)),De||(De=n.createElement("g",null)),Ge||(Ge=n.createElement("g",null)))}var qe=n.forwardRef(We),Ke=(c.p,function(e){e.display;var t=e.displayRule,c=e.displayPlay,a=e.setDisplayPlay,r=e.verify,l=e.setVerify,s=Object(n.useState)([]),p=Object(o.a)(s,2),d=p[0],u=p[1],b=Object(n.useState)({p1:1,p2:1}),j=Object(o.a)(b,2),h=j[0],O=j[1],f=Object(n.useState)({p1:"not",p2:""}),g=Object(o.a)(f,2),v=g[0],x=g[1],y=Object(n.useState)(Math.floor(3*Math.random())),w=Object(o.a)(y,2),k=w[0],E=w[1],N=Object(n.useState)({p1:0,p2:0,tie:0}),P=Object(o.a)(N,2),S=P[0],M=P[1],V=function(){u([]),O({p1:1,p2:1}),x({p1:"not",p2:""}),M({p1:0,p2:0,tie:0}),l(Object(i.a)(Object(i.a)({},r),{},{picked:!1,bothPicked:!1,round:1,replace:!1,needReplace:!1,choosing:!1})),z({p1:-1,p2:-1}),H({p1:0,p2:-1}),E(Math.floor(3*Math.random()))},I=Object(n.useState)({p1:-1,p2:-1}),R=Object(o.a)(I,2),L=R[0],z=R[1],_=Object(n.useState)({p1:0,p2:-1}),B=Object(o.a)(_,2),T=B[0],H=B[1];return Object(m.jsxs)("div",{className:"play-mode ".concat(c.display?"display":""),children:[Object(m.jsx)("h1",{children:"".concat(0==c.mode?"Normal Mode":"Special mode"," - Round ").concat(r.round)}),Object(m.jsxs)("div",{className:"nav-icon",children:[Object(m.jsx)(qe,{className:"rule-ico",fill:"#494949",onClick:function(){return t(1)}}),Object(m.jsx)("p",{onClick:function(){a(Object(i.a)(Object(i.a)({},c),{},{display:!1})),V()},children:"x"})]}),Object(m.jsx)(C,{score:d}),Object(m.jsx)(D,{pick:h,setPick:O,random:k,picked:v}),Object(m.jsx)(J,{verify:r,picked:v,point:S,setPoint:M}),Object(m.jsx)(Y,{point:S,picked:v,replayGame:V,setDisplayPlay:a,displayPlay:c,verify:r,replaced:T,setReplaced:H,replace:L,setVerify:l}),Object(m.jsx)(Je,{pick:h,setPick:O,random:k,setRandom:E,verify:r,setVerify:l,picked:v,setPicked:x,score:d,setScore:u,point:S,setPoint:M,replace:L,setReplace:z,replaced:T,setReplaced:H})]})});var Qe=function(){var e=Object(n.useState)({display:0}),t=Object(o.a)(e,2),c=t[0],a=t[1],r=function(e){a({display:e})},l=Object(n.useState)({display:!1}),s=Object(o.a)(l,2),b=s[0],h=s[1],O=Object(n.useState)({picked:!1,bothPicked:!1,round:1,mode:0,replace:!1,needReplace:!1,choosing:!1,point:0}),f=Object(o.a)(O,2),v=f[0],x=f[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"title-front",children:"Paper Rock Scissors V.2"}),Object(m.jsxs)("div",{className:"logo-front",children:[Object(m.jsx)("img",{src:p,alt:"paper"}),Object(m.jsx)("img",{src:d,alt:"rock"}),Object(m.jsx)("img",{src:u,alt:"scissors"})]}),Object(m.jsx)("button",{className:"button-1",onClick:function(){h({mode:0,display:!0}),x(Object(i.a)(Object(i.a)({},v),{},{mode:0}))},children:"Normal mode"}),Object(m.jsx)("button",{className:"button-1",onClick:function(){h({mode:1,display:!0}),x(Object(i.a)(Object(i.a)({},v),{},{mode:1}))},children:"Special mode"}),Object(m.jsx)("button",{className:"button-2",onClick:function(){return r(1)},children:"RULE"}),Object(m.jsx)(j,{display:c,displayRule:r}),Object(m.jsx)(g,{display:c,displayRule:r}),Object(m.jsx)(Ke,{display:c,setDisplay:a,displayPlay:b,setDisplayPlay:h,displayRule:r,verify:v,setVerify:x})]})},Ze=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),r(e),l(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Qe,{})}),document.getElementById("root")),Ze()}},[[16,1,2]]]);
//# sourceMappingURL=main.851dc47c.chunk.js.map