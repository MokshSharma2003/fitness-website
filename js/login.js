import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const modal = document.getElementById("myModal");
const modalTxt = document.getElementById("modalText");
const span = document.getElementsByClassName("close")[0];
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOxoqov4Jogrq9Q0RmkHYzY3Wn5Xd0iZ4",
  authDomain: "test-d7e1c.firebaseapp.com",
  projectId: "test-d7e1c",
  storageBucket: "test-d7e1c.appspot.com",
  messagingSenderId: "330108016976",
  appId: "1:330108016976:web:495ab5abcfb0ab561eb455"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

document.getElementById("loginform").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements[0].value;
  const pass = event.target.elements[1].value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(async (userCredential) => {
      // Login
      const user = userCredential.user;
      console.log(user);
      modalTxt.innerText = 'Login Successful\nPlease Wait, redirecting to home page'
      modal.style.display = "block";
      await delay(2000);
      window.location.href = 'index.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      modalTxt.innerText = `An error occured, Please try again!\nERROR CODE: ${errorCode.split('/')[1]}`
      modal.style.display = "block";
    });
})

document.getElementById("signupform").addEventListener("submit", (event) => {
  event.preventDefault()
  const email = event.target.elements[0].value;
  const pass = event.target.elements[1].value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(async (userCredential) => {
      // Sign up
      const user = userCredential.user;
      console.log(user)
      modalTxt.innerText = 'Sign-Up Successful\nPlease Wait, redirecting to home page'
      modal.style.display = "block";
      await delay(2000);
      window.location.href = 'index.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      modalTxt.innerText = `An error occured, Please try again!\nERROR CODE: ${errorCode.split('/')[1]}`
      modal.style.display = "block";
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
