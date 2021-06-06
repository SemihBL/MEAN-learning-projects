// // Arrow Functions
// // Without parameters

// // ES5
// let welcomeES5 = function () {
//     console.log('hello from ES5');
// };
// welcomeES5();

// // ES6
// let welcomeES6 = () => {
//     console.log('hello from ES6')
// };
// welcomeES6();

// // With parameters

// // ES5
// let multiplyES5 = function (x, y) {
//     return x * y;
// };
// console.log(multiplyES5(4, 5));

// // ES6
// // let multiplyES6 = (x, y) => { return x * y; };
// let multiplyES6 = (x, y) => x * y;
// console.log(multiplyES6(4, 5));

// // ES5
// let splitES5 = function (text) {
//     return text.split(' ');
// };
// console.log(splitES5('Semih Bali'));

// // ES6
// let splitES6 = (text) => text.split(' ');
// console.log(splitES6('Semih Bali'));

// // ES5
// let getProductES5 = function (id, name) {
//     return {
//         id: id,
//         name: name
//     };
// };
// console.log(getProductES5('1', 'iPhone 12 Mini'));

// // ES6
// let getProductES6 = (id, name) => (
//     {
//         id: id,
//         name: name
//     }
// );
// console.log(getProductES6('2', 'iPhone X'));

// // ES5
// const phones = [
//     { name: 'iPhone 8', price: 4000 },
//     { name: 'iPhone 7', price: 3000 },
//     { name: 'iPhone 11', price: 7000 },
//     { name: 'iPhone 5', price: 500 }
// ];

// let priceES5 = phones.map(function (phone) {
//     return phone.price;
// });
// console.log(priceES5);

// // ES6
// let pricesES6 = phones.map(phone => phone.price);
// console.log(pricesES6);

// // ES5
// const arr = [1, 2, 3, 4, 5, 10, 20, 40, 65];

// let evenES5 = arr.filter(function (a) {
//     return a % 2 == 0;
// });
// console.log(evenES5);

// // ES6
// let evenES6 = arr.filter(a => a % 2 == 0)
// console.log(evenES6);

// *******************************************************************
// 'this' keyword

// // ES5
// let list = {
//     category: 'phone',
//     names: ['iphone 7', 'iphone 8'],
//     call: function () {
//         var self = this;
//         this.names.map(function (name) {
//             console.log(`${self.category} / ${name}`);
//         });
//     }
// }
// list.call();

// // ES6
// let list_ = {
//     category: 'phone',
//     names: ['iphone 7', 'iphone 8'],
//     call: function () {

//         this.names.map((name) => {
//             console.log(`${this.category} / ${name}`);
//         });
//     }
// }
// list_.call();

// function getTotal(a, b, c) {
//     return a + b + c;
// }
// console.log(getTotal(10, 20, 30));

// let numbers = [10, 20, 30];

// // ES5
// console.log(getTotal.apply(null, numbers));

// // ES6
// console.log(getTotal(...numbers));

// let arr1 = ['two', 'three'];
// let arr2 = ['one', 'four', 'five'];

// // (arr1.push(...arr2));
// // arr1.unshift(...arr2);

// let arr3 = ['one', ...arr1, 'four'];
// console.log(arr3);

// let h1 = document.querySelector('h1');
// let divs = document.querySelectorAll('div');

// let tags = [h1, ...divs];

// tags.forEach(tags => {
//     tags.style.color = 'red';
// });

// console.log(tags);

class PersonES6 {
    constructor(name, job, yearOfBirth) {
        this.name = name;
        this.job = job;
        this.yearOfBirth = yearOfBirth;
    }
}