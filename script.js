//1. Creata a variable to store your name, age and nationality. Combine them into a sentence that introduces you.
const myName = "Oluwafemi Akinlotan";
const age = 27;
const nationality = "Nigerian"
console.log(`My name is ${myName}, I am ${age} years old and I am a ${nationality}`);

//2. 
const lyrics = "We Made Love More Than Memories";
console.log(lyrics.toUpperCase());
console.log(lyrics.toLowerCase());

//3.Method--1
const verse = ["He", "completed", "the", "task", "on", "time", "amd", "exceeded", "expectations"];
console.log(verse.reverse());

//method--2
// const verse1 = [];
// const reverse = function(word){
//       for(let i = word.length - 1; i >= 0; i--){//5,4,3,2,1,0
//         verse1.push(word[i])
//       }
// }
// reverse(verse);
// console.log(verse1);

//4.
const rice = 3000;
const beans = 4000;
const bread = 1000;

const total = rice + beans + bread;
console.log(`I bought rice, beans and bread for a total: ${total}`);

//5.
const average = [21, 10, 15, 11, 4];
const totalAverage = (average[0] + average[1] + average[2] + average[3] + average[4]) / 5
console.log(`The average of the five number is ${totalAverage}`);
// const totals = function(sum){
//       let num = 0;
//       for(let i = 0; i < sum.length; i++){
//          num += sum[i];
//       }
//       const average = num / sum.length;
//       console.log(`The average of the five number is ${average}`);
// }
// totals(average);

//6.
//Array created for 5 favourite
const favouriteFood = ["Rice", "Beans", "Plantain", "Yam", "Potato"];
//display first item
console.log(favouriteFood.pop());
//display last item
console.log(favouriteFood.shift());
//7.
//add new food to the beginning of the list
favouriteFood.push("Cereals");
//add new food at the end of list
favouriteFood.unshift("Corn");
console.log(favouriteFood);

//8.
const jssOne = ["Ife", "Femi", "Faith", "Segun", "Tolu", "Amanda", "Akin", "Ayo", "Debo", "Tina"]
const jssTwo = ["Edith", "Sope", "Emma", "Ronke", "Cynthia", "ID", "Gbemi", "Wole", "Constant", "Oke"];
const jssThree = ["Rice", "Saka", "Arteta", "Micheal", "Mbappe", "Seun", "Dunni", "Bola", "Bolu", "Tife"];