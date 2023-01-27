import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
function StudentsNearMe() {
  const token = localStorage.getItem("userUNID");
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
        }
      }
    }
    fetchData();
  }, []);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div class="flex-grow-1">
      <div className="container ">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <span className="display-4  my-4 ">STUDENTS NEAR ME</span>
          </div>
        </div>
        <div className="row mt-3 mb-4">
          <div className="col-4 h5">Name</div>
          <div className="col-4 h5">University</div>
          <div className="col-4 h5">Contact</div>
        </div>

        <div className="row mt-3 ">
          <div className="col-4 h5 d-flex align-items-center">Taneem Ahmed</div>
          <div className="col-4 h5 d-flex align-items-center">NSU</div>
          <div className="col-4 h5 ">
            <button
              type="button"
              class={"btn btn-info btn-lg mx-auto fw-bold text-white"}
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
              // onClick={handleResendLinkButton}
            >
              Contact Via Email
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-4 h5 d-flex align-items-center">
            Saaquib Rahman
          </div>
          <div className="col-4 h5 d-flex align-items-center">EWU</div>
          <div className="col-4 h5">
            <button
              type="button"
              class={"btn btn-info btn-lg mx-auto fw-bold text-white"}
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
              // onClick={handleResendLinkButton}
            >
              Contact Via Email
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-4 h5 d-flex align-items-center">Omar Haroon</div>
          <div className="col-4 h5 d-flex align-items-center">SUST</div>
          <div className="col-4 h5">
            <button
              type="button"
              class={"btn btn-info btn-lg mx-auto fw-bold text-white"}
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
              // onClick={handleResendLinkButton}
            >
              Contact Via Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsNearMe;
