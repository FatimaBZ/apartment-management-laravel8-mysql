import React, { useState, useEffect} from 'react'

const OwnerData = () =>{
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8888/reactProject/dashboardOwner.php")
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
                        <th>APARTMENT#</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>OWNERID ID</th>
                        
                    </tr>

           
                </thead>
                <tbody>
                {
                        item.map(item =>(
                           
                            <tr key={item.anum}>
                                <td>{item.anum}</td>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.ownerid}</td>
                               
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
  
}

export default OwnerData