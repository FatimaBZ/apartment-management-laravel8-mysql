import React, { useState, useEffect} from 'react'

const UserData = () =>{
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8888/reactProject/dashboardUser.php")
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
                        <th>EMP ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL ID</th>
                        <th>ROLENAME</th>
                    </tr>

           
                </thead>
                <tbody>
                    {
                        item.map(item =>(
                           
                            <tr key={item.empid}>
                                <td>{item.empid}</td>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.email}</td>
                                <td>{item.rolename}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
  
}

export default UserData