let userName = prompt("Введите ваше имя:");
let userAge = prompt("Введите ваш возраст:");

alert(`Привет, ${userName}! Вам, ${userAge} лет.`);
console.log(`Привет, ${userName}! Вам ${userAge} лет.`);

if (userAge >= 18) {
    alert("Вы совершеннолетний");
    console.log("Вы совершеннолетний");
} else {
    alert("Вы несовершеннолетний");
    console.log("Вы несовершеннолетний");
}


let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Угадайте число от 1 до 10:");

if (parseInt(userGuess) === randomNumber) {
    alert("Поздравляем! Вы угадали число!");
    console.log("Поздравляем! Вы угадали число!");
} else {
    if (parseInt(userGuess) < 5) {
        alert("Ваше число меньше 5.");
        console.log("Ваше число меньше 5.");
    } else {
        alert("Ваше число больше 5.");
        console.log("Ваше число больше 5.");
    }
}


let correctPassword = "12345";
let userPassword = prompt("Введите пароль:");

if (userPassword !== "") {
    if (userPassword === correctPassword) {
        alert("Доступ разрешен");
        console.log("Доступ разрешен");
    } else {
        alert("Доступ запрещен");
        console.log("Доступ запрещен");
    }
} else {
    alert("Пароль не может быть пустым");
    console.log("Пароль не может быть пустым");
}


let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            alert("Ошибка: деление на ноль!");
            console.log("Ошибка: деление на ноль!");
            throw new Error("Деление на ноль");
        }
        break;
    default:
        alert("Неверный оператор");
        console.log("Неверный оператор");
        throw new Error("Неверный оператор");
}

alert(`Результат: ${result}`);
console.log(`Результат: ${result}`);

for (let i = 1; i < 11; i++) {
    console.log(i)
}

let i=10;

while (i > 0) {
    console.log(i)
    i--;
}

const lectures = ['postavte', 'mne', 'otlichno', 'Onion']
const practices = ['postavte', 'mne', 'otlichno']
lectures.push('mne');
practices.unshift('otlichno')

lectures.forEach(element => {
    console.log(element)
});

practices.forEach(element => {
    console.log(element);
})

function array_out(a) {
    a.forEach(element => {
        console.log(element)
    })
}

array_out(lectures)
array_out(practices)

function array_o(a) {
    return a.filter(element => element.startsWith('O'));
}

const filter = array_o(lectures);
console.log(filter);