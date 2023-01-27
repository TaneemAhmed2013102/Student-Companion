import React, { useState } from "react";

function Homepage() {
  return (
    <div class="flex-grow-1 d-flex align-items-center justify-content-center">
      <div className="container-fluid ">
        <div className="row mb-5">
          <div class="card w-25 mx-5">
            <div class="card-body">
              <h3 class="card-title">My Courses</h3>
              <p class="card-text">Check your current courses</p>
              <a href="/my-courses" class="btn btn-primary">
                View courses
              </a>
            </div>
          </div>

          <div class="card w-25 mx-5">
            <div class="card-body">
              <h3 class="card-title">Find Students Near me</h3>
              <p class="card-text">Find yourself a companion</p>
              <a href="/students-near-me" class="btn btn-primary">
                Find students
              </a>
            </div>
          </div>

          <div class="card w-25 mx-5">
            <div class="card-body">
              <h3 class="card-title">Buy/Sell Book</h3>
              <p class="card-text">
                Your very own marketplace for trading books
              </p>
              <a href="/buy-sell-books" class="btn btn-primary">
                View marketplace
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div class="card w-25 mx-5">
            <div class="card-body">
              <h3 class="card-title">Add Exam Reminders</h3>
              <p class="card-text">
                Get Reminders for your exams for more than a day
              </p>
              <a href="/my-reminders" class="btn btn-primary">
                My reminders
              </a>
            </div>
          </div>

          <div class="card w-25 mx-5">
            <div class="card-body">
              <h3 class="card-title">Accomodation</h3>
              <p class="card-text">
                Find students who are looking for a roommate
              </p>
              <a href="/accomodations" class="btn btn-primary">
                Browse
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
