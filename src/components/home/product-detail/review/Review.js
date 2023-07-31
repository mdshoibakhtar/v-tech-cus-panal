import React from "react";
import Rating from "../../../../shared/rating/Rating";
import ReviewForm from "../review-form/ReviewForm";
import { MdVerifiedUser } from "react-icons/md";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import "./Review.css";
function Review() {
  return (
    <>
      <section className="reviewSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <aside className="customerReviewSidebar">
                <h4>Customer Review</h4>
                <div className="reviewInfo">
                  <div className="reviewNumber">
                    <span>4.5</span>
                  </div>
                  <div className="reviewText">
                    <Rating />
                    <p>Based on 13k reviews</p>
                  </div>
                </div>
                <div className="percentRating">
                  <div className="itemSortingReviews">
                    <span className="number">5</span>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: 100 + "%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <strong className="ratingPercent">100%</strong>
                    <span className="TotalRating">(343)</span>
                  </div>
                  <div className="itemSortingReviews">
                    <span className="number">4</span>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: 75 + "%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <strong className="ratingPercent">75%</strong>
                    <span className="TotalRating">(230)</span>
                  </div>
                  <div className="itemSortingReviews">
                    <span className="number">3</span>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: 50 + "%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <strong className="ratingPercent">50%</strong>
                    <span className="TotalRating">(178)</span>
                  </div>
                  <div className="itemSortingReviews">
                    <span className="number">2</span>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: 25 + "%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <strong className="ratingPercent">25%</strong>
                    <span className="TotalRating">(78)</span>
                  </div>
                  <div className="itemSortingReviews">
                    <span className="number">1</span>
                    <div className="progress">
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: 14 + "%" }}
                        aria-valuenow="14"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <strong className="ratingPercent">14%</strong>
                    <span className="TotalRating">(33)</span>
                  </div>
                </div>
                <div className="submitReview">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#reviewForm"
                    className="default-btn"
                  >
                    Write a Review
                  </button>
                  <ReviewForm />
                </div>
              </aside>
            </div>
            <div className="col-lg-8">
              <div className="reviewContentDetail">
                <div className="filterReview">
                  <h5>Top Highlight Reviews</h5>
                  <div className="filterBox collectionFilterSort ">
                    <select>
                      <option value="0">Filter</option>{" "}
                      <option value="5">5 Stars</option>{" "}
                      <option value="4">4 Stars</option>{" "}
                      <option value="3">3 Stars</option>{" "}
                      <option value="2">2 Stars</option>{" "}
                      <option value="1">1 Star</option>
                    </select>
                    
                    <select>
                      <option value="id">Sort By</option>{" "}
                      <option value="review_rating_highest">
                        Highest Rating
                      </option>{" "}
                      <option value="review_rating_lowest">
                        Lowest Rating
                      </option>{" "}
                      <option value="newest">Newest</option>{" "}
                      <option value="oldest">Oldest</option>
                    </select>
                  </div>
                </div>
                <div className="reviewContent">
                  <div className="ratingPart">
                    <Rating />
                  </div>
                  <div className="customerName">
                    <div className="verified">
                      <MdVerifiedUser />
                    </div>
                    <div className="customerInfo">
                      <h5>Suchetha D H</h5>
                      <p>Confirmed</p>
                    </div>
                  </div>
                  <div className="customerDesc">
                    <p>
                      Really like the convenience of home delivery !Quality
                      service
                    </p>
                  </div>
                  <div className="reviewDate">
                    <p>Nov 28, 2022</p>
                  </div>
                </div>
                <div className="reviewContent">
                  <div className="ratingPart">
                    <Rating />
                  </div>
                  <div className="customerName">
                    <div className="verified">
                      <MdVerifiedUser />
                    </div>
                    <div className="customerInfo">
                      <h5>Deep</h5>
                      <p>Confirmed</p>
                    </div>
                  </div>
                  <div className="customerDesc">
                    <p>
                      Really like the convenience of home delivery !Quality
                      service
                    </p>
                  </div>
                  <div className="reviewDate">
                    <p>Nov 28, 2022</p>
                  </div>
                </div>
                <div className="reviewContent">
                  <div className="ratingPart">
                    <Rating />
                  </div>
                  <div className="customerName">
                    <div className="verified">
                      <MdVerifiedUser />
                    </div>
                    <div className="customerInfo">
                      <h5>Revathi Viswanathan</h5>
                      <p>Confirmed</p>
                    </div>
                  </div>
                  <div className="customerDesc">
                    <p>
                      Really like the convenience of home delivery !Quality
                      service
                    </p>
                  </div>
                  <div className="reviewDate">
                    <p>Nov 28, 2022</p>
                  </div>
                </div>
                <div className="reviewContent">
                  <div className="ratingPart">
                    <Rating />
                  </div>
                  <div className="customerName">
                    <div className="verified">
                      <MdVerifiedUser />
                    </div>
                    <div className="customerInfo">
                      <h5>Uma Murthy</h5>
                      <p>Confirmed</p>
                    </div>
                  </div>
                  <div className="customerDesc">
                    <p>
                      Really like the convenience of home delivery !Quality
                      service
                    </p>
                  </div>
                  <div className="reviewDate">
                    <p>Nov 28, 2022</p>
                  </div>
                </div>
                <div className="reviewContent">
                  <div className="ratingPart">
                    <Rating />
                  </div>
                  <div className="customerName">
                    <div className="verified">
                      <MdVerifiedUser />
                    </div>
                    <div className="customerInfo">
                      <h5>Ramesh Dhakane</h5>
                      <p>Confirmed</p>
                    </div>
                  </div>
                  <div className="customerDesc">
                    <p>
                      Really like the convenience of home delivery !Quality
                      service
                    </p>
                  </div>
                  <div className="reviewDate">
                    <p>Nov 28, 2022</p>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation example mt-3 mb-3">
                <ul className="pagination paginationSec">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <HiChevronLeft />
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      10
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <HiChevronRight />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
