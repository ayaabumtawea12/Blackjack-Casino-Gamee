let messageEl=document.getElementById('message-el');
let sumEl=document.getElementById('sum-el');
let cardEl=document.getElementById('card-el');
let sum=0;
let hasBlackJack =false;
let isAlive=false;
let message="";
let cards=[];

let player={
name:"Aya",
chips:140,
}
 

let playerEl=document.getElementById('player-el');
playerEl.innerHTML=player.name+" :$"+player.chips;

function getRandomCard(){
   let randomNum=Math.floor(Math.random()*13)+1
   if(randomNum>10){
    return 10;
   }else if(randomNum===1){
    return 11;
   }else{
    return randomNum;
   }

}

function startGame(){
isAlive=true;
let firstCard=getRandomCard();
let secondCard=getRandomCard();
cards=[firstCard,secondCard];
sum=firstCard+secondCard;
renderGame();
}


function renderGame(){
cardEl.innerHTML="card:"

for(let i=0; i<cards.length;i++){
cardEl.innerHTML+=cards[i]+" ";
}

sumEl.innerHTML="Sum:" +sum;

    if(sum <= 20){
        message="Do you want to draw a new card";
    } else if(sum===21){
    message="wohoo! you've got blackjack";
    hasBlackJack=true;
    }else{
        message="you're out of the game";
        isAlive=false;
}
messageEl.innerHTML=message

};

function newCard(){
if(isAlive===true && hasBlackJack===false){ 
let card=getRandomCard();
sum +=card;
cards.push(card);
renderGame()
}

};
