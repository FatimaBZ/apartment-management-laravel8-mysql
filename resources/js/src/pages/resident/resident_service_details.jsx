import "./residentHome.css";

export default function ResidentServiceDetails() {
    return (

<div className="serviceTable">
        
            <table className="stable">
                <tr className="srow">
                  <th className="sheader">#</th>
                  <th className="sheader">Service</th>
                  <th className="sheader">Cost</th>
                  <th className="sheader">Tax</th>
                </tr>
                <tr className="srow">
                  <td>1</td>
                  <td>Water</td>
                  <td>$99</td>
                  <td>$2</td>
                </tr>
                <tr className="srow">
                    <td>2</td>
                    <td>Electricity</td>
                    <td>$80</td>
                    <td>$5</td>
                </tr>
                <tr className="srow">
                    <td>3</td>
                    <td>Gas</td>
                    <td>$35</td>
                    <td>$3</td>
                </tr>
                <tr className="srow">
                    <td>4</td>
                    <td>WiFi</td>
                    <td>$998</td>
                    <td>$2</td>
                </tr>
                <tr className="srow">
                    <td>5</td>
                    <td>Water</td>
                    <td>$67</td>
                    <td>$3</td>
                </tr>
              </table>

</div>
    );
}