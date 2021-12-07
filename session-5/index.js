//create function    
    
function getGrade(total) {
    switch(true) {
    case total > 80 && total <= 90:
        return "A";
        break;

    case total > 70 && total <= 80:
        return "B";
        break;

    case total > 60 && total <= 70: 
        return "C";
        break;
    
    case total > 50 && total <= 60:
        return "D";
        break;
    
    case total > 40 && total <= 50:
        return "E";
        break;
    
    case total > 30 && total <= 40:
        return "F";
        break;
    
     default:
        return "Fail";
        break;
    }
}

//call function\

console.log(getGrade(65)); 
console.log(getGrade(91)); 