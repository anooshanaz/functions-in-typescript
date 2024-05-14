//Q1
function sumofthreeno(num1:number,num2:number,num3:number) {
    let x = num1 + num2 + num3
    let y = x / 3;
    console.log(y)
 };
sumofthreeno(2,2,2);
sumofthreeno(4,4,4);
//Q2
function evenodd(num: number) {
    if(num % 2 === 0) {
        console.log(num,"Even number")
    }else{
        console.log(num,"Odd number")
    }
};
evenodd(4);
evenodd(9);
//Q3
function findPercentage(givenno: number, totalno: number) {
    let a = givenno/totalno * 100
    console.log(a);
    if(a >= 95){
    console.log("A+")
    }else if(a >= 70){
        console.log("A")
    }else if(a >= 60){
        console.log("B")
    }else if(a >= 40){
        console.log("C")
    }else if(a >= 35){
        console.log("D")
    }else{
        console.log("Failed")
    }
};
findPercentage(700,800);

//Annonmyous function
let greeting = function() {
    console.log("Hello Javascript")
};
greeting();
//Repeat/Recursive functions
function countdown(anynumber: number): void{
    if(anynumber <= 0){
        console.log("Done")
        return;
    }
    console.log(anynumber)
};
countdown(5)

