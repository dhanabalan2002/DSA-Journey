// Two Sum
// input: numbers = [2, 8, 3, 9, 7]
// target: 9
// output = [0,4]

// pseudo code:
// for i = 0; i < numbers.length; i++
// for j = 0; j < numbers.length; j++
// answer = numbers[i] + numbers[j]
// if answer == target
// return [i, j]

const numbers = [2, 8, 3, 9, 7];
const target = 9;

const twoSum = (arr, target) => {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            let answer = arr[i] + arr[j];
            if (answer === target) {
                console.log([i, j]);
                return [i, j];
            }
        }
    }
}

// j = i + 1; best case

const twoSumHashMap = (arr, target) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const needed = target - arr[i];
        if (map.has(needed)) {
            console.log([map.get(needed), i]);
            return [map.get(needed), i];
        }
        map.set(arr[i], i);
    }
}

const map = {
    2: 0,
    8: 1,
    3: 2,
    9: 3,
    // 7: 4
}

twoSum(numbers,target) //
twoSumHashMap(numbers,target)

// | Method | Time | Space |
// | ----------- | ----- | ----- |
// | Brute Force | O(n²) | O(1) |
// | HashMap | O(n) | O(n) |