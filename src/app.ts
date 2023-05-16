// const anchor = document.querySelector('a')!;

// console.log(anchor.href);

/*
! means, "Look, I know this exists. It is definitely NOT null"
const form = document.querySelector('form')!;

Before: form was type Element, but it's actually a form
We want it to be HTMLFormElement, so we can use the . to get
the VS Code Intellisense and show us the methods we can use
i.e.  form. (it gives methods we can use)

*/

// classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 350);

let invoices: Invoice[] = [];
// invoices.push("hello"); X
invoices.push(invOne);
invoices.push(invTwo);

// we can change properties
invOne.client = "yoshi";
invTwo.amount = 400;

console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
});



