var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var button = document.querySelector("button");
function add(a, b) {
    return a + b;
}
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
function printResult(result, PrintMode) {
    if (PrintMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    if (PrintMode === OutputMode.ALERT) {
        alert(result);
    }
}
var results = [];
button.addEventListener("click", function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    var resultContainer = {
        res: result,
        print: function () {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
    printResult(results, OutputMode.CONSOLE);
    printResult(results[0].res, OutputMode.ALERT);
});
