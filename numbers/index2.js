const data_inputs = [40, 1, 3, 4, 20];
const connectors = ['+', '-', '*', '/'];
const all_results = [];

getCombination(data_inputs, 5, []);

function getCombination(inputs, n, results, []) {
    if (n == 1) {
        console.log('end', results);
    }
    for (let i = 0; i < inputs.length; i++) {
        let current = inputs[i];
        if (results.length == 0) {
            results.push([]);
        }
        results.forEach(x => {
            console.log('in the loop', results, x);
            x.push(current);
            const left = [...inputs.slice(0, i), ...inputs.slice(i + 1)];
            getCombination(left, n - 1, results, x);
        });
    }
}
