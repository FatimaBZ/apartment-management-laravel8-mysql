import "./residentHome.css";

export default function ResidentInquiry() {
  return (
<div class="inquiry">
          <span className="inquiryTitle">Inquiry for Residents</span> 
            <form class="inquiryform">
                    <label class="inquirylabel" for="">Apartment #</label>
                    <input class="inquiryTextArea" type="text" id= "apartment-number" required/>
                    
                    <label class="inquirylabel" for="">Full Name</label>
                    <input class="inquiryTextArea"type="text" id= "name" required/>
                    
                    <label class="inquirylabel" for="message">Query</label>
                    <textarea class="inquiryTextArea" id="message" rows="8"></textarea>
                    
                
                <button class="inquirybutton"type="submit" onclick="requestSubmitted()">SUBMIT</button>
            </form>
            
    

</div>
);
}