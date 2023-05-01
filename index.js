// массивы символов
const rowOne = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const rowTwo = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
const rowThree = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const rowFour = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const rowFive = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
const rowSix = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];


// создание элементов страницы

const header = document.createElement('header');
header.className = 'header';
header.innerHTML = 'RS Виртуальная клавиатура';
document.body.append(header);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
header.after(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
textarea.after(keyboard);

const row1 = document.createElement('div');
row1.className = 'row1';
keyboard.prepend(row1);

const row2 = document.createElement('div');
row1.className = 'row2';
row1.after(row2);

const row3 = document.createElement('div');
row1.className = 'row3';
row2.after(row3);

const row4 = document.createElement('div');
row1.className = 'row4';
row3.after(row4);

const row5 = document.createElement('div');
row1.className = 'row5';
row4.after(row5);

const row6 = document.createElement('div');
row1.className = 'row6';
row5.after(row6);

const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = 'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левые ctrl + alt';
document.body.append(footer);

// Отрисовка клавиатуры
function createKeyboard() {
    for (let i = 0; i < rowOne.length; i++) {
        const key = document.createElement('span');
        row1.append(key);
        row1.classList = 'row';
        key.className = `key ${rowOne[i][0].toLowerCase()}`;
        key.innerHTML = rowOne[i];
    }
    for (let i = 0; i < rowTwo.length; i++) {
        const key = document.createElement('span');
        row2.append(key);
        row2.classList = 'row';
        key.className = `key ${rowTwo[i][0].toLowerCase().replace('key', 'key-')}`;
        key.innerHTML = rowTwo[i];
    }
    for (let i = 0; i < rowThree.length; i++) {
        const key = document.createElement('span');
        row3.append(key);
        row3.classList = 'row';
        key.className = `key ${rowThree[i][0].toLowerCase().replace('key', 'key-')}`;
        key.innerHTML = rowThree[i];
    }
    for (let i = 0; i < rowFour.length; i++) {
        const key = document.createElement('span');
        row4.append(key);
        row4.classList = 'row';
        key.className = `key ${rowFour[i][0].toLowerCase().replace('key', 'key-')}`;
        key.innerHTML = rowFour[i];
    }
    for (let i = 0; i < rowFive.length; i++) {
        const key = document.createElement('span');
        row5.append(key);
        row5.classList = 'row';
        key.className = `key ${rowFive[i][0].toLowerCase()}`;
        key.innerHTML = rowFive[i];
    }
    for (let i = 0; i < rowSix.length; i++) {
        const key = document.createElement('span');
        row6.append(key);
        row6.classList = 'row';
        key.className = `key ${rowSix[i][0].toLowerCase()}`;
        key.innerHTML = rowSix[i];
    }
    textarea.focus();
}
createKeyboard();