//create function
let getGrade = function(int score) { 
    let grade = "";
    if(score > 80 && score <= 90 ) { 
        grade = "A";
    }
    else if(score > 70 && score <= 80) {
        grade = "B";
    }
    else if(score > 60 && score <= 70) {
        grade = "C";
    }
    else if(score > 50 && score <= 60) {
        grade = "D";
    }
    else if(score > 40 && score <= 50) {
        grade = "E";
    }
    else if(score > 30 && score <= 40) {
        grade = "F";
    }
    else(score < 30) {
        grade = "Fail";
    }
    
    return grade;
    }
    


//call function\

console.log(getGrade(65)); 