var operation;
var value1;
var value2;
var result;
function calculator (operation,value1,value2){
    if (operation==='+'){
        result=value1+value2;
        
    } else if(operation==='-'){
        result= value1-value2;
    } else if(operation==='*'){
        result=value1*value2;
    } else {
        result=value1/value2;
    }
    console.log(result)
}


calculator('+', 5, 9) // 14
calculator('-', 7, 3) // 4
calculator('*', 5, 5) // 25
calculator('/', 9, 3) // 3