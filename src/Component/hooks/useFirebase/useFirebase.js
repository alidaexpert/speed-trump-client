import { useEffect, useState } from 'react';
import {getAuth,signInWithEmailAndPassword,signInWithPopup,signOut,GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail,getIdToken } from "firebase/auth"
import iniatializeAppAuth from '../../Firebase/firebase.init';
iniatializeAppAuth()
const auth=getAuth()
const googleProvider=new GoogleAuthProvider()
const useFirebase = () => {
    const [user,setUser]=useState({})
    const [error,setError]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
const [isLoading,setIsLoading]=useState(true)

// google login 
    const signInGoogle=()=>{
        setIsLoading(true)
return signInWithPopup(auth,googleProvider)
.then(result=>{
    setUser(result.user)
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
        onAuthStateChanged(auth,user=>{
            if(user){
                getIdToken(user)
                .then(idToken=>{
                    localStorage.setItem("idToken",idToken)
                })
                setUser(user)
            }
            setIsLoading(false)
        })

    },[])

    // input set 
    const inputEmail=e=>{
        setEmail(e.target.value)
    }
    const inputPassword=e=>{
        setPassword(e.target.value)
    }
 const restPassword=()=>{
   return sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    setError(error.message);
    // ..
  });
 }
const signUp=()=>{
 return createUserWithEmailAndPassword(auth,email,password)
.then(result=>{
    setUser(result.user)
})
.catch(error=>{
    setError(error.message)
})
    }
    // email login 
    const signIn=()=>{
        setIsLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user)
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
})
.catch(error=>{
    setError(error.message)
})
.finally(()=>{setIsLoading(false)})
    }
    return {
        user,
        error,
        isLoading,
        signInGoogle,
        inputPassword,
        inputEmail,
        signUp,
        logOut,
        signIn,
        restPassword,
    }
};

export default useFirebase;