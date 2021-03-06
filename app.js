var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var button = document.querySelector("button");
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.print = function () {
        console.log(this.name);
    };
    return User;
}());
var user = new User("alex", 32);
user.print();
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, premissions) {
        var _this = _super.call(this, name, age) || this;
        _this.premissions = premissions;
        return _this;
    }
    return Admin;
}(User));
//------
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
// type Calculate = { res: number; print: () => void }[];
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
function logAndEcho(val) {
    console.log(val);
    return val;
}
var splited = logAndEcho('hi there!').split(' ');
console.log(splited);
