import React, {useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {LoginForm} from '../../components/login/Login.comp';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';

import "./entry.style.css";

export const Entry= () => {
  const [frmLoad,setFrmLoad]=useState("login");
  // const [email,setEmail]=useState("");
  // const [password,setPassword]=useState("");
 

  // const handleOnchange =(e) =>{
  //   const { name,value } =e.target;

  //   switch(name){
  //     case "email":
  //       setEmail(value)
  //       break;
  //     case "password":
  //       setPassword(value)
  //       break;
  //     default:
  //       break;  
  //   }
  //  // console.log(name, value);
   
  // };
  // const handleOnSubmit =(e) =>{
  //   e.preventDefault()

  //   if(!email || !password){
  //     return alert("Fill up all the form");
  //   }

  //   //TODO call api to submit the form
  //  };
   const handleOnResetSubmit =(e) =>{
    // e.preventDefault()

    // if(!email ){
    //   return alert("Please enter the email");
    // }
    // console.log(email);
    // //TODO call api to submit the form
   };
   

   const formSwitcher = (frmType) =>{
    setFrmLoad(frmType);
   };
  return( 
  <div className="entry-page bg-info"> 
   <Jumbotron className="form-box">
    {frmLoad ==="login" && (
        <LoginForm 

        formSwitcher={formSwitcher}

         />
    )}
    {frmLoad ==="rest" && (
         <ResetPassword 
        //handleOnchange={handleOnchange}
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher={formSwitcher}
       // email={email}              
        />
    )}    
   </Jumbotron>
  
  
  </div>
  );
};
