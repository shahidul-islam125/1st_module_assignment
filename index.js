/*
Title: Assignment Module-01
Author: SHAHIDUL ISLAM
Date: 28 Jul 23
*/

/*----------------------1st problem--------------------*/
//Topic: Online store discount calculator(If-else statement)
function calculateDiscount(purchaseAmount){
    let discountedAmount = 0
    if(purchaseAmount < 50){
        console.log("No discount is applied")
    }else if(purchaseAmount >= 50 && purchaseAmount <= 100){
        discountedAmount = purchaseAmount * (5/100)
        console.log(`the discounted amount is $${discountedAmount} & total amount $${purchaseAmount} + $${discountedAmount}`)

    }else if(purchaseAmount >= 100 && purchaseAmount <= 200){
        discountedAmount = purchaseAmount * (10/100)
        console.log(`the discounted amount is $${discountedAmount} & total amount $${purchaseAmount} + $${discountedAmount}`)
    }else{
        discountedAmount = purchaseAmount * (15/100)
        console.log(`the discounted amount is $${discountedAmount} & total amount $${purchaseAmount} + $${discountedAmount}`)
    }
}
calculateDiscount(100)
/*-------------------------X---------------------------*/

/*----------------------2nd problem--------------------*/
//Topic: Filter even numbers

function isEven(arr){
let evenNum = arr.filter((num) => {
    if(num % 2 == 0){
        return num;
    }
})
console.log(evenNum)
}

isEven([12, 34, 45, 23, 6, 78, 54, 90])

/*-------------------------X---------------------------*/


/*----------------------3rd problem--------------------*/
//Topic: Multiplication Table Generator
function multiply(num){
    let result;
    for(let i = 1; i <= 10; i++){
        result = i * num;
        console.log(`${i} x ${num} = ${result}`)
    }
}
multiply(5)
/*-------------------------X---------------------------*/


/*----------------------4th problem--------------------*/
//Topic: Grade Calculator (JavaScript Switch Case)
function calculateGrade(mark){
   switch(true){
    case mark >= 90:
        console.log('A')
        break;
    case mark >= 80 && mark <= 89:
        console.log('B')
        break;
    case mark >= 70 && mark <= 79:
        console.log('C')
        break;
    case mark >= 60 && mark <= 69:
        console.log('D')
        break;   
    default:
        console.log('F') 
   }
}
calculateGrade(67)
/*-------------------------X---------------------------*/