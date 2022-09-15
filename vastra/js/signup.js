let email = document.getElementById('inputEmail');
let password = document.getElementById('inputPassword');
let conPass = document.getElementById('confirmPassword');
document.getElementById('submit').addEventListener('click',()=>{

    let msg = document.getElementById('email');
    let msgPass = document.getElementById('password');
    let conPassMsg = document.getElementById('p');
    if(email.value == null || email.value == ""){
        msg.innerText = "Must fill your email Id";
    }else if(password.value == null || password.value == "" || password.value.length < 6){
        msgPass.innerText = "Enter min 6 latters";
    }else if(conPass.value !== password.value || conPass == ""){
        conPassMsg.innerText = "Please re-enter Password"
    }else{
        let successMsg = document.getElementById('successMsg');
        sucessMsg.innerText = "Sucessfully Sign in";
        console.log(email.value);
        console.log(password.value);
        email.value = "";
        password.value = "";
        conPass.value = "";
    }
       
})