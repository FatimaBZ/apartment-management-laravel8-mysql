import "./VisitorHome.css";
import React, {useState}  from "react";
import axios from "axios";

export default function VisitApt() {
  const [details ,setDetails] = useState({aptnum:"",firstName:"", lastName:"",msg:""});
  const VisitApt = details=>{
    if(details.aptnum != "" &&  details.firstName !="" &&  details.lastName !="" && details.msg !="" ){
        console.log("data can be sent from frontend");
        //history.push("/manager_home");            
     } 
      
    else{
      alert("Invalid/Missing Details")
    }
}
  const submitHandler = e =>{
    e.preventDefault();
    console.log("hi");
    const obj ={
      aptnum:details.aptnum,
      firstName:details.firstName,
      lastName:details.lastName,
      msg:details.msg
     
    };
console.log(obj);
axios.post('http://localhost:8888/reactProject/visitor_apt.php',obj)
.then(res=> console.log(res.data))
.catch(error => {
  console.log(error.response)
});

VisitApt(details);
//window.location.reload();
   

}
  return (
<div class="inquiry">
          <span className="inquiryTitle">Visit Apartment</span> 
            <form class="inquiryform">
                    <label class="inquirylabel">Apartment #</label>
                    <input class="inquiryTextArea" type="number" name="aptnum" onChange={e=>setDetails({...details, aptnum: e.target.value})} value={details.aptnum} required/>
                    
                    
                    <label class="inquirylabel">First Name</label>
                    <input class="inquiryTextArea"type="text" name="firstName" onChange={e=>setDetails({...details, firstName: e.target.value})} value={details.firstName} required/>
                    
                    <label class="inquirylabel">Last Name</label>
                    <input class="inquiryTextArea"type="text" name="lastName" onChange={e=>setDetails({...details, lastName: e.target.value})} value={details.lastName} required/>
 
                    <label class="inquirylabel" for="message">Query </label>
                    <input class="inquiryTextArea" type="text" name="msg" onChange={e=>setDetails({...details, msg: e.target.value})} value={details.msg} required/>
                                       
                
                    <button className="inquirybutton" onClick={ submitHandler }>Submit</button>
            </form>
            
    

</div>
);
}