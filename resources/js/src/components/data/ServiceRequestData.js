import React, { useState, useEffect} from 'react'

const AptData = () =>{
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8888/reactProject/dashboardService.php")
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
                        <th>SERVICE ID</th>
                        <th>SERVICE REQUESTED</th>
                        <th>OWNER ID OF RESIDENT</th>
                       
                    </tr>

           
                </thead>
                <tbody>
                    {
                        item.map(item =>(
                           
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.sname}</td>
                                <td>{item.empid}</td>
                                
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
  
}

export default AptData