const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});

document.getElementById("loginform").addEventListener("submit",(event)=>{
  event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    location.replace("welcome.html")
  }
})

function login(){
  const email =document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email,password)
}
