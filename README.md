# Web Data Management
### Lunamar Management

**Team Members**
* Begum, Fatima Zohra - 1001880881
* Damale, Maitreyee - 1001878520
* Shaikh, Sarah Fatema - 1001855185

**System Design**
1. Admin
> The admin has the following functionalities:
* Can Register Buildings
* Can Register Apartment and it’s Owner
* Can Register/Manage Garden and Plants
* Register/ Manager Visitor
* Can view User Details, Requested Services, Owned Apartments, All buildings and apartments, reported incidents, garden and plant details.
* The admin can also visit visitor dashboard

2. Manager
> The manager has the following functionalities:
* Can Register Buildings
* Can Register Apartment and it’s Owner
* Can Register/Manage Garden and Plants
* Register/ Manager Visitor
* Can view User Details, Requested Services, Owned Apartments, All buildings and apartments, reported incidents, garden and plant details.
* The manager can also visit visitor dashboard

3. Resident
> The Resident has the following functionalities:
* Can Request a service 
* Can view service details
* Can upload a file
* Can chat with us

4. Visitor
> The visitor has the following functionalities:
* Can visit an apartment
* Can visit a garden
* Can chat with us

**Tables**
|Table Name| Columns|
|----------|--------|
|Apartment_details| Anum, BNum|
|Building_details| Bnum, Bname, Baddress|
|Chat_messages| Id, Name, Time, Messages|
|Incident| Id, Incident, Empid|
|Owner_Details| Anum, FirstName, LastName, OwnerId|
|Plant| PId, PName, SId|
|Service_Details| Id, Sname, Price, Tax|
|Service_Request| Id, Sname, EmpId|
|Surrounding_Details| SId, Sname|
|User_Details| EmpId, Fname, Lname, Passwrd, Rolename, Email|
|Visitor| Id, Fname, Lname, Anum, GardenName, Message|

**Installations**
1. Bootstrap
2. Laravel
3. Npm
4. Node.js
5. Fruitcake / Laravel-cors
6. MySQL
7. Websocket
8. Nodemon
9. Postman for API call testing
