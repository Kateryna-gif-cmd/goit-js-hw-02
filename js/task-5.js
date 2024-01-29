// //! Сума чисел:
// //! Напишіть програму, яка обчислює суму всіх цілих чисел від 1 до заданого користувачем числа.
// const userNumber = Number(prompt("Введіть число"));

// console.log(userNumber);
// let total = 0;
// for (let i = 1; i <= userNumber; i += 1) {
//     total += i;
// }
// // console.log(total);
// //! Виведіть всі парні числа від 1 до 20.
// const userNumber = 20;
// for (let i = 1; i <= 20; i += 1) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
//! Таблиця множення:
//! Виведіть таблицю множення для заданого користувачем числа.

// const userNumber = Number(prompt("Введіть число"));
// console.log(userNumber);

// for (let i = 1; i <= 10; i += 1) {
//     console.log(`${userNumber} * ${i} =  ${userNumber * i}`);
// }

//! Пошук найбільшого числа:
// //! Знайдіть найбільше число в заданому мас

// let numbers = [23, 56, 12, 67, 8, 45, 90];
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i += 1) {
//     // console.log(numbers[i]); закоментровать, чтобы вывести тоько max
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }
// console.log(min);

// //Напишіть функцію change_register(str), яка приймає як аргумент рядок і замінює регістр кожного символу на протилежний.

// const str = "КоЖнИй МиСлИвЕцЬ бАжАє ЗнАтИ";

// function change_register(str) {
//     let newStr = "";
//     for (let i = 0; i < str.length; i += 1) {
//         console.log(str[i]);
//         if (str[i] === str[i].toUpperCase()) {
//             newStr += str[i].toLowerCase();
//         } else {
//              newStr += str[i].toUpperCase();
//         }
        
//     }

//     return newStr;
// }
// console.log(change_register(str));

// Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
// // for, while та do...while.
// // Підказка: у результаті має вийти 55.

// // let total = 0;
// // for (let i = 0; i <= 10; i += 1) {
// //   // total += i;
// //   total = total + i
// // }

// // console.log(total);
 
// // While

// // let total = 0;

// // let i = 0;
// // while (i <= 10) {
// //   total = total + i;
// //   i += 1;
// // }

// // console.log(total);


// // do while

// // let i = 0;
// // do {
// //   total = total + i;
// //   i += 1;
// // } while (i <= 10);
// // console.log(total);

// // let total = 0;
// // let i = 0;
// // while (i < 20) {
// //     total = total + i;
// //     i += 1;
  
// // }

// // // console.log(total);
// // let total = 0;
// // let i = 0;
// // do {
// //     total = total + i;
// //     i += 1;
// // } while (i < 20)
// // console.log(total);

// // const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// // const newClients = ["Peach", "Houston"];
// // const allClients = oldClients.concat(newClients);
// // console.log(allClients);


// // const firstArray = ["Mercury", "Venus"];
// // const secondArray = ["Mars", "Jupiter"];
// // const result = firstArray.concat(secondArray);

// // console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];
// // const array = ["Mango", "Poly", "Ajax"];
// // const value = 2;

// // function getSlice(array, value) {
// //   let newArray = 0;
// // for ( let i = 0; i < value; i += 1) {
// //   newArray += i;
// //   if ( value === -1 ) {
// //     return newArray.splice();
// // //   } else  {
// // //    return newArray[0, value];
// //   }
// // }
  
// // }

// // console.log(getSlice(array, value));






// // // --------------------// task 1 (3 модуль)

// // function slugify(title) {
// //     const slug = title.split(" ");
// //     // const message = array.join("-");

    
// //     return slug.join("-").toLowerCase();
// // }

// // console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// // console.log(slugify("English for developer")); // "english-for-developer"
// // console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// // console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"






// // // ----------------------task 2 (модуль 3)
// // function makeArray(firstArray, secondArray, maxLength) {
// //     const newArray = firstArray.concat(secondArray);
// //     let array = [];
// //     if (newArray > maxLength) {
      
// //     }
// //      return newArray.slice(0, maxLength)
  
// // }

    

// // console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// // console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// // console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// // console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// // console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// // console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// // function fnA() {
// //   console.log("Log inside fnA function before calling fnB");
// //   fnB();
// //   console.log("Log inside fnA function after fnB call");
// // }

// // function fnB() {
// //   console.log("Log inside fnB function");
// // }

// // console.log("Log before calling fnA");
// // fnA();
// // console.log("Log after calling fnA");

// // // "Log before calling fnA"
// // // "Log inside fnA function before calling fnB"
// // // "Log inside fnB function"
// // // "Log inside fnA function after fnB call"
// // // "Log after calling fnA"

// // ---------------task 3 (модуль 3)


// // Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.



// // Усередині функції:

// // Створи порожній масив, у який будеш додавати підходящі числа.
// // Використай цикл для ітерації кожного елемента масиву numbers.
// // Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// // Поверни свій новий масив з підходящими числами як результат.


// function filterArray(numbers, value) {

//         let newNumbersArray = [];
//   // Використовуємо цикл for для ітерації кожного елемента масиву numbers
//   for (let i = 0; i < numbers.length; i++) {
//     // Якщо елемент більший за value, додаємо його до масиву filtered
//     if (numbers[i] > value) {
//       newNumbersArray.push(numbers[i]);
//     }
//   }
//   // Повертаємо масив filtered як результат
//   return newNumbersArray;
// }





// // console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// // console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// // console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// // console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// // console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



// // Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// function checkWords(words, wordsSecond) {
//     const newArray = words.concat(wordsSecond);
//     if
// }



// console.log(checkWords(["mama"], ["papa"]));
// console.log(checkWords(["mama"], ["mama"]));
// console.log(checkWords(["mama"], ["vanya"]));
// console.log(checkWords(["mama"], ["ira"]));


// const userNumber = Number(prompt("Введіть число"));
// console.log(userNumber);
// // for (let i = 0; i <= 0; i += 1) {
// //   if (i % 2 === 0) {
// //     console.log(true);
// //   } else {
// //    console.log(false);
// //   }
// // }