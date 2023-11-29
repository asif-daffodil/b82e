var phone = document.getElementById("phone");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
phone.innerHTML = "123-456-7890";

function sb () {
    phone.innerHTML = "So beautiful";
    phone.style.backgroundColor = "red";
}

function se () {
    phone.innerHTML = "So elegant";
    phone.style.backgroundColor = "green";
}

function just () {
    phone.innerHTML = "Just looking like a wow";
    phone.style.backgroundColor = "blue";
}

function mobile () {
    phone.innerHTML = "123-456-7890";
    phone.style.backgroundColor = "black";
}

function namefunc () {
    phone.innerHTML = fname.value + "<br>" + lname.value;
}