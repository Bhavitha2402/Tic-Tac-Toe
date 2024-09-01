let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Resetbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true; 

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
 if(turnO){
     box.innerText="O";
     turnO=false;
 }else{
     box.innerText="X";
     turnO=true;
 }box.disabled=true;
 checkWinner();
   })
});

const disableboxes=()=>{
for(box of boxes){
    box.disabled=true;
}
};

const enableboxes=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }  
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is Player ${winner}`;
    for(pattern of winPatterns){
        if(pos1val===pas2val && pos2val===pos3val){
             
        }
    }
    disableboxes(); 
};

const checkWinner=()=>{
for(pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
     let pos3val=boxes[pattern[2]].innerText;
     if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner is ", pos1val);
            showWinner(pos1val);
        }
     }
}
};

const resetGame=()=>{
    turnO=true;
    enableboxes();
};

resetBtn.addEventListener("click",resetGame()); 





