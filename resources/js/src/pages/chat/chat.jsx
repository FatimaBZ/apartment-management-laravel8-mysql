import React, {useState} from "react";
import './chat.css'

export default function Chat() {
    function talk(){
        var know = {
          "Hi" : "Hello, there! How are you? What can I do for you?",
          "ok" : "Thank You! Anything else? ",
          "No" : "Well, bye then!",
          "Bye" : "Hope I Helped You! "
        };
        var user = document.getElementById('userBox').value;
          
        if (details.userBox in know) {
          document.getElementById('chatLog').textContent = know[details.userBox];
        }else{
          document.getElementById('chatLog').textContent = "Sorry,I didn't understand <br>";
        }
      }
      const [details ,setDetails] = useState({userBox:""});
  return (
    <div>
      <div class="chatbox">
        <a href="/">
          <input type="submit" value=" Click To Go Back" />
        </a>
        <div class="chattop">
          <h1>Ask Your Questions ??</h1>
        </div>
        <div class="chatmid">
          <div class="chat">
            <p id="chatLog"> Let's Chat </p>
          </div>
        </div>
        <div class="chatinput">
          <input
            type="text"
            id="userBox"
            onkeydown={talk}
            onChange={e=>setDetails({...details, userBox: e.target.value})} value={details.userBox}
            placeholder="Type your Question"
          />
        </div>
      </div>
    </div>
  );
}
