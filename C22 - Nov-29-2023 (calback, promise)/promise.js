// create promnise
const promise = new Promise((resolve, reject) => {
    var jahid = false;
    if (jahid) {
        resolve('Jahid gaan gaite pare');
    } else {
        reject(new Error('Jahid gaan gaite pare na'));
    }
});

promise.then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err.message);
});

function func1() {
    return new Promise((resolve, reject) => {
        resolve("Task 1");
    });
}

function func2() {
    return new Promise((resolve, reject) => {
        resolve("Task 2");
    });
}

function func3() {
    return new Promise((resolve, reject) => {
        resolve("Task 3");
    });
}

function func4() {
    return new Promise((resolve, reject) => {
        resolve("Task 4");
    });
}

function func5() {
    return new Promise((resolve, reject) => {
        resolve("Task 5");
    });
}

func1().then(function (res) {
    console.log(res);
    return func2();
}).then(function (res) {
    console.log(res);
    return func3();
}).then(function (res) {
    console.log(res);
    return func4();
}).then(function (res) {
    console.log(res);
    return func5();
}).then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err.message);
});