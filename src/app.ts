import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end');

});

// Generics

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

// let docOne = addUID({name: 'yoshi', age: 40});

// console.log("docOne", docOne.age);

// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
//           index:  0,    1,      2,    3,        4


interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.BOOK,
  data: { title: 'Lord of the Rings' }
}

const docTwo: Resource<object> = {
  uid: 10,
  resourceName: ResourceType.PERSON,
  data: { name: 'yoshi' }
}

console.log(docOne, docTwo);
// {uid: 1, resourceName: 0, data: {…}} 
// {uid: 10, resourceName: 4, data: {…}}