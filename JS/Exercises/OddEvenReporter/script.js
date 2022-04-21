function oddEvenReporter(number){

    let flag = true    

    let remain = number%2;

    remain == 0 ? alert(`${number} is even` ) : alert(`${number} is odd`)

}

let flag = true
let number;
while(flag){

    number = prompt("Please enter a number between 0 - 20 ")
    if(number>=0 && number <=20){
        flag=false;
        oddEvenReporter(number);
    }else if(number<0 || number>20){
        alert("Number must be between 0 - 20");
    }else if (typeof number == 'string'){
        alert("Input must be Strring");
    }
    // else if (number == ""){
    //     alert("Input can not be empty")
    // }

}   


