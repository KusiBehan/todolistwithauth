document.addEventListener("DOMContentLoaded", () => {
    const postform = document.getElementById("inputform");
    const danger =document.getElementById("danger");


    postform.addEventListener("submit" , async (event) => {
        event.preventDefault();
        const Password = document.getElementById("Password");
        const Email = document.getElementById("Email");

        let putData = {
            'email': Email.value,
            'password': Password.value,
        };
        if (Password.value === "m294") {

            await fetch('http://localhost:3000/auth/cookie/login', {
                credentials: 'include',
                method: 'POST',
                headers: {
                     'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(putData)

            }).then(function(data){
                return data.json()
            }
            .catch((e) =>{
              alert(e)
            }));
            alert('logged in')
            window.location.replace("index.html");
        } else {
            danger.style.display = "block";
            event.preventDefault();
        }


    })

}
)