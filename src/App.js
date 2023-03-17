import { Link } from "react-router-dom";
import "./App.css";
import pics from "./images/newlogo.png";
import save from "./images/Frame 220.svg";
import invest from "./images/Frame 221.svg";
import claim from "./images/Frame 222.svg";
import budget from "./images/Frame 223.svg";
import dilla from "./images/Frame 224.svg";

function App() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg py-4 navbar-dark px-1">
      <div className="container header ">
        <Link className="navbar-brand">
          <img src={pics} alt="" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler"
          type="button "
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavbarDropdown">
          <div className="me-auto">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link-dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-current="page"
                  to="/"
                >
                  Products
                </a>
                <div className="dropdown-menu dropdown-large">
                  <div className="row">
                    <div className="col-md-6 p-4">
                      <a href="#">
                        <div className="d-flex flex-row">
                          <img src={save} alt="" className="image-fluid" />
                          <div className="mt-3">
                            <h2 className="active ">save</h2>
                            <h6>save at your pace</h6>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="d-flex flex-row">
                          <img src={invest} alt="" className="image-fluid" />
                          <div className="mt-3">
                            <div className="d-flex flex-row">
                              <h2>Invest </h2>
                              <span className="bg-list ms-2">Coming soon</span>
                            </div>
                            <h6>Unlimited Returns opportunities </h6>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="d-flex flex-row">
                          <img src={claim} alt="" className="image-fluid" />
                          <div className="mt-3">
                            <div className="d-flex flex-row">
                              <h2>Insure </h2>
                              <span className="bg-list ms-2">Coming soon</span>
                            </div>
                            <h6>Create a claim at any time</h6>
                          </div>
                        </div>
                      </a>

                      <a href="#">
                        <div className="d-flex flex-row">
                          <img src={budget} alt="" className="image-fluid" />
                          <div className="mt-3">
                            <div className="d-flex flex-row">
                              <h2>budget </h2>
                              <span className="bg-list ms-2"> coming soon</span>
                            </div>
                            <h6>Learn and get paid</h6>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="d-flex flex-row">
                          <img src={dilla} alt="" className="image-fluid" />
                          <div className="mt-3">
                            <div className="ative">
                              <h2>Dilla </h2>
                              <h6>Unlimited transactions</h6>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
         Business <span className="nav-badge ms-2">Beta</span></a>
              </li>
              <l1>
                <link className="text"> 
                </link>

              </l1>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
