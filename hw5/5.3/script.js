
// ДЗ 5.3. Пошук потрібних чисел
// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

const N = parseInt(prompt("Введіть ціле число N:"));

for (let i = 1; i <= 100; i++) {
    const square = i * i;
    if (square <= N) {
        console.log(i);
    } else {
        break; // Вийти з циклу, якщо квадрат перевищує N
    }
}
