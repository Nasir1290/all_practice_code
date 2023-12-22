// function canPay(array,number){
//     if(array.length === 0){
//         return "You don't have enough money!!!!!!!"
//     }
//     let totalTaka=0;
//     for (let i of array){
//         totalTaka+=i;
//     }
//     return totalTaka > number;
// }

// console.log(canPay([1,2,5],10));
// console.log(canPay([1,5,5],10));
// console.log(canPay([],10));

function fibonacci(n) {
    if(n==0){return 0}
    else if (n == 1) { return 1 }
    else { return fibonacci(n - 1) + fibonacci(n - 2) }
}

console.log(fibonacci(6));