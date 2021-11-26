import React, {useState} from "react";
import validator from 'validator'
import "./login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Login(props) {
    const adminUser = {
        email:"test@admin.com",
        password:"admin123",
        role:""
    }

    const history = useHistory();

    const LoginUser = details=>{
        if(details.email != "" &&  details.password !="" ){
            console.log("Manager Logged in");
            //history.push("/manager_home");            
         } 
         //else if(details.email == adminUser.email &&  details.password == adminUser.password && details.role == "Admin"){
        //   console.log("Admin Logged in");
        //   history.push("/admin_home");
        // } else if(details.email === adminUser.email &&  details.password === adminUser.password && details.role === "Resident"){
        //   console.log("Resident Logged in");
        //   history.push("/resident_home");
        // } 
        else{
          alert("Invalid Details")
        }
    }

    const [details ,setDetails] = useState({email:"", password:""});

    const submitHandler = e =>{
        const { handleLogin } = props;
        e.preventDefault();
       
        
        
        const obj ={
          email:details.email,
          password:details.password,
          // email:details.email,
          // password:details.password,
          // role:details.role

        };
        
    console.log(obj);
    axios.post('http://localhost:8888/reactProject/login.php',obj)
    .then(res=> {
      let json_array = res.data[0];
      console.log(json_array);
      if(json_array.rolename=="Resident"){
        history.push("/resident_home");
        //console.log("res");
      }
      else if(json_array.rolename=="Manager"){
        history.push("/manager_home");
        //console.log("res");
      }
      else if(json_array.rolename=="Admin"){
        history.push("/admin_home");
        //console.log("res");
      }
      else if(json_array.rolename=="Visitor"){
        history.push("/visitor_home");
        //console.log("res");
      }
      else{
        alert("Your role has to be Admin, Manager, Resident or Visitor")
      }

    })
    .catch(error => {
      alert("Login could not be performed. Try again")
      console.log(error.response)
         });
        //history.push('/manager_home');

        LoginUser(details);
        handleLogin(details.email);
    }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" >
        <label>Email</label>
        <input className="loginInput" id="email" type="email" placeholder="Enter your email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email} />
        <label>Password</label>
        <input className="loginInput" id="password" type="password" placeholder="Enter your password" required="" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
        {/* <label>Role</label>
        <input
            type="text"
            className="loginInput"
            id="role"
            placeholder="Enter Role (Admin, Manager, Resident)"
            
            onChange={e=>setDetails({...details, role: e.target.value})} value={details.role}
          /> */}
        <button className="loginButton" onClick={submitHandler}>Login</button>
      </form>
        
    </div>
  );
}