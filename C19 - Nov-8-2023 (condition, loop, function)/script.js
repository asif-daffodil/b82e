// cindition

var jibon = 72;
if (jibon > 90) {
    console.log("A+");
}else if(jibon >= 80){
    console.log("A");
}else if(jibon >= 70){
    console.log("A-");
}else if(jibon >= 60){
    console.log("B");
}else if(jibon >= 50){
    console.log("C");
}else if(jibon >= 40){
    console.log("D");
}else if(jibon >= 33){
    console.log("E");
}else{
    console.log("Laddu guddu");
}

// switch case
var date = new Date();
var today = date.getDay();
switch (today) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Not a valid number");
        break;
}

/**
 * loop
 * starting point
 * ending point
 * increament or decreament
 */

// while loop
/* 
var jahid = 0;
while (jahid <= 10) {
    console.log(jahid);
    jahid += 2;
} 
*/

// for loop
/* for (var i = 0; i <= 10; i++) {
    console.log(i);
} */

// var friend = 16;
/* while (friend < 10) {
    console.log(friend);
    friend++;
} */

/* do{
    console.log(friend);
    friend++;
}while (friend < 10); */

for (var i = 0; i <= 20; i += 2) {
   if(i == 10){
       continue;
   } 
   if(i > 15){
        break;
   }
    console.log(i);
}

// function
var sayLoveYou = (p) => {
    return (q) => {
        return p + " " + q;
    }
}


/* var sayLoveYou = function (p, q){
    return p + " " + q;
} */

/* function sayLoveYou(p, q){
    return p + " " + q;
} */


console.log(sayLoveYou("Jahid")("Hasan"));
console.log(sayLoveYou("Sakib All")("Hasan"));