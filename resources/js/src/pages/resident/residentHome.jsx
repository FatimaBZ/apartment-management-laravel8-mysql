import "./residentHome.css";

export default function ResidentHome() {
  return (
    <div className="ResidentHome">
      {/* <section className="residentheader"> */}
        
      {/* </section> */}
      <section className="service">
        {/* <h1>.</h1> */}
        <div className="text-box">
          <h1>Hi Resident!</h1>
          <p>To Proceed Please Select From The Options Below</p>
        </div>
        <div className="row">
          <div className="service-col">
            <h3>
              <a className="btn btn-link" href="/resident_request_service">
                Request A Service
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col">
            <h3>
              <a href="/resident_service_details">
                Service Details
              </a>
            </h3>
          </div>
          <div class="divider"/>
          {/* <div className="service-col" id="validate">
            <h3>
              <a href="/resident_inquiry">
                Make an Inquiry
              </a>
            </h3>
          </div> */}
          <div class="divider"/>
          

          <div className="service-col" id="validate">
            <h3>
              <a href="/file_Upload">Upload File</a>
            </h3>
          </div>
          <div class="divider" />
          <div className="service-col" id="validate">
            <h3>
              <a href="/chatwithus">
                Chat With Us
              </a>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
