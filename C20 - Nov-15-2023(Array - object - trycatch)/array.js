var citiesName = ["Karachi", "Lahore", "Islamabad", "Dilli", "New York",1,6]; 
// console.log(citiesName.length);
for (let i = 0; i < citiesName.length; i++) {
    console.log(citiesName[i]);
}

var personNAmes = ["Ali", "Ahmed", "Asad", "Kashif", "Kamran"];
personNAmes.forEach(function (val){
    console.log(val);
});

var ages = [12, 34, 56, 78, 90, 23, 45, 67, 89, 10];

var jadu = ages.filter(ages => ages > 50).map(function (val){
    return val * 2;
});
// console.log(jadu);

var countries = ["Bangladesh", "Pakistan", "India", "China", "Iran", "Iraq", "Afghanistan"];

countries.push("Sri Lanka", "Nepal");
// console.log(countries);

countries.pop();
// console.log(countries);

countries.unshift("Bhutan", "Maldives");
// console.log(countries);

countries.shift();
// console.log(countries);

console.log(countries.indexOf("China"));

