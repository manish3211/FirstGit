//EXAMINE THE DOCUMENT OBJECT

//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent='Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//GETELEMENTBYID
// console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>Hello</h3>';

// header.style.borderBottom='solid 3px #000';

// document.getElementById('main').style.fontWeight='bold';
// document.getElementById('main').style.color='green';


// var items=document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor='green';

// // GIVES ERROR
// // items.style.fontWeight='bold';

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }




var items=document.getElementsByClassName('list-group-item');
items[4].style.backgroundColor='green';


for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}



var li=document.getElementsByTagName('li');
li[4].style.backgroundColor='green';
li[4].style.fontWeight='bold';
li[4].textContent='Hello';
