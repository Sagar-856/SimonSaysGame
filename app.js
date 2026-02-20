let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;
let h4 = document.querySelector("h4");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started = true;


        levelUp();

    }
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300);
}
function levelUp(){
    userSeq=[];
    level++;
    h4.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random()*4);
    let randomColor= btns[randomIdx];
    let btn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor)
    console.log(gameSeq)
    gameFlash(btn);
}
function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        levelUp();
       }
    }else {
       h4.innerHTML = `Game over ! press any key start`;
       reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor)
    checkAns(userSeq.length-1);

}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
