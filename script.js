
// JavaScript //

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

eventListeners();

function eventListeners(){
  form.addEventListener('submit',addNewItem);

  taskList.addEventListener('click',deleteItem);

  btnDeleteAll.addEventListener('click', deleteAllItems);
}

function addNewItem(e){
  if(input.value === ''){
    alert('Yeni Yorum Ekle');
  }

  const li = document.createElement('li');
  li.className = 'list-group-item py-4 px-4';
  li.appendChild(document.createTextNode(input.value));

  const h5=document.createElement('h5');
  h5.innerHTML='Anonim';

  const a = document.createElement('a');
  a.className = 'delete-item';
  a.setAttribute('href', '#');
  a.innerHTML = '<i class="fas fa-times delete-right"></i>';

  li.appendChild(h5);
  li.appendChild(a);

  taskList.appendChild(li);

  input.value ='';

  e.preventDefault();
}

function deleteItem(e){
  if(e.target.className==='fas fa-times delete-right'){
    e.target.parentElement.parentElement.remove();
  }

  e.preventDefault();
}

function deleteAllItems(e){
  if(confirm('Yorumları silmek istediğinize emin misiniz?')){
    // taskList.innerHTML = '';
    taskList.childNodes.forEach(function(item){
      if(item.nodeType===1){
        item.remove();
      }
    });
  }

  e.preventDefault();
}
