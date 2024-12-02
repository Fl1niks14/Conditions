
/* 1 */
let a = 5;

if (a > 3 && a < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

/* 2 */
let values = [5, 0, -3, 2];

values.forEach(a => {
    if (a === 0 || a === 2) {
        a += 7;
    } else {
        a /= 10;
    }
    console.log(a);
});

/* 3 */
let num = 3;
let result;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
    default:
        result = 'Ошибка';
}
console.log(result);

/* 4 */

let day = 15;

if (day >= 1 && day <= 10) {
    console.log('Первая декада');
} else if (day >= 11 && day <= 20) {
    console.log('Вторая декада');
} else if (day >= 21 && day <= 31) {
    console.log('Третья декада');
} else {
    console.log('Ошибка');
}

/* 5 */
let month = 7;

if ([12, 1, 2].includes(month)) {
    console.log('Зима');
} else if ([3, 4, 5].includes(month)) {
    console.log('Весна');
} else if ([6, 7, 8].includes(month)) {
    console.log('Лето');
} else if ([9, 10, 11].includes(month)) {
    console.log('Осень');
} else {
    console.log('Ошибка');
}

/* 6 */
let string = 'abcde';

if (string[0] === 'a') {
    console.log('да');
} else {
    console.log('нет');
}