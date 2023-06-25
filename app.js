// console.log("Hello World")
// console.dir(document);

// //console.log(document.domain);

// console.log(document.url);
// console.log(document.title)
// document.title = "Item2";

// console.log(document.doctype);
// console.log(document.head);

// var headerTittle = document.getElementById('header-title');
// console.log(document.getElementById('main-header'));
//console.log(headerTittle.innerHTML);
//console.log(headerTittle.innerText);
//console.log(headerTittle.textContent);


// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello";
// items[1].style.backgroundColor = "yellow";

//  for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor = "blue";
//  }

// var items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello";
// items[1].style.backgroundColor = "yellow";

//  for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor = "green";
//  }

 
//  var header = document.querySelector('#main-header'); 
//  header.style.borderBottom = '2px solid yellow';

//  var input = document.querySelector('input');
//  input.value = 'Hello';

//  var submit  = document.querySelector('input[type="submit"]');
//  submit.value = "send";

//  var item = document.querySelector('.list-group-item');
//  item.style.color = 'red';
//  var lastItem = document.querySelector('.list-group-item:last-child');
//  lastItem.style.color = 'blue';

//  var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//  secondItem.style.color = 'yellow';


//  var titles = document.querySelectorAll('.title');
//  console.log(titles);
//  titles[0].textContent = 'Hello';

//  var odd = document.querySelectorAll('li:nth-child(odd)');

//  for(let j=0;j<odd.length;j++){
//       odd[j].style.backgroundColor = 'red';
//  }



var div = document.createElement('div');
 div.className = 'HelloWorld';
 div.appendChild(document.createTextNode('Hello'));
 
 console.log(div);
 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');
 console.log(container);
 container.insertBefore(div,h1);

var addHelloBeforeItem1 = document.createElement('div');
addHelloBeforeItem1.className='hello';
var helloText = document.createTextNode('Hello');
addHelloBeforeItem1.appendChild(helloText);
console.log(addHelloBeforeItem1)
document.getElementById('items').appendChild(addHelloBeforeItem1);

addHelloBeforeItem1.style.textAlign = 'center';
 















