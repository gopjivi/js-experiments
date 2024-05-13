let myScores = [92, 98, 84, 76, 89, 99, 100]; 
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

let myaverage=getAverage(myScores);
console.log("My Average Score is :"+ myaverage.toFixed(2));

let youraverage=getAverage(yourScores);
console.log("Your Average Score is :"+ youraverage.toFixed(2));



function getAverage(scores)
{
    let sum = 0;
    let average=0;

   let scorelength = scores.length;
   for(let i = 0; i < scorelength; i++) {
      sum += scores[i];
   }
   average=sum/scorelength;
   return average;
}

