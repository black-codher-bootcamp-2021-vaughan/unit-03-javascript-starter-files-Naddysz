//create function    
    
function getGrade(total) {
    if(total > 80 && total <= 90 ) 
        grade = "A";

    if(total > 70 && total <= 80) 
        grade = "B";
    
    if(total > 60 && total <= 70) 
        grade = "C";
    
    if(total > 50 && total <= 60) 
        grade = "D";
    
    if(total > 40 && total <= 50) 
        grade = "E";
    
    if(total > 30 && total <= 40) 
        grade = "F";
    
    if(total < 30) 
        grade = "Fail";
  
        return grade;
}

//call function\

console.log(getGrade(65)); 