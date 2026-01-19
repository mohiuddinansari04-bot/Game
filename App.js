let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg")


let turnO =true; //playerX , playerO;

          // saving all the winning values in the array;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
      
const resetgame= ()=>{
  turnO=true;
  anableboxes();
  msgcontainer.classList.add("hide");

}
boxes.forEach((box) => {
  box.addEventListener("click",() =>{
      console.log("box was clicked");
      if(turnO === true) {
        box.innerText="O";
        box.style.color="red";
        turnO = false;
      }
      else{
        box.innerText ="X";
        box.style.color="green";
        turnO = true;
      }
      box.disabled = true; 

      checkWinner();

  })
  
});
const disabledboxes =() =>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const anableboxes =() =>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showWinner = (winner) =>{
  msg.innerText= `congratulation ,winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledboxes( )
  // msg.style.color= winner=="o" ,"x" ? "green": "red";
}

const checkWinner = () => {
  for(let pattern of winPatterns){
   
     let pos1Val= boxes[pattern[0]].innerText;
     let pos2Val= boxes[pattern[1]].innerText;
     let pos3Val= boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" &&pos3Val != ""){
      if(pos1Val==pos2Val&& pos2Val==pos3Val){
        console.log("winner", pos1Val);
        showWinner(pos1Val);
        
      }
    }
  }
} ;

newGamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
