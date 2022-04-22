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

