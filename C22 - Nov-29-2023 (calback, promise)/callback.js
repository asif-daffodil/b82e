function selfPower(num1, num2) {
    return Math.pow(num1, num2);
}

function highOrderFunction(int1, int2, callback) {
    return callback(int1, int2);
}

console.log(highOrderFunction(5, 2, selfPower));

function func1(cb) {
    console.log("Task 1");
    cb();
}

function func2(cb) {
    setTimeout(function () {
        console.log("Task 2");
        cb();
    }, 1000);
}

function func3(cb) {
    console.log("Task 3");
    cb();
}

function func4(cb) {
    console.log("Task 4");
    cb();
}

function func5() {
    console.log("Task 5");
}

func1(function () {
    func2(function () {
        func3(function () {
            func4(function () {
                func5();
            });
        });
    });
});




