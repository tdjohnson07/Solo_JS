
var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];
// 1) Iterate through the stringList and produce the following output:

//Months listed are March, April, May.
console.log("Months listed are", stringList.join(", "));

//2) Console log the last element in numList using .length to find the last index

console.log(numList[numList.length-1]);
//3) Iterate through numList, output all numbers as single String
console.log(numList.toString());
//4) Iterate through numList and add all of the elements together and console log the total
var total=0;
for( var i=0; i<numList.length; i++){
  total += numList[i];
}
console.log(total);
//5) If the second element in boolList is true,
//log the sum of the first and last elements in numList.
//Otherwise multiply the second element in numList by itself and log the result.
if(boolList[1]===true){
  console.log(numList[0]+numList[numList.length-1]);
}
else{
  console.log(numList[1]*numList[1]);
}
//6) Iterate through boolList, if the value is true console log
//the equivelent index in numList.
for(var i=0; i<boolList.length; i++){
  if(boolList[i]===true){
    console.log(numList[i]);
  }
}
//7) Combine all three arrays into one array, and log the newly created are in reverse.
var allArray=[];
for (var i=0; i<stringList.length; i++){
  allArray.push(stringList[i]);
}
for (var i=0; i<numList.length; i++){
  allArray.push(numList[i]);
}
for (var i=0; i<boolList.length; i++){
  allArray.push(boolList[i]);
}
console.log(allArray.reverse());
