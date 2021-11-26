import React, { useState, useEffect} from 'react'

const AptData = () =>{
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8888/reactProject/dashboardGarden.php")
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
                        <th>GARDEN NAME</th>
                        
                    </tr>

           
                </thead>
                <tbody>
                    {
                        item.map(item =>(
                           
                            <tr key={item.sid}>
                                <td>{item.sid}</td>
                                <td>{item.sname}</td>
                                
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