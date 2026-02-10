// Two Sum
// input: numbers = [2, 8, 3, 9, 7]
// target: 11
// output = [0,4]

// pseudo code:
// for i = 0; i < numbers.length; i++
// for j = 0; j < numbers.length; j++
// answer = numbers[i] + numbers[j]
// if answer == target
// return [i, j]

const numbers = [2, 8, 3, 9, 7];
const target = 9;
for (i = 0; i < numbers.length; i++) {
    for (j = 0; j < numbers.length; j++) {
        let answer = numbers[i] + numbers[j];
        if (answer === target) {
            console.log([i, j]);
            return [i, j];
        }
    }
}

// j = i + 1; best case