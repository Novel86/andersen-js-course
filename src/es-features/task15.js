/**
 * Написать функцию, которая принимает массив с внутренними массивами, которая вернет объект и соберет свойства этого объект на основании внутренних массивов.
 *
 * Пример вызова
 *
 * console.log(task15Old([['a', 1], ['b', 2]])); -> {a: 1, b: 2}
 */

export function task15Old(arr) {
  return arr.reduce((a, [key, val]) => {
    a[key] = val;
    return a;
  }, {});
}

// Напишите реализацию функции task15Old на ESnext ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export function task15New(arr) {
  const newArray = arr.reduce((accum, item) => {
    const [key, value] = item;
    accum[key] = value;
    return accum;
  }, {});
  return newArray;
}
