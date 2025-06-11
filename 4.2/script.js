/*
  Пример:
  https://codepen.io/neizerth/pen/dyajGWB
  https://codepen.io/neizerth/pen/ExrRavJ
*/

// 1. Найти текстовое поле (тег input)
const textInput = document.querySelector('.calc__input');
// 2. Найти тег, в котором размещена стоимость (где указан 0)
const resultSpan = document.querySelector('.calc__result');
// 3. Когда вводите текст, запишите стоимость в тег из п.2. Она равна количеству символов * 1000 

textInput.addEventListener('input', () => {
    const inputText = textInput.value;
  
    const charCount = inputText.length; //длина строки
  
    const cost = charCount * 1000; //считаю стоимость
 
    resultSpan.textContent = cost; // запись суммы в тег calc__result
});