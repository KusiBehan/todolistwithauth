document.querySelector('form').addEventListener("submit",function(event){

const Ume = { id : 6, title : "Dietike",completed :'false'}

fetch("http://127.0.0.1:3000/tasks",{
    method : "POST",
    body: JSON.stringify(Ume),
    headers: {
        'Content-Type': 'application/json',
      },
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', Ume);
})
.catch((error) => {
  console.error('Error:', error);
})})    