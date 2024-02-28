

let todos = [
    {id:1,title:"lets go  walk" ,dueDate:"2024-02-28"},
    {id:2,title:"go for shopping",dueDate:"2024-02-29"},

];

// add todo

let btn = document.getElementById('btn');

btn.addEventListener('click',addTodo);

function addTodo(){
    let title =document.getElementById('title').value;
    let dueDate = document.getElementById('dueDate').value;
    let id = new Date().getTime();
    todos.push({id:id,title:title,dueDate:dueDate})
    render();
}


//update

let indexValue;
function updateTodo(e){

    e.preventDefault();
    let id = Number(e.target.id)
    let data = todos.filter((todo,index)=>{
     
        indexValue =index;

        return todo.id ===id;
    })

    indexValue = id;

    document.getElementById('title').value = data[0].title;
    document.getElementById('btn');
    document.getElementById('btn').style ="display:none";
    let ubtn = document.createElement("button");
    ubtn.textContent = 'saveupdate';
    ubtn.id = "updateId";
    ubtn.onclick = saveTodo;

    let form = document.getElementById('form');

    form.append(ubtn);

}

function saveTodo(){

    document.getElementById("updateId").style ="display:none";
    document.getElementById('btn').style="display:block";
    let title = document.getElementById('title').value;
    let obj = todos[indexValue]

    todos[indexValue]={...obj,title:title}


}

// delete

// view/ read / display 

const render = function(){
 
    document.getElementById("render").innerHTML ="";
    todos.map((todo)=> {

        
        let div = document.createElement("div");
        div.textContent = todo.title + " "+ todo.dueDate;
        let render = document.getElementById("render");
        let updateBtn = document.createElement("button");
        updateBtn.textContent="update";
        updateBtn.id = todo.id;
        updateBtn.style="margin-left:12px;margin-top:12px";
        updateBtn.onclick=updateTodo;
        div.append(updateBtn)

        render.append(div);

    });

};

render();