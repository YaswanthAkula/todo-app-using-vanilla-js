function show(){
    if(TODOS.length == 0){
       document.getElementById("empty").innerHTML = "No items to show!";
    } else {
        var ulele = document.getElementById("empty");
            for(var i=0;i<TODOS.length;i++){
            var li = document.createElement("li");
             li.innerHTML = '<a onclick=updateTodo(' + TODOS[i].id +')>' + TODOS[i].title + '</a>' + 
                 '<button onclick=deleteTodo(' + TODOS[i].id +')>Del</button>';
            ulele.appendChild(li);
        } 
    }
}

function deleteTodo(id){
    var tempId = id;
     for(var i=0; i<TODOS.length; i++){
         if(TODOS[i].id == tempId){
            TODOS.pop(TODOS[i]);
        }
    }
   window.localStorage.setItem(lsTODOSKEY, JSON.stringify(TODOS));
    window.location.reload();
}

function updateTodo(id) {
     window.location = ('/todoAndUpdate.html?id=' + id);
}
