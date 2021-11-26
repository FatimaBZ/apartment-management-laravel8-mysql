import React, { useState, useEffect} from 'react'

const BuildingData = () =>{
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch("/home/fxb0881/public_html/reactProject/dashboardBuilding.php",{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
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
                        <th>BUILDING#</th>
                        <th>BUILDING NAME</th>
                        <th>BUILDING ADDRESS</th>
                        
                        
                    </tr>

           
                </thead>
                <tbody>
                {
                        item.map(item =>(
                           
                            <tr key={item.bnum}>
                                <td>{item.bnum}</td>
                                <td>{item.bname}</td>
                                <td>{item.baddress}</td>
                               
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
  
}

export default BuildingData