import React from "react";
import axios from "axios";

class FileUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: "",
      responseArray: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files,
      responseArray:[]
    });
  }

  onSubmit() {
    if (!this.state.selectedFile) {
      alert("Please select a file!");
      return false;
    }
    const data = new FormData();

    for (let i = 0; i < this.state.selectedFile.length; i++) {
      data.append("file[]", this.state.selectedFile[i]);
    }

    let url = "http://localhost:8888/reactProject/upload.php";

    axios
      .post(url, data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        console.log(res.data);
        // then print response status
        this.setState({ responseArray: res.data });
        this.resetFile();
      },error=>{
        alert(error);
      });
  }

  resetFile() {
    // Reset file input control
    document.getElementsByName("file")[0].value = null;
  }

  render() {
    return (
      <div className="inquiry">
        
        <span className="inquiryTitle">Residents can upload images/videos here</span> 

          <div className="inquiryform">
            <div className="form-group col-md-6">
              <label class="inquirylabel">Select File :</label>
              <input
                type="file"
                className="form-control"
                multiple
                name="file"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <br />
          <div className="form-row">
            <div className="col-md-6">
              <button
                type="submit"
                className="inquirybutton"
                onClick={() => this.onSubmit()}
              >
                Upload File
              </button>
            </div>
          </div>
          <br />
          {this.state.responseArray.map((res, i) => (
            <div key={i}>
                <div  className={'img-alert alert alert-'+res.status}>
                  <div>{res.message} : {res.url}</div>
                  <img src={res.base64} />
                </div>
            </div>
          ))}
       
      </div>
    );
  }
}

export default FileUpload;