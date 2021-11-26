import "./managerhome.css";

export default function ManagerHome() {
  return (
    <div className="ManagerHome">
      <section className="managerheader">
        <div className="text-box">
          <h1>Hi Manager!</h1>
          {/* <p>Below Are Your CRUD Options</p> */}
          <p>User Details   <a href="/userDetails">Click to view</a>Service Requested   <a href="/service_request_details">Click to view</a></p>
                <p>Owned Apartments  <a href="/OwnerDetails">Click to view</a> All Buildings<a href="/building_details">Click to view</a></p>
                <p>All Buildings  <a href="/building_details">Click to view</a>All Apartments   <a href="/apartment_details">Click to view</a></p>             
                <p>Visitor Dashboard   <a href="/visitor_details">Click to view</a>Incident Reported   <a href="/incident_details">Click to view</a></p>
                <p>Garden Details<a href="/garden_details">Click to view</a>Plant List<a href="/plant_details">Click to view</a></p>
              
        </div>
      {/* </section>
      <section className="managerservice"> */}
        <p>Please Select One Option to Perform CRUD</p>
        <div className="row">
          <div className="service-col">
            <h3>
              <a className="btn btn-link" href="/manager_building_crud">
                Register Buildings
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col">
            <h3>
              <a href="/manager_owner_crud">
                Register Apartment and it's Owner
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col" id="validate">
            <h3>
              <a href="/manager_garden">
                Register/Manage Garden and Plants 
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col" id="validate">
            <h3>
              <a href="/manager_visitor">
                Register/Manage Visitor
              </a>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
