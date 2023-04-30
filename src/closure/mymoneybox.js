/* function moneyBox(coins){
   let saveCoins=0
     saveCoins+=coins

   console.log(`MoneyBox: $${saveCoins}`)
 
 }


moneyBox(5)
moneyBox(5) */


function moneyBox(){
  let saveCoins=0
  //creando una closure
  function countCoins(coins){
    saveCoins+=coins
    console.log(`MoneyBox: $${saveCoins}`)
  }
return countCoins;
}

const myMoneyBox=moneyBox()

myMoneyBox(5)
myMoneyBox(8)
myMoneyBox(100)


const moneyBoxAnna=moneyBox()
moneyBoxAnna(8)
moneyBoxAnna(100)
