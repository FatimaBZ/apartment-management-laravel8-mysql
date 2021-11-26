import "./VisitorHome.css";

export default function VisitorHome() {
  return (
    <div className="VisitorHome">
      {/* <section className="residentheader"> */}
        
      {/* </section> */}
      <section className="service">
        {/* <h1>.</h1> */}
        <div className="text-box">
          <h1>Hi Visitor!</h1>
          <p>To Proceed Please Select From The Options Below</p>
        </div>
        <div className="row">
          <div className="service-col">
            <h3>
              <a className="btn btn-link" href="/visitor_Apt">
                Visit Apartment
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col">
            <h3>
              <a href="/visitor_Garden">
                Visit Garden
              </a>
            </h3>
          </div>
          <div class="divider"/>
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
