
// ДЗ 4.3. Портрет користувача
// Основне завдання, cтворити скрипт яки повинен виконувати наступне:
// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, 
// то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, 
// столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.
// Додаткове завдання *
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту,
//  то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
// Все це має бути відображено в одному вікні (алерті).
// Додаткове завдання
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода,
//  що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту.
let birthYear = prompt("Введіть свій рік народження:");
if (birthYear === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
    let city = prompt("Введіть місто, в якому ви живете:");
    if (city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто.");
    } else {
        let favoriteSport = prompt("Введіть ваш улюблений вид спорту:");
        if (favoriteSport === null) {
            alert("Шкода, що Ви не захотіли ввести ваш улюблений вид спорту.");
        } else {
            let age = new Date().getFullYear() - parseInt(birthYear);
            let message = "Ваш вік: " + age + " років.\n";
            
            if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
                message += "Ти живеш у столиці " + getCountryName(city) + ".\n";
            } else {
                message += "Ти живеш у місті " + city + ".\n";
            }

            let sportsChampions = {
                "футбол": "Ліонель Мессі",
                "теніс": "Серена Вільямс",
                "баскетбол": "Леброн Джеймс"
            };
            if (sportsChampions.hasOwnProperty(favoriteSport.toLowerCase())) {
                message += "Круто! Хочеш стати " + sportsChampions[favoriteSport.toLowerCase()] + "?";
            } else {
                message += "Твій улюблений вид спорту: " + favoriteSport + ".";
            }

            alert(message);
        }
    }
}
function getCountryName(city) {
    switch (city) {
        case "Київ":
            return "України";
        case "Вашингтон":
            return "США";
        case "Лондон":
            return "Великої Британії";
        default:
            return "цієї країни";
    }
}