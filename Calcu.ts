#! /usr/bin/env node


import inquirer from "inquirer";
import {sum,Sub} from "./Function.js";
import {Multi,Divi} from "./function2.js";
import showBanner from "node-banner";
import gradient from "gradient-string";
import  chalk from "chalk";


   let ary=[ {
     name: "num1",
     type: "number",
     message: chalk.bgBlackBright ("Enter 1st number"),
     validate:(input:number)=>{
      if(isNaN(input)){
        return  "Please Enter a Number"
      }return true
     }
},
{
    name: "num2",
    type: "number",
    message: chalk.bgBlackBright("Enter 2nd number"),

    validate:(input:number)=>{
        if(isNaN(input)){
            return "Please Enter a Number"
        }return true
     }

},

 {
    name: "Operation",
     type: "list",
     choices:["Addition", "Subtraction", "Multiplication", "Division"],
     message: gradient.rainbow("Enter your Operation: "),

   
    },
];

let fun=[
    {
    name: "again",
    type: "confirm",
    message: "Do you want to calculate again"
}
];

(async () => {
    await showBanner('Calculator', 'It can perform +,_,*, and /' ,"red", "blue");
})();

async function Calculator(){
let condition=true
while(condition){
    let answers= await inquirer.prompt(ary)
    console.log(answers)

if(answers.Operation==="Addition")
{console.log("The sum of two numbers:",sum(answers.num1,answers.num2))}

else if(answers.Operation==="Subtraction")
{console.log("The difference of two numbers", Sub(answers.num1,answers.num2))}
else if (answers.Operation==="Multiplication")
{console.log("Multiplication", Multi(answers.num1,answers.num2))}
else if(answers.Operation==="Division")
{console.log("Division",Divi(answers.num1,answers.num2))}

let {again}=await inquirer.prompt(fun)
condition=again;
};
};

setTimeout(()=>{Calculator();},250)
