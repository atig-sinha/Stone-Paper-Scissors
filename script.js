const generaterandom=()=>{
    return (Number.parseInt(Math.random()*3))
}
const choices=["stone","paper","scissor"];
const btn = document.querySelectorAll(".btn")
const playerHand = document.querySelector(".player_hand");
const cpuHand = document.querySelector(".cpu_hand");
const hands = document.querySelector(".hands")
const uscore = document.querySelector(".uscore");
const cscore = document.querySelector(".cscore");
const stat = document.querySelector(".status");
const startover =document.querySelector(".startover")
const showresult =document.querySelector(".showresult")
const winlose = document.querySelector(".win-lose")

const playervalues = {
    'stone' : "`<img src=\"assets/Left_Stone.png\" class=\"hand\">`",
    'paper' : "`<img src=\"assets/Left_Paper.png\" class=\"hand\">`",
    'scissor' : "`<img src=\"assets/Left_Scissors.png\" class=\"scissorleft\">`"
}
const cpuvalues = {
    'stone' : "`<img src=\"assets/Right_Stone.png\" class=\"hand\">`",
    'paper' : "`<img src=\"assets/Right_Paper.png\" class=\"hand\">`",
    'scissor' : "`<img src=\"assets/Right_Scissors.png\" class=\"scissorright\">`"
}

btn.forEach((b)=>{
    b.addEventListener("click", ()=>{
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        async function delayedthrow() {
            playerHand.innerHTML="";
            cpuHand.innerHTML="";
            await sleep(100);
            playerHand.innerHTML= playervalues[b.value];
            let gen =choices[generaterandom()];
            cpuHand.innerHTML= cpuvalues[gen];
            getscore(b.value,gen);
            let val=checkwinner();
            if(val!=false){
               await sleep(1500);
               winlose.classList.remove("disp");
               startover.innerHTML=`<button class="againbtn" onclick="location.reload()">Play Again ↻</button>`;
               showresult.innerHTML=val;
            }
        }
          
        delayedthrow();
    });
})

const getscore=(pvalue,cvalue)=>{
    if(pvalue=="stone" && cvalue=="scissor" || pvalue=="paper" && cvalue=="stone" || pvalue=="scissor" && cvalue=="paper"){
        uscore.innerHTML = Number.parseInt(uscore.innerHTML)+1;
        stat.innerHTML= `<h3>You Won this Round !!</h3>`
    }
    else if(cvalue=="stone" && pvalue=="scissor" || cvalue=="paper" && pvalue=="stone" || cvalue=="scissor" && pvalue=="paper"){
        cscore.innerHTML = Number.parseInt(cscore.innerHTML)+1;
        stat.innerHTML= `<h3>CPU Won this Round !!</h3>`
    }else {
        stat.innerHTML= `<h3>Round is a Draw !!</h3>`
    }
}

const checkwinner=()=>{
    let ps= Number.parseInt(uscore.innerHTML);
    let cs= Number.parseInt(cscore.innerHTML);
    if(ps==3){
       btn.forEach((b)=>{
        b.disabled=true;
       })
       return (`<img src=\"assets/you_win.gif\" class=\"result\">`)
    }else if(cs==3){
        btn.forEach((b)=>{
            b.disabled=true;
        })
        return (`<img src=\"assets/you_lose.gif\" class=\"result\">`)
    }else {
        return false;
    }  
}