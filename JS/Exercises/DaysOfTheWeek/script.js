function dayInSpain(){

    let day = prompt("Please enter day with uppercase that you want to translate to spanish")

    switch(day){

        case "MONDAY":
            console.log("LUNES");
            break;
        case "TUESDAY":
            console.log("MARTES");
            break;
        case "WEDNESDAY":
            console.log("MIÉRCOLES");
            break;
        case "THURSDAY":
            console.log("JUEVE");
            break;
        case "FRIDAY":
            console.log("VIERNES");
            break;
        case "SATURDAY":
            console.log("SÁBADO");
            break;
        case "SUNDAY":
            console.log("DOMINGO");
            break;
        default:
            console.log("Invalid input!!! The day must be in English and uppercase ")

    }


}

dayInSpain();