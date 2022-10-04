document.querySelector('form').addEventListener("submit",function(event){
    id  = 2;
    fetch('http://127.0.0.1:3000/task/' + id, {
        method: 'DELETE',
      })
      .then(res => res.text()) // or res.json()
      .then(res => console.log(res))
    })