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

/**
 *
 * @description - Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
 */

let sliceMass = [1, 2, 3, 4, 5, 6];
console.log(sliceMass.slice(0, 3));

/**
 *
 * @description - Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
 */

let sliceMass2 = [1, 2, 3, 4, 5, 6];
console.log(sliceMass2.slice(3, 5));

/**
 *
 * @description -  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
 */

let spliceMass = [1, 2, 3, 4, 5];
let spliced1 = spliceMass.splice(1, 2);
console.log(spliceMass);

/**
 *
 * @description -  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
 */

let spliceMass2 = [1, 2, 3, 4, 5];
let spliced2 = spliceMass2.splice(0, 1);
spliced2 = spliceMass2.splice(3, 1);
console.log(spliceMass2);

/**
 *
 * @description - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
 */

let spliceMass4 = [1, 2, 3, 4, 5];
let spliced3 = spliceMass4.splice(3, 0, 'a', 'b', 'c');
console.log(spliceMass4);

/**
 * @description -Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
 */

let spliceMass5 = [1, 2, 3, 4, 5];
let spliced4 = spliceMass5.splice(1, 0, 'a', 'b');
    spliced4 = spliceMass5.splice(6, 0, 'c');
    spliced4 = spliceMass5.splice(8, 0, 'e');
console.log(spliceMass5);
