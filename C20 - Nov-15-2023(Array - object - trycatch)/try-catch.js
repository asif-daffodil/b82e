var org = "Daffodil"; 


try {
    console.log(org);
}catch {
    console.log("Something went worng");
}

// Throwing custom errors

// var jahidul = false;
// try{
//     if(!jahidul){
//         throw new Error("Jahid vaat khay na.");
//     }
//     console.log("Jhis is a good buy");
// }catch(err){
//     console.log(err.message);
// }

// Handling exceptions
var jahidul = false;
try{
    if(!jahidul){
        throw new Error("Jahid vaat khay na.");
    }
    console.log("Jhis is a good buy");
}
catch(err){
    console.log(err.message);
}
finally{
    console.log("I will always run");
}

var addTwoNumbers = function(l1, l2) {
    // array to string
    let num1 = l1.join(',');
    let num2 = l2.join(',');
    // reverce the string
    num1 = num1.split('').reverse().join('');
    num2 = num2.split('').reverse().join('');
    // string to number
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    // sum the number
    let sum = num1 + num2;
    // convert to string
    sum = sum.toString();
    // split the string
    sum = sum.split('');
    // reverse the string
    sum = sum.reverse();

    return sum;
};

console.log(addTwoNumbers([2,4,3],[5,6,4]));