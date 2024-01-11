import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="row text-center mt-5">
        <div className="col-8 offset-2">
          <div className="row">
            <div className="col col-12 text-left mb-2">
              <i className="fa fa-facebook footer-icon"></i>
              <i className="fa fa-instagram footer-icon"></i>
              <i className="fa fa-twitter footer-icon"></i>
              <i className="fa fa-youtube footer-icon"></i>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Legal Notices
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Cookie Preferences
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-secondary">
                      Corporate Information
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 text-left d-flex mb-2 ms-3">
              <button
                type="button"
                className="btn btn-sm  text-secondary border-secondary footer-button rounded-0 mt-3"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 text-left mb-2 mt-2 copyright text-secondary">
              © 1997-2022 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
