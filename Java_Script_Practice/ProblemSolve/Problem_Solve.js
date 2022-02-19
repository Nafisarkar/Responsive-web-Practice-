//1. Print all even numbers from 0 – 10

function oneToHundred(){
    for(var i=0;i<100;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
//oneToHundred();
//2.Print a table containing multiplication tables
function multiPlicationTable(){
    for(var i=1;i<=10;i++){
        for(var j=1;j<=10;j++){
            console.log(i+"x"+j+"="+i*j);
        }
    }
}
//multiPlicationTable();
//3. Create a length converter function kilo meter to mile
function kmToMile(km){
    var mile=km*0.621371;
    return mile;
}
let x = kmToMile(10);
//console.log(x);
//4. Calculate the sum of numbers within an array
function sumOfArray(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let y = sumOfArray([1,2,3,4,5]);
//console.log(y);
//5. Create a function that reverses an array
function reverseArray(arr){
    var newArr=[];
    for(var i=arr.length-1;i>=0;i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
let z = reverseArray([1,2,3,4,5]);
//console.log(z);
//6. Sort an array from lowest to highest
function sortArray(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        newArr.push(arr[i]);
    }
    newArr.sort(function(a,b){
        return a-b;
    });
    return newArr;
}
let a = sortArray([1,2,3,4,5]);
//console.log(a);
//7. Create a function that filters out negative numbers
function filterNegative(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>=0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
let b = filterNegative([1,2,3,4,5,-1,-2,-3,-4,-5]);
//console.log(b);
//8. Remove the spaces found in a string
function removeSpaces(str){
    var newStr=str.split(" ").join("");
    return newStr;
}
let c = removeSpaces("Are bhai ki obostha apnar ?");
//console.log(c);
//9.Return a Boolean if a number is divisible by 10
function divisibleByTen(num){
    if(num%10==0){
        return true;
    }
    else{
        return false;
    }
}
let d = divisibleByTen(11);
//console.log(d);
//10. Return the number of vowels in a string
function countVowels(str){
    let vawel = /[aeiou]/gi;
    let count = str.match(vawel);
    return count.length;
}
let e = countVowels("Are bhai ki obostha apnar ?");
//console.log(e);