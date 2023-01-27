import React, { useState } from "react";

function Homepage() {
  return (
    <div class="flex-grow-1 d-flex align-items-center justify-content-center">
      <div className="container-fluid ">
        <div className="row justify-content-around mb-5">
          <div class="card w-25">
            <div class="card-body">
              <h3 class="card-title">My Courses</h3>
              <p class="card-text">
                Check your current courses
              </p>
              <a href="/my-courses" class="btn btn-primary">
                View
              </a>
            </div>
          </div>

          <div class="card w-25">
            <div class="card-body">
              <h3 class="card-title">Find Students Near me</h3>
              <p class="card-text">
                Find Companions to travel to and from University
              </p>
              <a href="/students-near-me" class="btn btn-primary">
                Find Students
              </a>
            </div>
          </div>

          <div class="card w-25">
            <div class="card-body">
              <h3 class="card-title">Buy/Sell Book</h3>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/buy-sell-books" class="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>


        <div className="row justify-content-around mt-5">
          <div class="card w-25">
            <div class="card-body">
              <h3 class="card-title">Add Exam Reminders</h3>
              <p class="card-text">
                Get Reminders for your exams for more than a day
              </p>
              <a href="/my-reminders" class="btn btn-primary">
                My Reminders
              </a>
            </div>
          </div>

          <div class="card w-25">
            <div class="card-body">
              <h3 class="card-title">Find Students to Study Together</h3>
              <p class="card-text">
                Find students around who are interested for group studying
              </p>
              <a href="#" class="btn btn-primary">
                Button
              </a>
            </div>
          </div>

          <div class="card w-25">
            <div class="card-body">
              <h3 class="card-title">Accomodation</h3>
              <p class="card-text">
                Find students who are looking for a roommate
              </p>
              <a href="/accomodations" class="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
