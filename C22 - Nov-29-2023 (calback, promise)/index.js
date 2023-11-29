function func1() {
  console.log("Task 1");
}

function func2() {
    setTimeout(function () {
        console.log("Task 2");
    }, 1000);
}

function func3() {
    console.log("Task 3");
}

func2();
func1();
func3();
