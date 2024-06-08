let check = "";
let total = 0;

const breakfast = {
    "1": [{ "name": "Tortilla", "price": 2 },
    { "name": "Tostada", "price": 2 },
    { "name": "Aroz", "price": 3 }],
    "2": [{ "name": "Crepes", "price": 1 },
    { "name": "Queso", "price": 3 },
    { "name": "Biscocho", "price": 2 }],
    "3": [{ "name": "Cafe", "price": 2 },
    { "name": "Zumo", "price": 3 },
    { "name": "ColaCao", "price": 2 }]
}

const lunch = {
    "1": [{ "name": "Patatas", "price": 4 },
    { "name": "Entrecot", "price": 7 },
    { "name": "Merluza", "price": 6 }],
    "2": [{ "name": "Ensalada", "price": 5 },
    { "name": "Tacos", "price": 8 },
    { "name": "Jamon", "price": 12 }],
    "3": [{ "name": "Vino", "price": 1 },
    { "name": "Cerveza", "price": 2 },
    { "name": "Aqua", "price": 1 }]
}

const diner = {
    "1": [{ "name": "Hamburgesa", "price": 8 },
    { "name": "Pintxo", "price": 2 },
    { "name": "Croquetas", "price": 7 }],
    "2": [{ "name": "Ravas", "price": 7 },
    { "name": "Verduras", "price": 6 },
    { "name": "Chopitos", "price": 8 }],
    "3": [{ "name": "Helado", "price": 5 },
    { "name": "Sorbete", "price": 6 },
    { "name": "Chocolate", "price": 3 }]
}

const comments = ["Qué bien", "Perfecto", "Estupendo"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function showMenu(menu) {
    let text = "Hola!!\nMenú\n";
    for (const [key, value] of Object.entries(menu)) {
        text += `${key}\n`;
        for (let i = 0; i < value.length; i++) {
            text += `${value[i].name.toUpperCase()} -- ${value[i].price}\$\n`;
        }
    }
    return text;
}

function checkElement(elem, array) {
    if (elem) {
        for (let i = 0; i < array.length; i++) {
            if (elem.toUpperCase() == array[i].name.toUpperCase()) {
                return array[i].price;
            }
        }
    }
    return 0;
}

function selectMenu(menu) {
    for (const [key, value] of Object.entries(menu)) {
        let allOk = false;
        do {
            let text = `${key.toUpperCase()}\n`;

            for (let i = 0; i < value.length; i++) {
                text += `${value[i].name.toUpperCase()} -- ${value[i].price}\$\n`;
            }
            text += "¿Qué prefiere?";

            q = prompt(text).toUpperCase();
            let price = (checkElement(q, value));

            if (price != 0) {
                check += `${key.toUpperCase()} ${q} -- ${price}\$\n`;
                total += price;
                allOk = true;
                alert(comments[getRandomInt(comments.length)]);
            } else {
                alert("Error. No es el plato correcto");
            }

        } while (allOk == false);
    }
}

function showCheck(check, total) {
    let text = check;
    text += `Total: ${total}\$`;
    return text;
}

let timeMenu = 0;
do {
    let time = prompt("¿Qué hora es? HH");
    time = Number(time);
    if (time >= 7 && time <= 12) {
        timeMenu = breakfast;
    } else if (time >= 13 && time <= 18) {
        timeMenu = lunch;
    } else if (time >= 19 && time <= 23) {
        timeMenu = diner;
    } else {
        alert("Cerrado");
        continue;
    }
    alert(showMenu(timeMenu));
    selectMenu(timeMenu);
    alert(showCheck(check, total));
} while (timeMenu == 0)
