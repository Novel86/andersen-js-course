/**
 * Реализовать функцию without в этом файле, и экспортировать ее.
 *
 * Первый аргумент - массив, второй и последующие - значения
 *
 * Функция возвращает новый массив, который наполнен теми значениями,
 * которые не передавались как второй и последующие аргументы функции
 * ([2, 1, 2, 3], 1, 2)) -> 1ца и 2ка убрались, осталась только 3ка. Вернули [3]
 * ([2, 1, 10, 20], 1, 2)) -> 1ца и 2ка убрались, остались 10, 20. Вернули [10, 20]
 *
 * console.log(without([2, 1, 2, 3], 1, 2)) -> [3]
 * console.log(without([2, 1, 10, 20], 1, 2)) -> [10, 20]
 */
// export default function without(array) {
//   const values = Array.from(arguments).slice(1);

//   return array.reduce((accum, item) => {
//     if (!values.includes(item)) accum.push(item);
//     return accum;
//   }, []);
// }

// решение без reduce
export default function without(array, ...restArgs) {
  return array.filter((item) => !restArgs.includes(item));
}

without([2, 1, 2, 3], 1, 2);
