//expected+reult 4 * 20 - 40 -1 + 3;
const inputs = [40, 1, 3, 4, 20];

const plus = (x, y) => x + y;
const minus = (x, y) => x - y;
const multi = (x, y) => x * y;
const divide = (x, y) => x / y;
const connectors = [plus, minus, multi, divide];
const formular = ["+", "-", "*", "/"];

const total = inputs.length;
const all_results = [];

let counter = 1;
let inputsI = [...inputs];

for (let i = 0; i < total; i++) {
  let current = [];

  current.push(inputsI[i]);
  let inputsJ = [...inputsI.slice(0, i), ...inputsI.slice(i + 1)];

  for (let j = 0; j < total - 1; j++) {
    current.push(inputsJ[j]);
    let inputsK = [...inputsJ.slice(0, j), ...inputsJ.slice(j + 1)];

    for (let k = 0; k < total - 2; k++) {
      current.push(inputsK[k]);
      let inputsL = [...inputsK.slice(0, k), ...inputsK.slice(k + 1)];

      for (let l = 0; l < total - 3; l++) {
        current.push(inputsL[l]);

        let inputsM = [...inputsL.slice(0, l), ...inputsL.slice(l + 1)];
        current.push(inputsM[0]);

        // console.log(counter, current);
        checkResult(current);

        counter++;

        current.pop();
        current.pop();
      }

      current.pop();
    }

    current.pop();
    console.log("------------");
  }
}

function checkResult(current) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        for (let l = 0; l < 4; l++) {
          let result1 = connectors[i](current[0], current[1]);
          result1 = connectors[j](result1, current[2]);
          result1 = connectors[k](result1, current[3]);
          result1 = connectors[l](result1, current[4]);
          if (result1 === 42) {
            showCalcuation(current, i, j, k, l);
          }
        }
      }
    }
  }
}

function showCalcuation(current, i, j, k, l) {
  console.log(
    `${current[0]} ${formular[i]} ${current[1]} ${formular[j]} ${current[2]} ${formular[k]} ${current[3]} ${formular[l]} ${current[4]}`
  );
}
