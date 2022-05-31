const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
let resultsInsert = perf.stop();


console.log('Results for the smallArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);




// Results for the extraLargeArray
// insert 967.1632 ms
// append 3.3556 ms

// Results for the tinyArray
// insert 39.4 μs
// append 86.8 μs

// Results for the smallArray
// insert 49.9 μs
// append 94.7 μs

// Results for the mediumArray
// insert 186.1 μs
// append 206.1 μs

// Results for the largeArray
// insert 8.0699 ms
// append 562.8 μs

// Results for the extraLargeArray
// insert 967.7393 ms
// append 3.4308 ms


// The scale seems to be that the larger array the longer the append time, while inversely the larger the array thet shorter the insert time.