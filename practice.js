function canPay(array,number){
    if(array.length === 0){
        return "You don't have enough money!!!!!!!"
    }
    let totalTaka=0;
    for (let i of array){
        totalTaka+=i;
    }
    return totalTaka > number;
}

console.log(canPay([1,2,5],10));
console.log(canPay([1,5,5],10));
console.log(canPay([],10));