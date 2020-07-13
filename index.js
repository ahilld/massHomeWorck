"use strict";

/**
 * @description - Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrRes = arr1.concat(arr2);

console.log(arrRes);

/**
 * @description - Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
 *
 */

const array = [1, 2, 3]
const reversed = array.reverse()
console.log(reversed);
console.log(array);

/**
 * @description -  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
 *
 */

let smallArr = [1, 2, 3];

let totalArr = smallArr.push( 4, 5, 6 );
console.log(smallArr);

/**
 * @description - Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6
 */

let smallArr2 = [1, 2, 3];
let totalArr2 = smallArr2.unshift(4, 5, 6 );
console.log(smallArr2);

/**
 * @description - Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
 *
 */

let shiftMass = ['js', 'css', 'jq'];
let shifted = shiftMass.shift();
console.log(shifted);
console.log(shiftMass);

/**
 * @description - Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его.
 *
 */


let popMass = ['js', 'css', 'jq'];
let popped = popMass.pop();
console.log(popped);
console.log(popMass);

