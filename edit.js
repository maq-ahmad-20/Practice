var form = document.getElementById('addForm');
var items = document.getElementById('items');

form.addEventListener('submit' , addItem);

function addItem(e){
    e.preventDefault();
   
     var addedText = document.getElementById('item').value;

     var li = document.createElement('li');
     li.className ='list-group-item';
     li.appendChild(document.createTextNode(addedText));

     var deleteButton = document.createElement('button');
     deleteButton.className = 'btn btn-danger btn-sm float-right delete';
     deleteButton.appendChild(document.createTextNode('X'));

     var editButton = document.createElement('button');
     editButton.className = 'btn btn-danger btn-sm float-right delete';
     
     editButton.appendChild(document.createTextNode("Edit"));
     editButton.style.backgroundColor = 'green';

     li.appendChild(editButton);
     li.appendChild(deleteButton);
     
     
     items.appendChild(li)


}

 
  items.addEventListener('click', (e)=>{

     e.preventDefault();
      if(e.target.classList.contains('delete')){
            if(confirm("Are you sure to delete")){
                var listtag = e.target.parentElement;
                items.removeChild(listtag);
            }

      }
  });



 