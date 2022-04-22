// for (let index = 0; index <= 20; index++) {
    
//     index%2 === 0 ? console.log(`${index} is even`) : console.log(`${index} is odd`)
    
// }

let array = [];
for (let index = 0; index <= 20; index++) {
    array.push(index);
    
}

array.forEach(index => {
    index%2 === 0 ? console.log(`${index} is even`) : console.log(`${index} is odd`)
});

function oddEvenV1(index){

    index%2 === 0 ? console.log(`${index} is even`) : console.log(`${index} is odd`);
}

oddEvenV2 = (index) =>  index%2 === 0 ? console.log(`${index} is even`) : console.log(`${index} is odd`);

oddEvenV2(10);
oddEvenV1(20);

sum = (num1=0,num2=0,num3=0,...arguments) => {
    console.log(arguments)
    return num1+num2+num3;
}
sum2 = (num1=0,num2=0,num3=0,...deneme) => {
    console.log(deneme)
    return num1+num2+num3;
}

console.log('sum '+sum(1,2,3,4,5,6,7))
console.log('sum2 '+sum2(1,2,3,4,5,6,7))


// let result = sum(1,2,3,5,6);
// // console.log('tanimlanmamis paramere icin 'sum().array[4])
// console.log(`result ${result}`);
// result = sum(result,3,4)

// console.log(`plus result ${result}`)

// console.log(100)


