'use strict';
const ps=require('prompt-sync');
const prompt = ps();



function convertLength(){
    let repeat = 0;
    do{
    console.log('\n Enter your choice \n 1. meter to centimeter \n 2. centimeter to meter \n 3.exit');
    let choice = Number(prompt("Enter your choice "));
    let input = Number(prompt('Enter your value to convert : '));
    switch(choice){
        case 1:
            console.log(input + ' meter ' + (input * 100) + ' centimeter');
            break;
        case 2:
            console.log(input + ' centimeter ' + (input / 100) + ' meter');
            break;
        case 3:
            repeat = 1;
            break;
        default:
            console.log('invalid choice');
       }
    }while(repeat == 0)
}

function convertTemprature(){
    let repeat = 0
    do{
    console.log('\nEnter your choice \n1.Fahrentheit to Celsius \n2.Celsius to Fahrentheit \n3. Exit')
    let choice = Number(prompt('Enter your choice '));
    let input = Number(prompt('enter a number to convert '));
    switch(choice){
        case 1:
            console.log(input + ' F ' + ((input - 32) * (5/9)) + ' C');
            break;
        case 2:
            console.log(input + ' C ' + ((input * 9/5) + 32) + ' F');  
            break;
        case 3:
            repeat = 1;
            break;
        default:
            console.log('invalid choice');
        }
    }while(repeat == 0)
}





let i = 0;
do{ 
console.log("Enter your choice \n1. Length \n2. Temprature \n3. Exit")
let choice = Number(prompt('enter your chice  '))
switch(choice){
    case 1:
        convertLength();
        break;
    case 2:
        convertTemprature();
        break;
    case 3:
        i = 1;
        break;
    default:
        console.log('Invalid choice')
}
}while(i == 0)
