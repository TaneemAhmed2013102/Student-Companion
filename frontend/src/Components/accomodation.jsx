import React, { useState } from "react";

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
            <form className="d-flex me-2 w-25" onSubmit={onSearchClicked}>
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
              href="/post-book-ad"
              class="btn btn-warning fw-bold me-5 my-4 px-5"
            >
              Looking for a roommate?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accomodations;
