import React,{useState,useEffect} from 'react';
import firebase from 'firebase';


const auth=firebase.auth();
firebase.initializeApp({
  apiKey: "AIzaSyDRrC6bJJLD2gSRot69EVYUkgE6wqi0NFE",
  authDomain: "sign-project-e6d2f.firebaseapp.com",
  projectId: "sign-project-e6d2f",
  storageBucket: "sign-project-e6d2f.appspot.com",
  messagingSenderId: "309878014994",
  appId: "1:309878014994:web:eaa5ec6313b3307d1344cb"
})
const App=()=>{
  const [user,setUser]=useState(null);
 useEffect(()=>{
auth.onAuthStateChanged(person=>{
  if(person){
    setUser(person);
  }
  else{
    setUser(null);
  }
})
 },[])
  const signInWithGoogle = async() => {
try{
await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
catch(err){
  console.log(err);
}
  }
  return(
    <div>
      <center>
        {user ? <div>
<h1>Welcome To Home</h1>
<button>Sign Out</button>
        </div>:
        <button onClick={signInWithGoogle}>Sign In With Google</button>
}
      </center>
    </div>
  )

}
export default App;
