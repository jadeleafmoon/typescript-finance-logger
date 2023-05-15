"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// ! means, "Look, I know this exists. It is definitely NOT null"
// const form = document.querySelector('form')!;
// Before: form was type Element, but it's actually a form
// We want it to be HTMLFormElement, so we can use the . to get
// the VS Code Intellisense and show us the methods we can use
// i.e.  form. (it gives methods we can use)
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
