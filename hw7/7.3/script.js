

// ДЗ 7.3. Функція з циклом
// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) .
//  Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста, 
//  текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

function promptLoop() {
    let lastInput = null;
    for (let i = 0; i < 10; i++) {
        let userInput = prompt("Введіть число більше 100:");

        // Перевірка, чи введено число
        if (userInput === null) {
            console.log("Ви відмінили введення.");
            return;
        } else if (isNaN(userInput)) {
            console.log("Ви ввели текст. Останнє введене значення: " + userInput);
            return;
        } else if (parseInt(userInput) <= 100) {
            lastInput = userInput;
            console.log("Введене число менше або рівне 100. Спробуйте ще раз.");
            continue; // Просити повторити ввід даних
        } else {
            lastInput = userInput;
            continue; // Продовжити отримувати дані
        } 

       
    }

    console.log("Цикл закінчився. Останнє введене значення: " + lastInput);
}

// Виклик функції
promptLoop();

