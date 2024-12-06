// 1 уровень сложности: Составить блок схему следующей задачи:

// Имея два отсортированных массива размера m и n соответственно, 
// вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.


// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256


// Решите задачу: Расставьте в алфавитном порядке буквы. Разрешается использование техники Разделяй и властвуй. Полученные данные напечатайте.
// 👉👉👉  На вход строка: "poiuytrewqlkjhgfdsamnbvcxz"
// На выходе должно быть: ABCDEFGHIJKLMNOPQRSTUVWXYZ (с большой буквы)

// Task 1

let n = [100, 112, 256, 349, 770];

let m = [72, 86, 113, 119, 265, 445, 892];

let l = n.concat(m);
l.sort((a, b) => a - b);

console.log("Массив : " + l)

function findEl(arr, k) {
    if (k > 0 && k <= arr.length) {
        console.log("k = " + k)
        return `Вывод : ${arr[k - 1]}`;
    }
    
}

console.log(findEl(l, 7))

// Task 2

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function sortString(input) {
    let charArray = input.split('');
    let sortedArray = mergeSort(charArray);

    return sortedArray.join('').toUpperCase();
}

let inputString = "poiuytrewqlkjhgfdsamnbvcxz";
console.log(sortString(inputString));





