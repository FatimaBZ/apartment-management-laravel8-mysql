import React, {useState}  from "react";
import  { useRef } from 'react';
import validator from 'validator'
import "./register.css"
import { useHistory } from "react-router-dom";
//import { SMTPClient } from 'emailjs';
import emailjs from 'emailjs-com';
import axios from "axios";


export default function Register() {
  const form = useRef();
  const [details ,setDetails] = useState({firstname:"", lastname:"",email:"", password:"",repassword:"", role:""})
  const history = useHistory();
  const Registeration = details=>{
    
    if(details.password!=""&&details.firstname!=""&&details.lastname!=""&&details.email!=""&&details.role!=""&&details.repassword!="")
    {
      if(details.role==="Admin" ||details.role==="Manager" ||details.role==="Visitor"||details.role==="Resident"){
        
        if(details.password!=details.repassword)
        {
          alert("password doesn't match");
          }
          else if (!validator.isEmail(details.email)) 
          {
            alert('Invalid Email');
          } 
          else
          {
            history.push("/");
          emailjs.sendForm('service_nz0158o', 'template_kvml0g5', form.current, 'user_FToWdb01vYWbtBVQSss1A')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          }
        } 
        else{
          alert("Please fill the data");
      }
    }
  
      else{
        alert("Incorrect Role");
        window.location.reload();
      }
  
      
      
      
      
    }
  


    const submitHandler = e =>{
        e.preventDefault();
        const obj ={
          firstname:details.firstname,
          lastname:details.lastname,
          email:details.email,
          password:details.password,
          role:details.role

        };
    console.log(obj);
    axios.post('http://localhost:8888/reactProject/register.php',obj)
    .then(res=> console.log(res.data))
    .catch(error => {
      alert("Data could not be inserted. Try again")
      console.log(error.response)
         });
        Registeration(details);
       

    }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form ref={form} className="registerForm">
        <label>First Name</label>
        <input className="registerInput" name="firstname" type="text" placeholder="Enter First Name" onChange={e=>setDetails({...details, firstname: e.target.value})} value={details.firstname} required/>
        <label>Last Name</label>
        <input className="registerInput" name="lastname" type="text" placeholder="Enter Last Name" onChange={e=>setDetails({...details, lastname: e.target.value})} value={details.lastname} required/>
        <label>Email</label>
        <input className="registerInput" name="email" type="email" placeholder="Enter Email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email} required/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter Password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password} required/>
        <label>Re-enter Password</label>
        <input className="registerInput" type="password" placeholder="Re-Enter Password" onChange={e=>setDetails({...details, repassword: e.target.value})} value={details.repassword} required/>
        <label>Role</label>
        <input className="registerInput" name="role" type="text" placeholder="Enter Roles" onChange={e=>setDetails({...details, role: e.target.value})} value={details.role} required/>
        <button className="registerButton" onClick={submitHandler}>Register</button>
      </form>
     
    </div>
    )
}
