
let userlist = [];
fetch('http://localhost:3000/users')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    data.forEach(element => {
      userlist.push(element.username);
    });
  })


let submitbtn = document.getElementById("subBtn");
submitbtn.onclick = function () { submitlogin() };

function submitlogin() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  if (userlist.includes(username.value)) {
    if (password.value == "1234") {
      window.location.replace("index.html");
      window.myvar = username.value;
      localStorage.setItem('username',username.value)
    }
  }
}
