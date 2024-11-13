let amount=+prompt("enter your bill amount");
if(amount<50){
   console.log("NO DISCOUNT");
}
else if (amount<=100){
    console.log("5% DISCOUNT");
 }
 else if (amount<=200){
    console.log("10% DISCOUNT");
 }
 else{
    console.log("15% DISCOUNT");
 }