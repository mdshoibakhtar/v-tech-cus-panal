import React from "react";
import { RxCross1 } from "react-icons/rx";
import "./ReviewForm.css";
function ReviewForm() {
  return (
    <>
      {/*  */}
      <div
        className="modal fade"
        id="reviewForm"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modalDialog">
          <div className="modal-content modalContent">
            <div className="modal-header">
              <h5>
                Write a Review
              </h5>
              <button
                type="button"
                className="changeModalCancel"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <RxCross1 />
              </button>
            </div>
            <div className="modal-body">
              <div className="review-form m-0">
                <form className="reviewForm">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="review-title"
                          name="review-title"
                          placeholder="Enter your review a title"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="review-body"
                          id="review-body"
                          cols="30"
                          rows="7"
                          placeholder="Write your comments here"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="submitReview">
                        <button type="submit">Submit Review</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewForm;
