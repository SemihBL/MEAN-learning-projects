// let theNum = Math.round(Math.random() * 10 + 1);
// let manualChance = Number(prompt('How many rights do you want?'));
// let chances = manualChance;
// let guess, counter = 0;

// console.log(theNum);

// while (chances > 0) {
//     chances--;
//     counter++;
//     guess = Number(prompt('Enter a number between 1 and 10'));

//     if (guess == theNum) {
//         console.log(`Congrats! You won! at the ${counter}. try. Your score is ${100 - (100 / manualChance) * (counter - 1)}`);
//         break;

//     }

//     else if (guess < theNum)
//         console.log("Go up!");

//     else
//         console.log("Go down!");

//     if (chances == 0) {
//         console.log("Your chances have done.");
//         break;
//     }
// }

// let currentYear = new Date().getFullYear();

// function ageCount(birthYear) {
//     return currentYear - birthYear;
// }

// function leftToRetirement(birthYear,name) {
//     let age = ageCount(birthYear);
//     let retirement = Math.abs(65 - age);

//     if (retirement > 0)
//         console.log(`${name}, emekliliğine ${retirement} yıl kalmıştır.`)
//     else
//         console.log(`${name}, zaten ${retirement} yıl önce emekli olmuşsun.`)
// }

// let retirementYear = leftToRetirement(1920,'Semih')

// function sum(a,b) {
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,20));

// const sum = function (a, b) {

//     if (typeof a === 'undefined')
//         a = 0;
//     if (typeof b === 'undefined')
//         b = 0;

//     var c = a + b;
//     return c;

// }

// const sum = function (a = 0, b = 0) {

//     var c = a + b;
//     return c;


// }

// function sumAll() {

//     var total = 0; 
//     for (let i = 0; i < arguments.length; i++) {
//         total+=arguments[i];
//     }
// }

// console.log(sum(10, 20));
// console.log(sum(10));
// console.log(sumAll(10,20,30));

// var AccountA = {
//     fullName: `Semih Bali`,
//     accountNo: `32135468498`,
//     balance: 2000,
//     addAccount: 1000
// }

// var AccountB = {
//     fullName: `Burak Bali`,
//     accountNo: `32135468499`,
//     balance: 1000,
//     addAccount: 3000
// }

// function withdrawal(account, amount) {

//     console.log(`Hi ${account.fullName}`);

//     account.balance -= amount;

//     if (account.balance >= amount) {

//         console.log(`transaction done`);

//     }
//     else {

//         var sumOfBalances = account.balance + account.addAccount;

//         if (sumOfBalances >= amount) {

//             if (confirm(`There isn't enough balance in your account.
//              Would you like to use your additional account?`)) {
//                 console.log(`transaction done`);

//                 var balance = account.balance;
//                 var addAccount = amount - balance;
//                 account.balance = 0;
//                 account.addAccount = account.addAccount - addAccount;

//             }
//             else {

//                 console.log(`There isn't ${amount} £ balance in your ${account.accountNo} number account.`)
//             }

//         }
//         else {

//             console.log(`There isn't enough balance in your account.`);

//         }
//     }
// }

// console.log(withdrawal(AccountA, 2100));

// let val;
// val = window.document;
// val = window.document.all;
// val = window.document.all.length;
// val = window.document.all[9];
// val = window.document.head;
// val = window.document.body;
// val = window.document.anchors;
// val = window.document.URL;
// val = window.document.domain;
// val = window.document.images;
// val = window.document.title;
// val = window.document.forms;
// val = window.document.forms[0];
// val = window.document.forms[0].id;
// val = window.document.forms[0].action;
// val = window.document.scripts;
// val = window.document.scripts[0];
// val = window.document.scripts[0].getAttribute("src");
// val = window.document.getElementById('Yeah');

// console.log(val);

// let val;

// val = window.document.getElementById('header1');
// val = window.document.getElementById('header1').id;
// val = window.document.getElementById('header1').className;

// val = window.document.getElementById('header1');
// // val = val.id;
// // val = val.className;

// val.style.fontSize = '45px';
// val.style.textShadow = '0px 5px 5px gray';
// val.style.color = 'orange';
// val.style.fontWeight = 'bold';
// // val.style.display = 'none';

// window.document.getElementById('header1').innerText = 'Excalibur';

// window.document.getElementById('header1').innerHTML = '<i>Excalibur<i>';

// console.log(val);
// val = window.document.all.length;

// let val;
// val = window.document.querySelector('#header1');
// val = window.document.querySelector('.Div');
// val = window.document.querySelector('div');
// val = window.document.querySelector('li').style.color = 'red';
// val = window.document.querySelector('li:last-child').style.color = 'green';
// val = window.document.querySelector('li:nth-child(4)').style.color = 'purple';
// val = window.document.querySelector('li:nth-child(3)').textContent="ppat";

// val = window.document.querySelector('li').className = 'mb-5'; // Mevcut classı temizler yalnızca mb-5 ekler
// val = window.document.querySelector('li').classList.add('mb-5');

// console.log(val);

// let obj = window.document.domain;
// console.log(obj);

// var obj;

// obj = window.document.getElementsByClassName('liList');

// // obj = window.document.getElementsByClassName('liList')[0];
// // obj = obj[2];

// for (let i = 0; i < obj.length; i++) {
//     obj[i].style.color='blue';
//     obj[i].style.fontSize='20px';
//     obj[i].textContent='New Item';
// }


// obj = window.document.querySelector('.ulList').getElementsByTagName('li');

// val = window.document.querySelectorAll('li');

// val.forEach( function(item,index) {
//     item.textContent = `${index} - hello`
// });

// console.log(val);
// console.log(obj);

// let val;

// val = document.querySelectorAll('li:nth-child(odd)');

// // val.forEach(function(item) {
// //     // console.log(item);
// //     item.style.background = '#ccc';

// // });

// console.log(val);

// let val;

// let list = document.querySelector('.ulList');

// val = list.children; // Satır aralıklarını belirtmez HTMLCollection tipinde geri dönüş sağlar.
// val = list.childNodes; // Satır aralıklarını belirtir (text).

// val = list.childNodes[0];
// val = list.childNodes[0].nodeName; // text (nodetype)
// val = list.childNodes[0].nodeType; // element (nodetype)

// val = list.children;
// val = list.children[0];
// val = list.children[2];
// val = list.children[2].textContent = 'new item';
// val = list.children[3].children;

// val = list.firstChild; // textNode
// val = list.firstElementChild; // element

// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// val = list.parentNode;
// val = list.parentElement;

// val = list.parentElement.parentElement;

// val = list.children[0].nextSibling;
// val = list.children[0].nextElementSibling;

// val = list.children[0].previousSibling;
// val = list.children[0].previousElementSibling;

// // console.log(val);

// val = list.childNodes;

// for (let i = 0; i < val.length; i++) {
//     if (val[i].nodeType === 1) {
//         console.log(val[i]);
//     }
// }

// const ulGroup = document.querySelector('.ulList');

// ulGroup.remove(); // removing element

// ulGroup.childNodes[5].remove();
// ulGroup.children[0].remove();
// ulGroup.removeChild(ulGroup.childNodes[1]);

// ulGroup.children[0].removeAttribute('class');

// for (let i = 0; i < ulGroup.children.length; i++) {
//     ulGroup.children[i].removeAttribute('class');

// }

// const divElement = document.querySelectorAll('a');
// const divElement_ = document.querySelector('a').setAttribute('data-id', '5');

// for (let i = 0; i < divElement.length; i++) {
//     divElement[i].className = 'aList';

// }

// const h2 = document.createElement('h2');
// h2.setAttribute('class','liList');
// h2.appendChild(document.createTextNode('MyList'));

// const parent = document.querySelector('.ulList');
// parent.replaceChild(h2,divElement);

// console.log(divElement);

// let val;

// let link = ulGroup.children[0].children[0];

// val = link.className;
// val = link.classList;

// link.classList.add('New');
// link.classList.remove('New');

// val = link.getAttribute('data-id');
// val = link.setAttribute('href','http://recitalx.com/');
// val = link.setAttribute('target','_blank');

// val = link.getAttribute('href');
// val = link.hasAttribute('href');

// console.log(val);

// const li = document.createElement('li');
// li.className = 'liList';
// li.id = 'id';
// li.setAttribute('title', 'New Item');

// // text node

// const text = document.createTextNode('New Items');
// // li.innerText = 'New List Item';

// const aTag = document.createElement('a');
// aTag.setAttribute('href','#');
// aTag.setAttribute('target','_blank');
// aTag.className='aList';
// // aTag.innerText='çikolata şelalesi';
// aTag.appendChild(text);

// li.appendChild(aTag);

// document.querySelector('.ulList').appendChild(li);

// console.log(li);

// Delete All

// const deleteBtn = document.createElement('a');
// deleteBtn.setAttribute('href', '#');
// deleteBtn.className = 'btn btn-outline-danger mt-3';
// deleteBtn.id = 'btnDeleteAll';

// const btnText = document.createTextNode('Delete All');

// deleteBtn.appendChild(btnText);

// var parentElement = document.querySelector('ul');
// parentElement.appendChild(deleteBtn);

// Click

// const deleteBtn1 = document.createElement('a');
// deleteBtn1.getAttribute('href', '#');
// deleteBtn1.className = 'btn btn-outline-info ml-2 mt-3';
// deleteBtn1.id = 'btnDeleteAll1';

// const btnText1 = document.createTextNode('Click');

// deleteBtn1.appendChild(btnText1);

// var parentElement = document.querySelector('ul');
// parentElement.appendChild(deleteBtn1);

// const btn = document.querySelector('#btnDeleteAll');
// const btn1 = document.querySelector('#btnDeleteAll1');

// btn.addEventListener('click',function(){
//     console.log('btn clicked');
// });

// function btnClicked(event) {
//     let val;

//     // val = event;

//     val = event.target;
//     val = event.target.id;
//     val = event.target.className;
//     val = event.type;

//     console.log(val);
//     console.log('Clicked');

//     event.preventDefault();
// }

// function btnClicked2()  {
//     console.log('btn clicked 2');
// }

// btn.addEventListener('click', btnClicked);

// btn.addEventListener('click',btnClicked2);
// btn1.addEventListener('click',btnClicked);

// var addMargin = document.querySelector('.divElement');
// addMargin.style.margin = '500px';

// const btn = document.querySelector('#btnDeleteAll');
// const ulList = document.querySelector('.ulList');

// btn.addEventListener('click',eventHandler);
// btn.addEventListener('dblclick',eventHandler);
// btn.addEventListener('mousedown',eventHandler);
// btn.addEventListener('mouseup',eventHandler);
// ulList.addEventListener('mouseenter',eventHandler);
// ulList.addEventListener('mouseleave',eventHandler);
// ulList.addEventListener('mouseover',eventHandler);
// ulList.addEventListener('mouseout',eventHandler);
// ulList.addEventListener('mousemove', eventHandler);

// Exchange Operation
// const h5Element = document.createElement('h5');
// h5Element.id = 'header5';
// h5Element.className = 'try';
// const h5Text = document.createTextNode('DAMN');
// h5Element.appendChild(h5Text);
// let h1Element = document.querySelector('#header1');
// h1Element.replaceWith(h5Element);

// const h5 = document.getElementById('header5');

// function eventHandler(event) {
//     console.log(`event type : ${event.type}`);
//     h5.textContent=`Mouse X : ${event.offsetX} Mouse Y : ${event.offsetY}`;
// }

// deleteBtn.addEventListener('click',preventDefault);

// function preventDefault(event) {
//     event.preventDefault();
// }

// const ulList = document.querySelector('.ulList');

// const input = document.createElement('input');
// input.id = 'txtTaskName';
// input.style.display = 'block';
// input.style.margin = '20px 0px 0px 0px';

// ulList.appendChild(input);

// const inputSelect = document.getElementById('txtTaskName');
// const inputSelect_ = document.getElementById('select');

// inputSelect.addEventListener('keydown', _eventHandler);
// inputSelect.addEventListener('keyup', _eventHandler);
// inputSelect.addEventListener('keypress', _eventHandler);
// inputSelect.addEventListener('focus', _eventHandler); //input example
// inputSelect.addEventListener('blur', _eventHandler); //input example
// inputSelect.addEventListener('cut', _eventHandler); //input example
// inputSelect.addEventListener('paste', _eventHandler); //input example
// inputSelect.addEventListener('select', _eventHandler); //input example
// inputSelect_.addEventListener('change', _eventHandler); //select example

// function _eventHandler(event_1) {
//     console.log(`event type : ${event_1.type}`);
//     // console.log('key code : ' + event_1.keyCode);
//     console.log('key code : ' + event_1.target.value);

//     event_1.target.style.background = 'yellow';
//     event_1.preventDefault();
// }

// const ulList = document.querySelector('ul');

// ulList.addEventListener('click',function(e) {
//     if (e.target.className === 'delete-item') {
//         e.target.parentElement.remove();
//         e.preventDefault();
//     }
// });

// setItem //  Storage'a eleman ekler 
// const fullName = window.localStorage.setItem('fullName', 'Semih Bali');
// const age = window.localStorage.setItem('age', '17');
// let hobbies = ['Cinema','Cars','Books','Games']

// // getItem //  Elemeanı seçer 
// let val;
// val = localStorage.getItem('fullName');

// // Remove // Seçilen elemeanı siler 
// val = localStorage.removeItem('age');

// // Clear // Hepsini temizler
// val = localStorage.clear();

// console.log(val);
// console.log(localStorage);

