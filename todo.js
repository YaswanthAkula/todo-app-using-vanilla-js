console.log(window.location.href);
// check url parameters: id
var _id = getParameterByName('id', window.location.href), _index;
console.log(_id);

// set button label
if(_id) {
    // update
    document.getElementById('btn-save').innerHTML = 'Update';
    // set todo
    for(var i=0; i<TODOS.length; i++) {
         if(TODOS[i].id == _id) {
             _index = i;
             // set todo
            setTodo(TODOS[i]);
         }
    }
} else {
    // add
    document.getElementById('btn-save').innerHTML = 'Add';
}

function setTodo(todo){
    document.getElementById("todo-title").value = todo.title;
    document.getElementById("todo-desc").value = todo.desc;
}

function save() {
    var title = document.getElementById("todo-title").value;
    var desc = document.getElementById("todo-desc").value;
    
    var todo = {
        "title": title,
        "desc": desc
    };
    
    if(_id) {
        // update
        todo.id = _id;
        TODOS.splice(_index, 1, todo);
    } else {
        // add
        todo.id = Math.ceil(Math.random()*10000);
        TODOS.push(todo);
    }
    
    window.localStorage.setItem(lsTODOSKEY, JSON.stringify(TODOS));
}
