function oddEvenReporter(number){ 

    let remain = number%2;

    remain == 0 ? console.log(`${number} is even` ) : console.log(`${number} is odd`)

}

let flag = true
let number;
while(flag){

    number = prompt("Please enter a number between 0 - 20 ");
    if (number == null || number == "") {
        alert("last else");
    }else if(number>=0 && number <=20){
        flag=false;
        oddEvenReporter(number);
        console.log(number);
    }else if(number<0 || number>20){
        console.log("Number must be between 0 - 20");
        console.log(number);
    }else if (isNaN(number)){
        console.log("this is not a number");
    }

}


    
//   <-------------------------->

//   function getNumber(x) {
//     var x = prompt(`Please enter a number between 0 and 20`);

//     if (isNaN(x)) {
//         alert("This value is not number");
//         getNumber(x);
//     } else {
//         reportNumber(x);
//     }
// };

// function reportNumber(x) {
//     if (x < 0 || x > 20) {
//         alert("This value is not between 0 and 20");
//         getNumber(x);
//     } else if (x % 2 === 0) {
//         alert(x + " is even");
//     } else {
//         alert(x + " is odd");
//     }
// }
// getNumber();

// <-------------------------->








    
    // else if (typeof number == 'string'){
    //     console.log("Input must be number");
    //     console.log(number)
    // }


    // else if(isNaN(number) || typeof number !== 'number' ) {

    //     console.log("this is not a number")

    // }




    // else if(!isNaN(number) && typeof number === 'number' ) {
    //     console.log("Please enter a number between 0 - 20 ")
    //     console.log("I am inside last else")
    //     console.log(number)

    //     // if(!isNaN(val) && typeof val === 'number' )
    //     // console.log("Input can not be empty")
    //     // isNaN(number.NaN)
    // }




