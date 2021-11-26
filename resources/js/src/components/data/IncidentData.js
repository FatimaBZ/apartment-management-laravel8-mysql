import React, { useState, useEffect} from 'react'

const IncidentData = () =>{
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8888/reactProject/dashboardIncident.php")
        .then(res => res.json())
        .then(
            (result)=>{
                console.log(result)
                setItem(result)
            }
        )
    },[])
    return (
        <div className="row">
            {/* <div className="d_flex my-4, text-uppercase">
                <h1>Fetching User Details from user_details table in MySQL lunamar database</h1>
            </div> */}
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>INCIDENT REPORTED</th>
                        <th>OWNERID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                    </tr>

           
                </thead>
                <tbody>
                {
                        item.map(item =>(
                           
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.incident}</td>
                                <td>{item.ownerid}</td>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
  
}

export default IncidentData