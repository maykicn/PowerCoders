function calculate(){

    const birthdate = prompt("Enter the year of birth")
    let currentYear = prompt("Enter the current the year")

    let ageOptionOne = currentYear - birthdate;
    let ageOptionTwo = ageOptionOne-1; 

    console.log(`I will be either ${ageOptionTwo} or ${ageOptionOne} in ${currentYear}`)
}



calculate()