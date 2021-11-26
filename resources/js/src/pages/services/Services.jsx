import "./services.css"

export default function Services() {
    return (
        <div className="service">
    
<h1>Services Lunamar Provides</h1>
<p>Please select from the options below according to your role. </p>
<div class="row">
    <div class="service-col">
        
        <h3><a class="btn btn-link" href="./login">Building/Apartment Management</a></h3>
        <p>Role: Admin, Manager</p>
        <p>Manager can perform CRUD operations to add, delete, edit building, apartments and their owners. An admin can additionally do all the manager related tasks with an addition of report generation. </p>
    </div>
   
    <div class="service-col">
        
        <h3><a class="btn btn-link" href="./login">Gardens/Plants/Pool/Surroundings Management</a></h3>
        <p>Role: Admin, Manager</p>
        <p>Manager can perform CRUD operations to add, delete, edit gardens and plant/pools inside them. Moreover, they can report any incident that has occured in the surrounding. An admin can additionally do all the manager related tasks with an addition of report generation. </p>

    </div>
 <div class="service-col" id="validate">
        <h3><a class="btn btn-link" href="./login">Resident Management</a></h3>
        <p>Role: Resident</p>
        <p>Residents can submit service request for their apartments like electricity, gas, WiFi etc. They can make an apartment related inquiry and chat with the management too.</p>
       
    </div>
    <div class="service-col" id="validate">
        <h3><a class="btn btn-link" href="./contactus">Visitor Management</a></h3>
        <p>Role: Visitor</p>
        <p>Visitors can submit a form for inquiry stating which apartment they want to visit to. They can chat with the management too.</p>
      <p><a href="./"> Chat With us</a></p>
    </div>
  
</div>

</div>


     
    )
}
