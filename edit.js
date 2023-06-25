var form = document.getElementById('addForm');
var items = document.getElementById('items');

form.addEventListener('submit' , addItem);

function addItem(e){
    e.preventDefault();
   
     var addedText = document.getElementById('item').value;
     var addedText1 = document.getElementById('item1').value;

     var li = document.createElement('li');
     li.className ='list-group-item';
     li.appendChild(document.createTextNode(addedText+" " + addedText1));

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

    var filter = document.getElementById('filter');

     filter.addEventListener('keyup' , (e)=>{
        var inputText = e.target.value.toLowerCase();
        var listItems = document.getElementsByTagName('li');
      
        Array.from(listItems);
        for(let i=0;i<listItems.length;i++){
           var itemName = listItems[i].firstChild.textContent;
           if(itemName.toLowerCase().indexOf(inputText) != -1){
            listItems[i].style.display = 'block';
           }else{
            listItems[i].style.display ='none';
           }
        }


     })


 