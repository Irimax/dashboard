import React, { Component } from "react";
import { Link } from "react-router-dom";

class Notfound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions">
                <Link to="/" className="btn-primary">
                  <span className="fas fa-home"></span>
                  Take Me Home{" "}
                </Link>
                <Link to="/contact" className="btn-secondary ">
                  <span className="fas fa-envelope"></span> Contact Support{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notfound;
