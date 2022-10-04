
fetch('http://127.0.0.1:3000/tasks')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    data.forEach(element => {
    listelement = document.createElement("li") 
    deletebutton = document.createElement("button")
    updatebutton = document.createElement("button")
    deletebutton.id = "Behan"
    updatebutton.id = "UpdateBtn"
    listelement.innerHTML = element.title;
    listelement.dataset["id"] = element.id
    listelement.append(deletebutton)
    listelement.append(updatebutton)

    deletebutton.onclick = function(){
        DeleteAndDeleteFetch(element.id)
        location.reload();
    }
    updatebutton.onclick = function(){
      let Updatedvalue = prompt('Change your Task')
        UpdateAndUpdateFetch(element.id,Updatedvalue)
        location.reload();
    }

    ul = document.getElementById("Tasklist");
    ul.append(listelement);
  } );
});
4

document.querySelector('form').addEventListener("submit", function (event) {
    let Mainlist = document.getElementById("Tasklist");
    let listelem = document.createElement("li");
    let DeleteBtn = document.createElement("button");
    let Task = document.getElementById("TaskInput").value;

    DeleteBtn.className = "DeleteBtn";
    DeleteBtn.id = "DeleteBtn";
    DeleteBtn.innerHTML = "Delete";
    listelem.innerHTML = Task;
    Mainlist.appendChild(listelem);

    let DataString = {title : Task} 
    fetch("http://127.0.0.1:3000/tasks",{
    method : "POST",
    body: JSON.stringify(DataString),
    headers: {
        'Content-Type': 'application/json',
      },
})
.then((response) => response.json())
.then((data) => {
  alert('Success: Your Task got Created!');
})
location.reload();
})

function DeleteAndDeleteFetch(id){

    fetch('http://127.0.0.1:3000/task/' + id, {
        method: 'DELETE',
      })
      .then(res => res.text()) // or res.json()
      .then(res =>{
        alert("Your Task was successfully deleted!")
      } 
        )

    }

    function UpdateAndUpdateFetch(id,param){
        let example = {"id":id,"title" : param,"completed":false}
        fetch('http://127.0.0.1:3000/tasks', {
            method: 'PUT',
            body: JSON.stringify(example),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
        
    }



