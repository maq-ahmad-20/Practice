console.log("Hello World")
console.dir(document);

//console.log(document.domain);

console.log(document.url);
console.log(document.title)
document.title = "Item2";

console.log(document.doctype);
console.log(document.head);

var headerTittle = document.getElementById('header-title');
console.log(document.getElementById('main-header'));
//console.log(headerTittle.innerHTML);
//console.log(headerTittle.innerText);
//console.log(headerTittle.textContent);


var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello";
items[1].style.backgroundColor = "yellow";

 for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor = "blue";
 }