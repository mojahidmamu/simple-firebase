import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] =  useState(null)

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const githubSignIn = () => {
     signInWithPopup(auth, githubProvider)
     .tnen(result => {
      // console.log( result.user)
      setUser(result.user)
     })
    //  .catch(error => console.log('ERROR', error))
  }


  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null)
      });
  };
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      // console.log('sign out complete')
      setUser(null)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      {/* <button onClick={handleGoogleSingIn}>Login with google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}
      {
        user ?      
         <button onClick={handleSignOut}>Sign Out</button>
         :
        <>
           <button onClick={handleGoogleSingIn}>Login with google</button>
           <button onClick={githubSignIn}>login with Github</button>
        </>
      },
      {
        user && 
        <div>
          <h3>UserName:{user.displayName}</h3>
          <p>Emial: {user.email} </p>
          <img src={user.photoUrl} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;
