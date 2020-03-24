const inputs = [40, 1, 3, 4, 20];
const connectors = ['+', '-', '*', '/'];
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

                console.log(counter, current);
                all_results.push(current);
                counter++;

                current.pop();
                current.pop();
            }

            current.pop();
        }

        current.pop();
        console.log('------------');
    }
}

for (let cnt = 0; i < all_results.length; cnt++) {
    const current = all_results[cnt];
}
