import "./adminHome.css";

export default function AdminHome() {
  return (
    <div className="AdminHome">
      <section className="adminheader">
        <div className="text-box">
          <h2>Hi Admin! </h2>
          {/* <h3>Click On the below links to view details for each Owner, User, Visitor</h3> */}
                
          <p>User Details   <a href="/userDetails">Click to view</a>Service Requested   <a href="/service_request_details">Click to view</a></p>
                <p>Owned Apartments  <a href="/OwnerDetails">Click to view</a> All Buildings<a href="/building_details">Click to view</a></p>
                <p>All Buildings  <a href="/building_details">Click to view</a>All Apartments   <a href="/apartment_details">Click to view</a></p>
               
                <p>Visitor Dashboard   <a href="/visitor_details">Click to view</a>Incident Reported   <a href="/incident_details">Click to view</a></p>
                <p>Garden Details<a href="/garden_details">Click to view</a> Plant List<a href="/plant_details"> Click to View</a></p>
          {/* <p>You Can Also Perform CRUD.</p> */}

        </div>
      {/* </section>
      <section className="adminservice"> */}
        <h2>To Perform CRUD Please select one.</h2>
        <div className="row">
        {/* <div className="service-col" id="validate">
            <h3>
              <a href="/admin_dashboard">
                <a>
                Dashboard
                <p id="details"><a href="./">View User Details</a></p>
                <p><a href="./">View Owner Details</a></p>
                <p><a href="./">View Owner Details</a></p>
              </a>
            </h3>
          </div> */}
          <div class="divider"/>
          <div className="service-col">
            <h3>
              <a className="btn btn-link" href="/admin_building_crud">
                Register Buildings
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col">
            <h3>
              <a href="/admin_owner_crud">
                Register Apartment and it's Owner
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col" id="validate">
            <h3>
              <a href="/admin_garden_crud">
                Register/Manage Garden and Plant
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col" id="validate">
            <h3>
              <a href="/admin_visitor_crud">
                Register/Manage Visitor
              </a>
            </h3>
          </div>
          
        </div>
      </section>
    </div>
  );
}
