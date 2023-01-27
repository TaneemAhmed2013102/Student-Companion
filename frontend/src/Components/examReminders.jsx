import {
  faBook,
  faCalendarDays,
  faClock,
  faHourglass,
  faHourglassHalf,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function ExamReminders() {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseTitleErrorClass, setCourseTitleErrorClass] = useState("none");
  const [examType, setExamType] = useState("");
  const [examTypeErrorClass, setExamTypeErrorClass] = useState("none");
  const [dueDate, setDueDate] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const [error, setError] = useState("");
  const [errorClass, setErrorClass] = useState("none");


  const [value, onChange] = useState(new Date());

  async function handleSubmit(e) {
    e.preventDefault(); //stops the page from reloading

    console.log(value);
  }


  function handleAddCourse(e) {
    e.preventDefault(); //stops the page from reloading
    setButtonClicked(true);
    console.log(buttonClicked);
  }

  function onDatePicked(e) {
    console.log(e);
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
                Add Reminders
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
                <input
                  onInput={(e) => {
                    setExamType(e.target.value);
                  }}
                  onChange={(e) => {
                    setExamTypeErrorClass("none");
                  }}
                  type="text"
                  class="form-control"
                  id="nameInput"
                  placeholder="Exam Heading"
                ></input>
                <span class={"text-danger d-" + examTypeErrorClass}>
                  Enter a valid Exam Type
                </span>
              </div>
              <div class="form-group mb-4">
                <p>
                  Due Time:{" "}
                  <DateTimePicker
                    amPmAriaLabel="Select AM/PM"
                    calendarAriaLabel="Toggle calendar"
                    clearAriaLabel="Clear value"
                    disableClock="true"
                    dayAriaLabel="Day"
                    hourAriaLabel="Hour"
                    maxDetail="minute"
                    minuteAriaLabel="Minute"
                    monthAriaLabel="Month"
                    nativeInputAriaLabel="Date and time"
                    onChange={onChange}
                    secondAriaLabel="Second"
                    value={value}
                    yearAriaLabel="Year"
                    required="true"
                    minDate={new Date()}
                    clearIcon={null}
                  />
                  {/* <DateTimePicker
                    // onChange={onDuePicked}
                    value={dueDate}
                    clearIcon={null}
                    disableClock="true"
                    onCalendarClose={onDatePicked}
                    format="dd/M/y hh:mm a"
                    hourPlaceholder="hh"
                    minutePlaceholder="55"
                    dayPlaceholder="DD"
                    monthPlaceholder="MM"
                    yearPlaceholder="YYYY"
                    amPmAriaLabel="Select AM/PM"
                  /> */}
                  {/* <TimePicker
                      onChange={onStartTimeClicked}
                      value={startingTime}
                      disableClock="true"
                      clearIcon={null}
                      required="true"
                    /> */}
                </p>
              </div>

              <div className="d-block">
                <span class={"mb-2 text-danger d-" + errorClass}>{error}</span>
                <button type="submit" class="btn btn-primary w-100 fw-bold">
                  Add Reminder
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
                      <FontAwesomeIcon icon={faBook} /> &nbsp; Quiz/Mid
                    </p>
                    <p class="card-text fs-4">
                      <FontAwesomeIcon icon={faClock} /> &nbsp; 28:11:2023
                      15:30:00
                    </p>
                    <p class="card-text text-end">
                      <FontAwesomeIcon icon={faHourglassHalf} /> &nbsp; Next
                      Reminder: 18:00:00
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
                      <FontAwesomeIcon icon={faBook} /> &nbsp; Quiz/Mid
                    </p>
                    <p class="card-text fs-4">
                      <FontAwesomeIcon icon={faClock} /> &nbsp; 28:11:2023
                      15:30:00
                    </p>
                    <p class="card-text text-end">
                      <FontAwesomeIcon icon={faHourglassHalf} /> &nbsp; Next
                      Reminder: 18:00:00
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
                      <FontAwesomeIcon icon={faBook} /> &nbsp; Quiz/Mid
                    </p>
                    <p class="card-text fs-4">
                      <FontAwesomeIcon icon={faClock} /> &nbsp; 28:11:2023
                      15:30:00
                    </p>
                    <p class="card-text text-end">
                      <FontAwesomeIcon icon={faHourglassHalf} /> &nbsp; Next
                      Reminder: 18:00:00
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

export default ExamReminders;
