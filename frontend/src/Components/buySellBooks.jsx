import React, { useState } from "react";

function BuySellBooks() {
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
            <span className="mx-5 h1 my-4 ">BUY BOOKS</span>
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
            <a href="/post-book-ad" class="btn btn-warning fw-bold me-5 my-4 px-5">
                Post Your ad
              </a>
          </div>
        </div>
        <div className="row mx-5">
          <div class="card m-4 border-4 card-shadow" style={{width: "18rem"}}>
            <img src={require("../Assets/stack_of_books_copy.png")} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">BEN205</h5>
              <h6 class="card-text">
                Tk. 210
              </h6>
              <h6 class="card-text">Seller: John Snow</h6>
            </div>
          </div>

          <div class="card m-4 border-4 card-shadow" style={{width: "18rem"}}>
            <img src={require("../Assets/stack_of_books_copy.png")} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">BEN205</h5>
              <h6 class="card-text">
                Tk. 210
              </h6>
              <h6 class="card-text">Seller: John Snow</h6>
            </div>
          </div>

          <div class="card m-4 border-4 card-shadow" style={{width: "18rem"}}>
            <img src={require("../Assets/stack_of_books_copy.png")} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">BEN205</h5>
              <h6 class="card-text">
                Tk. 210
              </h6>
              <h6 class="card-text">Seller: John Snow</h6>
            </div>
          </div>

          <div class="card m-4 border-4 card-shadow" style={{width: "18rem"}}>
            <img src={require("../Assets/stack_of_books_copy.png")} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">BEN205</h5>
              <h6 class="card-text">
                Tk. 210
              </h6>
              <h6 class="card-text">Seller: John Snow</h6>
            </div>
          </div>

          <div class="card m-4 border-4 card-shadow" style={{width: "18rem"}}>
            <img src={require("../Assets/stack_of_books_copy.png")} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">BEN205</h5>
              <h6 class="card-text">
                Tk. 210
              </h6>
              <h6 class="card-text">Seller: John Snow</h6>
            </div>
          </div>

          <div class="card m-4 border-4 card-shadow" style={{width: "18rem"}}>
            <img src={require("../Assets/stack_of_books_copy.png")} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">BEN205</h5>
              <h6 class="card-text">
                Tk. 210
              </h6>
              <h6 class="card-text">Seller: John Snow</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuySellBooks;
