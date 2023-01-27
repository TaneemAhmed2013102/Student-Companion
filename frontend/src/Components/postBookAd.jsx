import React, { useState } from "react";

function PostBookAd() {
  const [bookName, setBookName] = useState("");
  const [bookNameErrorClass, setBookNameErrorClass] = useState("none");
  const [bookPrice, setBookPrice] = useState("");
  const [bookPriceErrorClass, setBookPriceErrorClass] = useState("none");

  const [selectedFiles, setSelectedFiles] = useState({});
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [idPhotoErrorClass, setIdPhotoErrorClass] = useState("none");

  const [error, setError] = useState("");
  const [errorClass, setErrorClass] = useState("none");

  function handlePostAdClicked(e) {
    e.preventDefault();
  }

  const updateList = function (e) {
    e.preventDefault();
    const newFiles = e.target.files[0];
    if (newFiles) {
      setIsFilePicked(true);
      setIdPhotoErrorClass("none");
    }
    setSelectedFiles(newFiles);
    e.target.value = "";
  };

  const handleCrossButton = function (e) {
    e.preventDefault();
    setSelectedFiles({});
    setIsFilePicked(false);
  };
  return (
    <div class="flex-grow-1 background-color d-flex align-items-center justify-content-center">
      <div class="row justify-content-center w-100">
        <div class="col-xl-4 col-lg-6 col-md-8 col-11 my-4 primary-background-color px-lg-5 pb-5">
          <div class="separator my-5 ">
            <h1 className="text-dark">Post Your AD</h1>
          </div>
          <form onSubmit={handlePostAdClicked}>
            <div class="form-group mb-4">
              <input
                type="text"
                class="form-control"
                id="bookNameInput"
                placeholder="Book Name"
                onInput={(e) => setBookName(e.target.value)}
                onChange={(e) => {
                  setBookNameErrorClass("none");
                }}
              ></input>
              <span class={"text-danger d-" + bookNameErrorClass}>
                Enter a valid Book Name
              </span>
            </div>

            <div class="form-group mb-4">
              <input
                type="number"
                class="form-control"
                id="bookPriceInput"
                placeholder="Book Price"
                onInput={(e) => setBookPrice(e.target.value)}
                onChange={(e) => {
                  setBookPriceErrorClass("none");
                }}
              ></input>
              <span class={"text-danger d-" + bookPriceErrorClass}>
                Enter a valid Book Price
              </span>
            </div>

            <div class="form-group mb-4">
              <label class="button-attach ms-0" for="file">
                <i class="bi bi-paperclip me-1"></i>
                Book Photo
              </label>
              <input
                accept="image/*"
                id="file"
                type="file"
                name="file"
                onChange={updateList}
              ></input>
              {isFilePicked ? (
                <div id="fileList">
                  <ul class="py-2 mb-0">
                    <li class="d-flex justify-content-between align-items-center border rounded-3 border-3 border-light bg-white mt-2 ps-2">
                      {selectedFiles.name}
                      <button
                        class="btn btn-light"
                        onClick={(e) => handleCrossButton(e)}
                      >
                        {" "}
                        x{" "}
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <p class="d-none">Select a file to show details</p>
              )}
              <span class={"mb-2 text-danger d-" + idPhotoErrorClass}>
                Please attach a photo of the Book
              </span>
            </div>

            <div className="d-block">
              <span class={"mb-2 text-danger d-" + errorClass}>{error}</span>
              <button type="submit" class="btn btn-primary w-100 fw-bold">
                Post AD
              </button>
            </div>
          </form>
          <hr class="my-4" />
        </div>
      </div>
    </div>
  );
}

export default PostBookAd;
