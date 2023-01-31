
 let cardsEl = document.querySelector("#cards-el")
 let sumEl = document.getElementById("sum-el")
 let messageEl = document.getElementById("message-el")
 let firstCard = getRandomCard()
 let secondCard = getRandomCard()
 let hasBlackJack = false
 let isAlive = true
 let message = ""
 let cards = []
 let sum = 0
 
let player = {
   name:"Ilyas",
   chips:145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

console.log(cards)

function getRandomCard(){
   let randomN=Math.floor(Math.random()*13)+1

   if(randomN>10) {
      return 10
   }
   else if(randomN===1){
      return 11
   }else {
      return randomN
   }
}


 function startGame(){
      let firstCard = getRandomCard()
      let secondCard = getRandomCard()
      cards.push(firstCard,secondCard)
      sum = firstCard + secondCard
    renderGame()
 }




 function renderGame(){
    cardsEl.textContent="Cards: "
   for (let i = 0; i < cards.length;i++) {
      cardsEl.textContent+=cards[i]+" "
   }
    sumEl.textContent= "Sum: "+sum



 if(sum<=20){
 message="do u want to draw a new card?"
 }else if (sum===21){
   message="congratz u have got blackJack"
    hasBlackJack = true
 }else{
    message="u are out of the game!"
    isAlive = false
}
messageEl.textContent=message
console.log(message)
 }




 function newcard(){
   if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
   }
   
 }
