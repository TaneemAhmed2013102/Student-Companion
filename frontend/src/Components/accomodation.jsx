import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faTag } from "@fortawesome/free-solid-svg-icons";

function Accomodations() {
  //For Search
  const [searchText, setSearchText] = useState("");

  function onSearchClicked(e) {
    e.preventDefault();
  }
  return (
    <div class="flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-between mx-5">
            <span className="mx-5 h3 my-4 ">AVAILABLE ACCOMODATIONS</span>
            <form className="d-flex w-25" onSubmit={onSearchClicked}>
              <input
                className="form-control me-2"
                type="search"
                value={searchText}
                placeholder="Search"
                aria-label="Search"
                required="true"
                onInput={(e) => setSearchText(e.target.value)}
              ></input>
            </form>
            <a
              href="/post-accomodation"
              class="btn btn-warning fw-bold me-5 my-4 px-5"
            >
              Looking for a roommate?
            </a>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div
            className={
              "card mt-4 mb-3" + ("No" == "No" ? "" : "opacity-25") //work left
            }
          >
            <div className="row g-0">
              <div className="col-4 border-end border-2">
                <div className="d-flex justify-content-center">
                  <img
                    src={require("../Assets/house.png")}
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{ maxHeight: "180px" }}
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="card-body pb-1">
                  <h3 className="card-title text-dark">Basha Lagbe</h3>
                  <div className="d-flex">
                    <p className="card-text me-3">
                      <small className="text-muted">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Bashundhara
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <FontAwesomeIcon icon={faTag} /> Ghar Chahiye
                      </small>
                    </p>
                  </div>
                  <p className="card-text text-success fw-bold">Tk 500000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className={
              "card mt-4 mb-3" + ("No" == "No" ? "" : "opacity-25") //work left
            }
          >
            <div className="row g-0">
              <div className="col-4 border-end border-2">
                <div className="d-flex justify-content-center">
                  <img
                    src={require("../Assets/house.png")}
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{ maxHeight: "180px" }}
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="card-body pb-1">
                  <h3 className="card-title text-dark">Basha Lagbe</h3>
                  <div className="d-flex">
                    <p className="card-text me-3">
                      <small className="text-muted">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Bashundhara
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <FontAwesomeIcon icon={faTag} /> Ghar Chahiye
                      </small>
                    </p>
                  </div>
                  <p className="card-text text-success fw-bold">Tk 500000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accomodations;
