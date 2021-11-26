import "./residentHome.css";
import axios from "axios";
import React, {useState}  from "react";
import  { useRef } from 'react';

export default function ResidentRequestService() {

    const form = useRef();
    const [details ,setDetails] = useState({apartmentNumber:"", serviceName:"",incident:""})

    const RequestService = details=>{
        console.log("hello")
        if(details.apartmentName!="" &&details.serviceName!=""){
            console.log("You can enter data");
        }else{
            alert("Please fill the data");
        }
    }
    const requestSubmitted = e =>{
        console.log("hello")
        e.preventDefault();
        console.log("hello")
        const obj ={
            apartmentNumber:details.apartmentNumber,
            serviceName:details.serviceName,
            incident:details.incident,
  
          };
      console.log(obj);
    //   axios.post('http://localhost:8888/reactProject/residentIncident.php',obj.incident,obj.apartmentName)
    //   .then(res=> console.log(res.data))
    //     .catch(error => {
    //       alert("Service request failed. Try again")
    //       console.log(error.response)
    //          });

      axios.post('http://localhost:8888/reactProject/residentService.php',obj)
        .then(res=> console.log(res.data))
        .catch(error => {
          alert("Service request failed. Try again")
          console.log(error.response)
             });
          RequestService(details);
      
      
    }
    return (
<div class="inquiry">
    <span className="inquiryTitle">Request A Service</span>
                   <form ref={form} class="inquiryform">
                   <label class="inquirylabel" for="">Apartment #</label>
                    <input class="inquiryTextArea" type="number" id= "apartment-number" name = "apartmentNumber" onChange={e=>setDetails({...details, apartmentNumber: e.target.value})} value={details.apartmentNumber} required/>
    
                    
                    <label class="inquirylabel" for="">Service Needed</label>
                    <input class="inquiryTextArea" type="text" id= "service-req" name="serviceName" onChange={e=>setDetails({...details, serviceName: e.target.value})} value={details.serviceName} required/>
                   
                    {/* <label class="inquirylabel" for="">Choose a Date</label>
                    <input class="inquiryTextArea" type="date" id= "date" required/> */}
                
                    <label class="inquirylabel" for="message">Any Incident You Want To Report?</label>
                    <textarea class="inquiryTextArea" id="message" name="incident" rows="8" onChange={e=>setDetails({...details, incident: e.target.value})} value={details.incident}></textarea>
                    
                <button class="inquirybutton" type="submit" onClick={requestSubmitted}>SUBMIT</button>
            </form>
            
    </div>
)
}