import "./about.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="main-content">
        <div className="m-t-20">
          <div className="rows">
            <div className="columnss aboutpage-img-width"></div>
            <div className="inner-container">
              <h1>About Lunamar</h1>
              <p className="text">
                Lunamar is a huge subdivision which has a lot of buildings. Each
                building has a lot apartments. Lunamar has beautiful
                surroundings. We have an experienced team of housing management
                who will provide you the best services. Lunamar provides variety
                of services which makes life easier
              </p>
              <a target="_blank" href="https://fxb0881.uta.cloud/" className="hero-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
