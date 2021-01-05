const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById("num2");
const button = document.querySelector("button");

// class User {
//   name: string;
//   private age: number;
//   constructor(name: string, age: number) {
//     this.name = name,
//     this.age = age;
//   }
// }

// const user = new User('Alex', 32);

interface Greetable {
  name: string;
}

interface Prinable {
  print(): void;
}

class User implements Greetable, Prinable {
  constructor(public name: string, private age: number) {}
  print() {
    console.log(this.name);
  }
}

const user = new User("alex", 32);

user.print();

class Admin extends User {
  constructor(name: string, age: number, private premissions: string[]) {
    super(name, age);
  }
}

//------

function add(a: number, b: number) {
  return a + b;
}

enum OutputMode {
  CONSOLE,
  ALERT,
}

type PrintMode1 = "console" | "alert";

function printResult(result, PrintMode: OutputMode) {
  if (PrintMode === OutputMode.CONSOLE) {
    console.log(result);
  }
  if (PrintMode === OutputMode.ALERT) {
    alert(result);
  }
}

// const result = add(5, 3);
// let isDone = false;

// printResult(result);

interface CalculationContainer {
  res: number;
  print(): void;
}

type Calculate = CalculationContainer[];

// type Calculate = { res: number; print: () => void }[];

let results: Array<CalculationContainer> = [];

button.addEventListener("click", () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    },
  };
  results.push(resultContainer);
  printResult(results, OutputMode.CONSOLE);
  printResult(results[0].res, OutputMode.ALERT);
});

function logAndEcho<T>(val: T) {
  console.log(val);
  return val;
}

const splited = logAndEcho<string>('hi there!').split(' ')

console.log(splited)