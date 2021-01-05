const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById("num2");
const button = document.querySelector("button");

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

type Calculate = { res: number; print: () => void }[];

let results: Calculate = [];

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
