var form=document.getElementById('addForm');
var item=document.getElementById('items');
var itemList=document.getElementsByClassName('list-group-item');
var filter=document.getElementById('filter');


form.addEventListener('submit',addItem);

item.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);



for(let i=0;i<itemList.length;i++){
    var editBtn=document.createElement('button');

    editBtn.className='btn btn-sm float-right editBtn';

    editBtn.appendChild(document.createTextNode('Edit'));

    itemList[i].appendChild(editBtn);
}



function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value;
    var description=document.getElementById('description').value;


    var li=document.getElementById('li');

    li.className='list-group-item';


    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(description));


    var deleteBtn=document.getElementById('button');

    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);
}



function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterItems(e){
    var text=e.target.value.toLowerCase();

    var items=itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var description=item.childNodes[1].textContent;

        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }

        else{
            item.style.display='none';
        }
    });
}