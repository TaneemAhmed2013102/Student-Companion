import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal } from "bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {

let navigate = useNavigate();
  let ref = document.referrer;
  const [name, setName] = useState("");
  const [nameErrorClass, setNameErrorClass] = useState("none");
  const [email, setEmail] = useState("");
  const [emailErrorClass, setEmailErrorClass] = useState("none");
  const [phone, setPhone] = useState("");
  const [phoneErrorClass, setPhoneErrorClass] = useState("none");
  const [password, setPassword] = useState("");
  const [passwordErrorClass, setPasswordErrorClass] = useState("none");
  const [confirmPassword, setConfirmPassword] = useState("none");
  const [confirmPasswordErrorClass, setConfirmPasswordErrorClass] = useState("none");
  const [address, setAddress] = useState("");
  const [addressErrorClass, setAddressErrorClass] = useState("none");
  const [university, setUniversity] = useState("");
  const [universityErrorClass, setUniversityErrorClass] = useState("none");
  const [postalCode, setPostalCode] = useState("none");
  const [postalCodeErrorClass, setPostalCodeErrorClass] = useState("none");
  const [city, setCity] = useState("none");
  const [cityErrorClass, setCityErrorClass] = useState("none");

  const [error, setError] = useState("");
  const [errorClass, setErrorClass] = useState("none");

  const validateEmail = () => {
    return (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) && email.length <= 320
    );
  };

  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault(); //stops the page from reloading
  }
  return (
    <div class="flex-grow-1 background-color d-flex align-items-center justify-content-center">
      <div class="row justify-content-center w-100">
        <div class="col-xl-4 col-lg-6 col-md-8 col-11 my-4 primary-background-color px-lg-5 pb-5">
          <div class="separator my-5 ">
            <h1 className="text-dark fw-light">Register</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="form-group mb-4">
              <input
                onInput={(e) => {
                  setName(e.target.value);
                }}
                onChange={(e) => {
                  setNameErrorClass("none");
                }}
                type="text"
                class="form-control"
                id="nameInput"
                placeholder="Full Name"
              ></input>
              <span class={"text-danger d-" + nameErrorClass}>
                Full Name can't be less than 3 characters or more than 30
                characters
              </span>
            </div>
            <div class="form-group mb-4">
              <input
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
                onChange={(e) => {
                  setEmailErrorClass("none");
                }}
                type="text"
                class="form-control"
                id="emailInput"
                placeholder="Email"
              ></input>
              <span class={"text-danger d-" + emailErrorClass}>
                Enter a valid email
              </span>
            </div>

            <div class="form-group mb-4 d-flex">
              <input
                onInput={(e) => {
                  setPhone(e.target.value);
                }}
                onChange={(e) => {
                  setPhoneErrorClass("none");
                }}
                type="text"
                class="form-control"
                id="phoneInput"
                placeholder="Phone Number"
              ></input>
              <span class={"text-danger d-" + phoneErrorClass}>
                Enter a valid Phone Number
              </span>
            </div>

            <div class="form-group mb-4 d-flex">
              <input
                onInput={(e) => {
                  setAddress(e.target.value);
                }}
                onChange={(e) => {
                  setAddressErrorClass("none");
                }}
                type="text"
                class="form-control"
                id="addressInput"
                placeholder="Address"
              ></input>
              <span class={"text-danger d-" + addressErrorClass}>
                Enter a valid Address
              </span>
            </div>

            <div class="form-group mb-4 d-flex">
              <input
                onInput={(e) => {
                  setCity(e.target.value);
                }}
                onChange={(e) => {
                  setCityErrorClass("none");
                }}
                type="text"
                class="form-control"
                id="cityInput"
                placeholder="City"
              ></input>
              <span class={"text-danger d-" + cityErrorClass}>
                Enter a valid City
              </span>
            </div>

            <div class="form-group mb-4 d-flex">
              <input
                onInput={(e) => {
                  setPostalCode(e.target.value);
                }}
                onChange={(e) => {
                  setPostalCodeErrorClass("none");
                }}
                type="text"
                class="form-control"
                id="postalCodeInput"
                placeholder="Postal Code"
              ></input>
              <span class={"text-danger d-" + postalCodeErrorClass}>
                Enter a valid Postal Code
              </span>
            </div>

            <div class="form-group mb-4 d-flex">
              <input
                onInput={(e) => {
                  setUniversity(e.target.value);
                }}
                onChange={(e) => {
                  setUniversityErrorClass("none");
                }}
                type="text"
                class="form-control"
                id="universityInput"
                placeholder="University"
              ></input>
              <span class={"text-danger d-" + universityErrorClass}>
                Enter a valid University
              </span>
            </div>


            <div class="form-group mb-4 d-flex">
              <input
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                onChange={(e) => {
                  setPasswordErrorClass("none");
                }}
                type="password"
                class="form-control"
                id="passwordInput"
                placeholder="Password"
              ></input>
              <span class={"text-danger d-" + passwordErrorClass}>
                Password can't be less than 6 characters or more than 30
                characters
              </span>
            </div>

            <div class="form-group mb-4 d-flex">
              <input
                onInput={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                onChange={(e) => {
                  setConfirmPasswordErrorClass("none");
                }}
                type="password"
                class="form-control"
                id="confirmPasswordInput"
                placeholder="Confirm Password"
              ></input>
              <span class={"text-danger d-" + confirmPasswordErrorClass}>
                Password doesn't match
              </span>
            </div>



            

            <div className="d-block">
              <span class={"mb-2 text-danger d-" + errorClass}>{error}</span>
              <button type="submit" class="btn btn-primary w-100 fw-bold">
                Register
              </button>
            </div>
          </form>
          <div
            className={
              ref == "http://localhost:3000/admin-homepage"
                ? "d-none"
                : "d-block"
            }
          >
            <hr class="my-4" />
            <div className="d-flex justify-content-center"></div>
          </div>

          {/* Modal for successful Registration */}
          <div
            class="modal fade"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Registration Successful!
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  {ref == "http://localhost:3000/admin-homepage"
                    ? "You may login now."
                    : "Please verify your email."}
                </div>
                <div class="modal-footer">
                  <a className="btn btn-primary" href="/login">
                    Ok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
