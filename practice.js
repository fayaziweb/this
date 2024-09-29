//Find all the odd numbers from 61 to 100.

const oddNumbers = [];

for (let i = 61; i <= 100; i++) {
    if (i % 2 !== 0) {
        oddNumbers.push(i);
    }
}

//console.log(oddNumbers);

//Find all the even numbers from 78 to 98.

const evenNumbers =[];

for(let i = 78; i<=98; i++){
    if(i%2 === 0){
        evenNumbers.push(i);
    }
}
//console.log(evenNumbers);

//Display sum of all the odd numbers from 81 to 131.\
let sum =0;

for(let i = 81; i<=131; i++){
    if(i%2 !== 0){
        sum +=i;
    }
}
//console.log(sum);

//Display sum of all the even numbers from 206 to 311.

let summ =0;

for(let i =206; i<=311; i++){
    if(i%2 ===0){
        summ +=i;
    }
}
//console.log(summ);

// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

const num =5;
const length=10;

for(let i =1; i<=length; i++){
    const result = num * i;
    //console.log(result);
}

// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

const massage ="I will invest at least 6 hrs every single day for nest 60 days!";
const massageRepeat = 60;

for( let i =0; i < massageRepeat; i++){
   // console.log(massage);
   //bhai aita kano run hocca na akto bolban please
    
}


// Write a loop 1 to 200. Use break to exit the loop once you find 100.

for (let i = 1; i <= 200; i++) {
    if (i === 100) {
        break; 
    }   
    console.log(i)
}
