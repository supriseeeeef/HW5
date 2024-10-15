let day = parseInt(prompt("Введіть номер дня тижня"));
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Робочий день");
        break;
    case 6:
    case 7:
        console.log("Вихідний день");
        break;
    default:
        console.error("Невірний номер дня");
}

let month = parseInt(prompt("Введіть номер місяця"));
switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Зима");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Весна");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Літо");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Осінь");
        break;
    default:
        console.error("Невірний номер місяця");
}


let color = prompt("Введіть колір");
switch (color) {
    case "червоний":
        console.log("стоп");
        break;
    case "зелений":
        console.log("йти");
        break;
    case "жовтий":
        console.log("чекати");
        break;
    default:
        console.error("Невірний колір");
}


let operation = prompt("Введіть операцію +, -, *, /");
let num1 = parseFloat(prompt("Введіть перше число"));
let num2 = parseFloat(prompt("Введіть друге число"));
if (isNaN(num1) || isNaN(num2)) {
    console.log("Введіть правильні числа");
} else {
    let result;
    switch (operation) {
        case "+":
            result = `${num1} + ${num2} = ${num1 + num2}`;
            break;
        case "-":
            result = `${num1} - ${num2} = ${num1 - num2}`;
            break;
        case "*":
            result = `${num1} * ${num2} = ${num1 * num2}`;
            break;
        case "/":
            result = num2 !== 0 ? `${num1} / ${num2} = ${num1 / num2}` : "Ділення на нуль неможливе";
            break;
        default:
            result = "Невірна операція!";
    }
    console.log(result);
}