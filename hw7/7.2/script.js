
// ДЗ 7.2. Добуток через карування
// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). 
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)

// 1й вариант
// function NAME(x) {
//     return function(y) {
//         return x * y;
//     };
// }
// const result = NAME(5)(2);
// console.log(result); // 10


// 2й вариант
function name(a) {
    return(b) =>{
        return a * b
    }
}
console.log(name(5)(2))