const container=document.querySelector('.task-container');

var inputValue=document.querySelector('.input');
const add=document.querySelector('.add');

if(window.localStorage.getItem("todos")==undefined){
    var todos=[]
    window.localStorage.setItem("todos",JSON.stringify(todos));
}

var todosEx=window.localStorage.getItem("todos");
var todos=JSON.parse(todosEx);

class item{
    constructor(name){
        this.createItem(name);
    }
    createItem(name){
        var itemBox=document.createElement('div');
        itemBox.classList.add('item');

        var boxItem1=document.createElement(div);
        boxItem1.classList.add('.item1');

        var boxItem2=document.createElement(div);
        boxItem2.classList.add('.item2');

        var boxItem3=document.createElement(div);
        boxItem3.classList.add('.item3');

        var boxItem4=document.createElement(div);
        boxItem4.classList.add('.item4');

        var input=document.createElement(input)
        input.type="text";
        input.disabled=true;
        input.value=name;
        

        var select=document.createElement('select');
        select.name="item-status";
        select.disabled=true;
        
        var option1=document.createElement('option');
        option1.value="ToDo";
        option1.innerHTML="To Do";

        var option2=document.createElement('option');
        option2.value="InProgress";
        option2.innerHTML="In Progress";

        var option3=document.createElement('option');
        option3.value="Completed";
        option3.innerHTML="Completed";

        var editIcon=document.createElement('i');
        editIcon.classList.add("fa-solid");
        editIcon.classList.add("fa-pen");

        var edit=document.createElement('button');
        edit.classList.add("editButton");
        edit.addEventListener('click',()=>this.edit(input,name));

        var rIcon=document.createElement('i');
        rIcon.classList.add("fa-solid");
        rIcon.classList.add("fa-trash-can");

        var remove=document.createElement('button');
        remove.classList.add('removeButton');
        edit.addEventListener('click',()=>this.remove(itemBox,name));

        container.appendChild(itemBox);
        
        itemBox.appendChild(boxItem1);
        itemBox.appendChild(boxItem2);
        itemBox.appendChild(boxItem3);
        itemBox.appendChild(boxItem4);

        boxItem1.appendChild(input);
        
        boxItem2.appendChild(select);
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);

        boxItem3.appendChild(edit);
        edit.appendChild(editIcon);

        boxItem4.appendChild(remove);
        remove.appendChild(rIcon);
        
    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}


new item("sport");