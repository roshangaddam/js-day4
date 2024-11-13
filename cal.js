let a=+prompt("enter number");
let b=+prompt("enter number");
let c=prompt("enter operator");
switch(c){
    case "+":
    console.log(a+b);
    break;

    case "-":
    console.log(a-b);
    break;

    case "*":
    console.log(a*b);
    break;

    case "/":
    console.log(a/b);
     break;

     case "%":
    console.log(a%b);
    break; 

    case "++":
    console.log(++a);
    break; 

    case "--":
    console.log(--a);
    break; 

    case "**":
    console.log(a**2);
    break; 

    default:console.log('not arithmetic operator');
}