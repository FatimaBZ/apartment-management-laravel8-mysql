import "./VisitorHome.css";
import React, {useState}  from "react";
import axios from "axios";

export default function VisitGarden() {
  const [details ,setDetails] = useState({gname:"", firstName:"",lastName:"",msg:""});
  const VisitGarden = details=>{
    if(details.gname != "" &&  details.firstName !="" &&  details.lastName !="" && details.msg !="" ){
        console.log("data can be sent from frontend");
        //history.push("/manager_home");            
     } 
      
    else{
      alert("Invalid/Missing Details")
    }
}
  const submitHandler = e =>{
    e.preventDefault();
    const obj ={
      gname:details.gname,
      firstName:details.firstName,
      lastName:details.lastName,
      msg:details.msg
     
    };
console.log(obj);
axios.post('http://localhost:8888/reactProject/visitor_garden.php',obj)
.then(res=> console.log(res.data))
.catch(error => {
  console.log(error.response)
     });
VisitGarden(details);
//window.location.reload();
   

}
  return (
<div class="inquiry">
          <span className="inquiryTitle">Visit Garden</span> 
            <form class="inquiryform">
                    <label class="inquirylabel">Garden Name</label>
                    <input class="inquiryTextArea" type="text" name="gname" onChange={e=>setDetails({...details, gname: e.target.value})} value={details.gname} required/>
                    
                    <label class="inquirylabel">First Name</label>
                    <input class="inquiryTextArea"type="text" name="firstName" onChange={e=>setDetails({...details, firstName: e.target.value})} value={details.firstName} required/>
                    
                    <label class="inquirylabel">Last Name</label>
                    <input class="inquiryTextArea"type="text" name="lastName" onChange={e=>setDetails({...details, lastName: e.target.value})} value={details.lastName} required/>
 
                    <label class="inquirylabel" for="message">Query</label>
                    <input class="inquiryTextArea" type="text" name="msg" onChange={e=>setDetails({...details, msg: e.target.value})} value={details.msg} required/>
                    
                
                    <button className="inquirybutton" onClick={ submitHandler }>Submit</button>
            </form>
            
    

</div>
);
}