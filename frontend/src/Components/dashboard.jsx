import axios from "axios";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
function Dashboard() {
  const token = localStorage.getItem("userUNID");
  const [details, setDetails] = useState({});
  
  useEffect(() => {
    async function fetchData() {
      if (token) {
        let response = await axios.post(
          "http://localhost:8000/auth/verify-unid",
          {
            UNID: token,
          }
        );
        if (response.data.error) {
          localStorage.clear();
          window.location.replace("http://localhost:3000/login");
        } else {
            setDetails(response["data"]["data"]);
        }
        console.log(response)
      }
    }
    fetchData();
  }, []);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("userUNID");
    window.location.replace("http://localhost:3000");
  };

  return (
    <div class="flex-grow-1">
      <div className="container">
      <div className="row py-3 d-flex justify-content-center">
          <div className="col-5 border border-2 p-4">
            <i className="me-2">
              <FontAwesomeIcon icon={faUserCircle} size="2x" />
            </i>
            <h3 className="d-inline-block">Account</h3>
            <p className="mt-4 mb-1">Name</p>
            <h6>{details.name}</h6>
            <p className="mt-4 mb-1">Email</p>
            <h6>{details.email}</h6>
            <p className="mt-4 mb-1">Phone</p>
            <h6>{"0" + details.phone}</h6>
            <p className="mt-4 mb-1">Address</p>
            <h6>{details.address}</h6>
            <p className="mt-4 mb-1">University</p>
            <h6>{details.university}</h6>
            <div className="d-grid">
              <button
                onClick={(event) => {
                  handleLogout();
                }}
                type="button"
                className="d-block btn btn-danger mt-5"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
