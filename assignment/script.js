
//Task2  You are given an array of numbers. Write a function that calculates the total sum and the average of the numbers using the reduce method.

function calcAvgAndSum(numsArr){
    const sum = numsArr.reduce((acc,num) => acc+num,0); // using reduce method to iterate about array elements and add to acc then store it in the sum
    
    const numsLength= numsArr.length
    
    const avg= sum/numsLength // calculate the average from the summation and divide it by array length (number of array elements)
    
    return {sum,avg}; // return the result
}





//Task3 You are given an array of strings, some of which may be duplicates. Write a function that removes all duplicates from the array in constant time complexity and returns the array with unique values.  
//create function that accept an array and return a unique version from it  
function remDuplicates(arrString){

    const setString= new Set(arrString); // i convert the array to set to remove the dubplicates
    
    let unique= [... setString] ; //  then i use spread operator to convert it th array to enssure it will remain in the same format 
    
    return unique; //return the new uniqe array 
}

