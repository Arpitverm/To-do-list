let todolist=[];
display();
function todo(){
  let inputele=document.querySelector("#to-do-input");
  let datele=document.querySelector('#todo-date');
  let datel=datele.value;
  datele.value='';
  let inputel=inputele.value;
  obj={
    items:inputel,
    datee:datel
  }
  todolist.push(obj);
  inputele.value='';
  display();
}
function  display(){
  let ele=document.querySelector(".todo-container");
  
  let newHtml='';
  for(let i=0;i<todolist.length;i++){
    newHtml+=`<div class="todocontainer"><span>${todolist[i].items}</span>
    <span>${todolist[i].datee}</span>
    <button class="ff" onclick="deleteTodo(${i})">Delete</button></div>`;}
    ele.innerHTML=newHtml;
  
}
function deleteTodo(n){
  todolist.splice(n,1);
  display();
}