import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import TimePicker from "react-time-picker";
import Multiselect from "multiselect-react-dropdown";

function MyCourses() {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseTitleErrorClass, setCourseTitleErrorClass] = useState("none");
  const [startingTime, setStartingTime] = useState("10:00");
  const [startingTimeErrorClass, setStartingTimeErrorClass] = useState("10:00");
  const [endingTime, setEndingTime] = useState("10:00");
  const [endingTimeErrorClass, setEndingTimeErrorClass] = useState("10:00");
  const [days, setDays] = useState("10:00");
  const [buttonClicked, setButtonClicked] = useState(false);

  const [error, setError] = useState("");
  const [errorClass, setErrorClass] = useState("none");

  async function handleSubmit(e) {
    e.preventDefault(); //stops the page from reloading
  }

  function handleAddCourse(e) {
    e.preventDefault(); //stops the page from reloading
    setButtonClicked(true);
    console.log(buttonClicked);
  }

  function onStartTimeClicked(e) {
    setStartingTime(e);
  }

  function onEndingTimeClicked(e) {
    setEndingTime(e);
  }

  function DaysSelected(e) {
    console.log(e);
    setDays(e);
  }

  return (
    <div class="flex-grow-1">
      <div className="container ">
        <div className="row my-5">
          
          <div className="col-4">
            <div className="col-12 d-flex justify-content-center">
              <button
                onClick={handleAddCourse}
                className={
                  "btn btn-lg btn-info my-2 " +
                  (buttonClicked == false ? "d-block" : "invisible")
                }
              >
                Add Course
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className={
                "mt-3 d-block " +
                (buttonClicked == false ? "d-none" : "d-block")
              }
            >
              <div class="form-group mb-4">
                <input
                  onInput={(e) => {
                    setCourseTitle(e.target.value);
                  }}
                  onChange={(e) => {
                    setCourseTitleErrorClass("none");
                  }}
                  type="text"
                  class="form-control"
                  id="nameInput"
                  placeholder="Course Title"
                ></input>
                <span class={"text-danger d-" + courseTitleErrorClass}>
                  Enter a valid Course Title
                </span>
              </div>
              <div class="form-group mb-4">
                <p>
                  Starting Time:{" "}
                  <TimePicker
                    onChange={onStartTimeClicked}
                    value={startingTime}
                    disableClock="true"
                    clearIcon={null}
                    required="true"
                  />
                </p>
              </div>
              <div class="form-group mb-4">
                <p>
                  Ending Time:{" "}
                  <TimePicker
                    onChange={onEndingTimeClicked}
                    value={endingTime}
                    disableClock="true"
                    clearIcon={null}
                    required="true"
                  />
                </p>
              </div>
              <div className="form-group mb-4">
                <Multiselect
                  avoidHighlightFirstOption
                  displayValue=""
                  placeholder="Select Class days"
                  isObject={false}
                  onSelect={DaysSelected}
                  options={[
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ]}
                />
              </div>

              <div className="d-block">
                <span class={"mb-2 text-danger d-" + errorClass}>{error}</span>
                <button type="submit" class="btn btn-primary w-100 fw-bold">
                  Add Course
                </button>
              </div>
            </form>
          </div>
          <div className="col-7 offset-1">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                  <div className="card-body ">
                    <h5 class="card-title text-center display-5 m-0">BEN205</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text fs-4">
                      <FontAwesomeIcon icon={faClock} /> &nbsp; 08:00 AM - 09:30
                      AM
                    </p>
                    <p class="card-text fs-4">
                      <FontAwesomeIcon icon={faCalendarDays} /> &nbsp;
                      Sunday-Tuesday
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                  <div className="card-body ">
                    <h5 class="card-title text-center display-5 m-0">BEN205</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text fs-4">
                      <FontAwesomeIcon icon={faClock} /> &nbsp; 08:00 AM - 09:30
                      AM
                    </p>
                    <p class="card-text fs-4">
                      <FontAwesomeIcon icon={faCalendarDays} /> &nbsp;
                      Sunday-Tuesday
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                  <div className="card-body ">
                    <h5 class="card-title text-center display-5 m-0">BEN205</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text fs-4">
                      <FontAwesomeIcon icon={faClock} /> &nbsp; 08:00 AM - 09:30
                      AM
                    </p>
                    <p class="card-text fs-4">
                      <FontAwesomeIcon icon={faCalendarDays} /> &nbsp;
                      Sunday-Tuesday
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCourses;
