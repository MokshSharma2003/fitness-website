import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

const modal = document.getElementById("myModal");
const modalTxt = document.getElementById("modalText");
const span = document.getElementsByClassName("close")[0];
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const firebaseConfig = {
    apiKey: "AIzaSyDeYiHBjxaPmAdyC-pm55D2-57ed7eB4us",
    authDomain: "fit-india-2fd2a.firebaseapp.com",
    projectId: "fit-india-2fd2a",
    storageBucket: "fit-india-2fd2a.appspot.com",
    messagingSenderId: "238604748237",
    appId: "1:238604748237:web:53c277e715928328c73084"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  document.getElementById("forgetform").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = event.target.elements[0].value;

    sendPasswordResetEmail(auth,email)
      .then(async () => {
        // Login
        modalTxt.innerText = 'Reset Successful\nPlease Wait, redirecting to login page'
        modal.style.display = "block";
        await delay(2000);
        window.location.href = 'login.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        modalTxt.innerText = `An error occured, Please try again!\nERROR CODE: ${errorCode.split('/')[1]}`
        modal.style.display = "block";
      });
  })

  span.onclick = function () {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  