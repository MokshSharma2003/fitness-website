firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
      location.replace("login.html")
    }
  })