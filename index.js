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
console.log(totalArr);
