import { useEffect, useState } from 'react';
import {getAuth,signInWithEmailAndPassword,signInWithPopup,signOut,GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail,getIdToken,updateProfile  } from "firebase/auth"
import iniatializeAppAuth from '../../Firebase/firebase.init';
iniatializeAppAuth()
const auth=getAuth()
const googleProvider=new GoogleAuthProvider()
const useFirebase = () => {
    const [user,setUser]=useState({})
    const [admin,setAdmin]=useState(false)
    const [error,setError]=useState('')
const [isLoading,setIsLoading]=useState(true)

// google login 
    const signInGoogle=()=>{
        setIsLoading(true)
 return signInWithPopup(auth,googleProvider)
.then(result=>{
    const user=result.user
    setUser(user)
    saveUserToDB(user.email,user.displayName,user.photoURL,'PUT')
    setError('')
})
.catch(error=>{
    setError(error.message)
})
.finally(()=>{
    setIsLoading(false)
})
    }

// state change save 
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,user=>{
            if(user){
                getIdToken(user)
                .then(idToken=>{
                    localStorage.setItem("idToken",idToken)
                })
                setUser(user)
            }
            setIsLoading(false)
        })
return ()=> unsubscribe
    },[user])

    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.Admin))
    },[user.email])

 const restPassword=(email)=>{
 sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    setError('')
  })
  .catch((error) => {
    setError(error.message);
    // ..
  });
 }
 const saveUserToDB=(email,name,pic,method)=>{
    const user={email,name,pic}
    fetch('http://localhost:5000/user_data',{
        method:method,
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then()
}
const signUp=(email,password,name,profile)=>{
 return createUserWithEmailAndPassword(auth,email,password)
.then(result=>{
    setUser(result.user)
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: profile
      }).then((user) => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      saveUserToDB(email,name,profile,'POST')
    setError('')
})
.catch(error=>{
    setError(error.message)

})
    }
    // email login 
    const signIn=(email,password)=>{
        setIsLoading(true)
     return  signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user)
            setError('')
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>{setIsLoading(false)})
    }
    // logout ,sigout 
    const logOut=()=>{
        setIsLoading(true)
signOut(auth)
.then(()=>{
    setUser({})
    setError('')
})
.catch(error=>{
    setError(error.message)
})
.finally(()=>{setIsLoading(false)})
    }
    return {
        user,
        error,
        admin,
        isLoading,
        signInGoogle,
        signUp,
        logOut,
        signIn,
        restPassword,
    }
};

export default useFirebase;