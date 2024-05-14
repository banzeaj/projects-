

let data =[
    { id: 1, name:"antonio", email:"antonio@gmail.com"},
    {id:2, name:"banze", email:"banzegmail.com"},
];

function readAll(){

    var tabledata = document.querySelector(".table_data");
    var elements ="";

    data.map(obj=>(

        elements += `<tr>
        <td>${obj.name}</td>
        <td>${obj.email}</td>
        <td>
        <button>Update</button>
        <button>Delete</button>
        <td>

        
        </tr>`
    ))   

    tabledata.innerHTML = elements;
}

function  create(){

    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var obj = {id:3, name: name, email: email};
    data.push(obj);
    readAll();
    document.querySelector(".name").value ="";
    var email = document.querySelector(".email").value = "";
    
}