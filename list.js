var todos = [];
var input  = prompt("what would you like to do");



while(input !== "quit"){

    if(input === "list"){
        console.log(todos);
    }  else if(input === "new"){
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    }
   
    var input  = prompt("what would you like to do");


}

console.log("OK, YOU QUIT THE APP"); 