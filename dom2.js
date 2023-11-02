var itemList=document.querySelector('#items');


// itemList.parentElement.style.backgroundColor='green';



// console.log(itemList.lastChild);
// itemList.lastElementChild.textContent='Hello 4';



// console.log(itemList.firstChild);
// itemList.firstElementChild.textContent='Hello 1';



// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);




// console.log(itemList.previousSibling);
// itemList.previousElementSibling.style.color='green';




var newDiv=document.createElement('div');

newDiv.className='hello';

newDiv.id='hello1';

newDiv.setAttribute('title','Hello Div');



var newDivText=document.createTextNode('Hello World');

newDiv.appendChild(newDivText);



var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);


newDiv.style.fontSize='30px';

container.insertBefore(newDiv,h1);

