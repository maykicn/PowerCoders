
function createTable(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
       document.getElementById('todo-list').innerHTML =  json.map(todo => { // map metodu sadece array de kullanilir
  
          return `
              <tr> 
                  <td> ${todo.id}</td>
                  <td> ${todo.userId}</td>
                  <td> ${todo.title}</td>
              </tr>
          `
  
       }).join("") // virgulu kaldirmak icin join kullanilmasi gerekir
    });
}

createTable();




function addNewTodo(){

    let inputId = document.getElementById('id').value;
    let inputUserId = document.getElementById('userId').value;
    let inputTitle = document.getElementById('title').value;
    


    const newTodo = {
        id: inputId,
        userId: inputUserId,
        title: inputTitle
    }

    console.log(`new todo ${newTodo}`)
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(newTodo),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  createTable();
}







