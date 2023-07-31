import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function CustomerSupportTicket() {
  const [show, setShow] = useState(false);
  const [innerShow, setInnerShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseInner = () => setInnerShow(false);
  const handleShowInner = () => setInnerShow(true);

  return (
    <>
      <div className="aiz-user-panel">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Support Ticket</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mx-auto mb-3">
            <div
              className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition"
              data-toggle="modal"
              data-target="#ticket_modal"
              onClick={handleShow}
            >
              <span className="size-70px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
                <i className="las la-plus la-3x text-white" />
              </span>
              <div className="fs-20 text-primary">Create a Ticket</div>
            </div>

            <Modal
              show={show}
              onHide={handleClose}
              dialogClassName="modal-wrapper"
            >
              <Modal.Header closeButton>
                <Modal.Title>Create a Ticket</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="modal-body px-3 pt-3">
                  <form
                    className
                    action="https://mmslfashions.in/support_ticket"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="U2LxNDQI02RGvLhiujII5Z0PRiirIALmEGz5cy59"
                    />{" "}
                    <div className="row">
                      <div className="col-md-2">
                        <label>Subject</label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Subject"
                          name="subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <label>Provide a detailed description</label>
                      </div>
                      <div className="col-md-10">
                        <textarea
                          type="text"
                          className="form-control mb-3"
                          rows={3}
                          name="details"
                          placeholder="Type your reply"
                          data-buttons="bold,underline,italic,|,ul,ol,|,paragraph,|,undo,redo"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-2 col-form-label">Photo</label>
                      <div className="col-md-10">
                        <div
                          className="input-group"
                          data-toggle="aizuploader"
                          data-type="image"
                          data-multiple="true"
                        >
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary font-weight-medium">
                              Browse
                            </div>
                          </div>
                          <div
                            className="form-control file-amount"
                            onClick={handleShowInner}
                          >
                            Choose File
                          </div>
                          <input
                            type="hidden"
                            name="attachments"
                            className="selected-files"
                          />
                        </div>
                        <div className="file-preview box sm"></div>
                      </div>

                      <Modal
                        show={innerShow}
                        onHide={handleCloseInner}
                        dialogClassName="remove-model-height"
                      >
                        {/* <Modal.Header closeButton>
                                                    <Modal.Title>Modal heading</Modal.Title>
                                                </Modal.Header> */}
                        <Modal.Body>
                          <div className="uppy-modal-nav">
                            <ul className="nav nav-tabs border-0">
                              <li className="nav-item">
                                <a
                                  className="nav-link active font-weight-medium text-dark"
                                  data-toggle="tab"
                                  href="#aiz-select-file"
                                >
                                  Select File
                                </a>
                              </li>
                              <li className="nav-item">
                                {/* <a
                      className="nav-link font-weight-medium text-dark"
                      data-toggle="tab"
                      href="#aiz-upload-new"
                    >
                      Upload New
                    </a> */}
                                <Form.Group
                                  controlId="formFile"
                                  className="mb-3"
                                >
                                  {/* <Form.Label> Upload New</Form.Label> */}
                                  <Form.Control type="file" />
                                </Form.Group>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-body modal-body-2">
                            <div className="tab-content h-50">
                              <div
                                className="tab-pane active h-100"
                                id="aiz-select-file"
                              >
                                <div className="aiz-uploader-filter pt-1 pb-3 border-bottom mb-4">
                                  <div className="row align-items-center gutters-5 gutters-md-10 position-relative">
                                    <div className="col-xl-2 col-md-3 col-5">
                                      <div className>
                                        {/* Input */}
                                        <select
                                          className="form-control form-control-xs aiz-selectpicker"
                                          name="aiz-uploader-sort"
                                          fdprocessedid="r5b6xg"
                                        >
                                          <option value="newest" selected>
                                            Sort by newest
                                          </option>
                                          <option value="oldest">
                                            Sort by oldest
                                          </option>
                                          <option value="smallest">
                                            Sort by smallest
                                          </option>
                                          <option value="largest">
                                            Sort by largest
                                          </option>
                                        </select>
                                        {/* End Input */}
                                      </div>
                                    </div>
                                    <div className="col-md-3 col-5">
                                      <div className="custom-control custom-radio">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          name="aiz-show-selected"
                                          id="aiz-show-selected"
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="aiz-show-selected"
                                        >
                                          Selected Only
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-4 col-xl-3 ml-auto mr-0 col-2 position-static">
                                      <div className="aiz-uploader-search text-right">
                                        <input
                                          type="text"
                                          className="form-control form-control-xs"
                                          name="aiz-uploader-search"
                                          placeholder="Search your files"
                                          fdprocessedid="fo65fr"
                                        />
                                        <i className="search-icon d-md-none">
                                          <span />
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="aiz-uploader-all clearfix c-scrollbar-light">
                                  <div
                                    className="aiz-file-box-wrap"
                                    aria-hidden="false"
                                    data-selected="false"
                                  >
                                    <div className="aiz-file-box">
                                      <div
                                        className="card card-file aiz-uploader-select"
                                        title="Kynoch-Logo-PNG.png"
                                        data-value={2}
                                      >
                                        <div className="card-file-thumb">
                                          <img
                                            src="//mmslfashions.in/public/uploads/all/hz9Ng3hFHB2oQUvOb5dFqHn8Pfens0vc8ewiYZC7.png"
                                            className="img-fit"
                                          />
                                        </div>
                                        <div className="card-body">
                                          <h6 className="d-flex">
                                            <span className="text-truncate title">
                                              Kynoch-Logo-PNG
                                            </span>
                                            <span className="ext flex-shrink-0">
                                              .png
                                            </span>
                                          </h6>
                                          <p>30 KB</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane h-100"
                                id="aiz-upload-new"
                              >
                                <div id="aiz-upload-files" className="h-100">
                                  <div
                                    className="uppy-Root uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--isInnerWrapVisible"
                                    aria-hidden="false"
                                    aria-label="File Uploader"
                                  >
                                    <div
                                      className="uppy-Dashboard-overlay"
                                      tabIndex={-1}
                                    />
                                    <div
                                      className="uppy-Dashboard-inner"
                                      style={{ width: 750, height: 550 }}
                                    >
                                      <div className="uppy-Dashboard-innerWrap">
                                        <div className="uppy-Dashboard-dropFilesHereHint">
                                          Drop your files here
                                        </div>
                                        <div className="uppy-DashboardAddFiles">
                                          <input
                                            className="uppy-Dashboard-input"
                                            hidden
                                            aria-hidden="true"
                                            tabIndex={-1}
                                            type="file"
                                            name="files[]"
                                            multiple
                                          />
                                          <div className="uppy-DashboardTabs">
                                            <div className="uppy-Dashboard-dropFilesTitle">
                                              Drop files here, paste or{" "}
                                              <button
                                                type="button"
                                                className="uppy-u-reset uppy-Dashboard-browse"
                                              >
                                                Browse
                                              </button>
                                            </div>
                                          </div>
                                          <div className="uppy-DashboardAddFiles-info" />
                                        </div>
                                        <span />
                                        <span />
                                        <span />
                                        <div className="uppy-Dashboard-progressindicators">
                                          <div
                                            className="uppy-StatusBar is-waiting"
                                            aria-hidden="true"
                                          >
                                            <div
                                              className="uppy-StatusBar-progress
                     "
                                              role="progressbar"
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                              aria-valuenow={0}
                                              style={{ width: "0%" }}
                                            />
                                            <div className="uppy-StatusBar-actions" />
                                          </div>
                                          <div
                                            className="uppy uppy-Informer"
                                            aria-hidden="true"
                                          >
                                            <p role="alert"> </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer justify-content-between bg-light">
                            <div className="flex-grow-1 overflow-hidden d-flex">
                              <div className>
                                <div className="aiz-uploader-selected">
                                  0 File selected
                                </div>
                                <button
                                  type="button"
                                  className="btn-link btn btn-sm p-0 aiz-uploader-selected-clear"
                                  fdprocessedid="78f39w"
                                >
                                  Clear
                                </button>
                              </div>
                              <div className="mb-0 ml-3 file-select-btn">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-primary"
                                  id="uploader_prev_btn"
                                  fdprocessedid="pmqcea"
                                  disabled="disabled"
                                >
                                  Prev
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-primary"
                                  id="uploader_next_btn"
                                  fdprocessedid="yq4c8k"
                                  disabled="disabled"
                                >
                                  Next
                                </button>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                              data-toggle="aizUploaderAddSelected"
                              fdprocessedid="l29hra"
                            >
                              Add Files
                            </button>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          {/* <Button variant="secondary" onClick={handleCloseInner}>
                                                        Close
                                                    </Button>
                                                    <Button variant="primary" onClick={handleCloseInner}>
                                                        Save Changes
                                                    </Button> */}
                        </Modal.Footer>
                      </Modal>
                    </div>
                    {/* <div className="text-right mt-4">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                            <button type="submit" className="btn btn-primary">Send Ticket</button>
                                        </div> */}
                  </form>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Tickets</h5>
          </div>
          <div className="card-body">
            <table
              className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
              style={{}}
            >
              <thead>
                <tr className="footable-header">
                  <th
                    data-breakpoints="lg"
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    Ticket ID
                  </th>
                  <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                    Sending Date
                  </th>
                  <th style={{ display: "table-cell" }}>Subject</th>
                  <th style={{ display: "table-cell" }}>Status</th>
                  <th
                    data-breakpoints="lg"
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    #1000003631
                  </td>
                  <td style={{ display: "table-cell" }}>2023-01-22 11:12:39</td>
                  <td style={{ display: "table-cell" }}>
                    Good evening, top urgently send my item to home delivery
                    address. Thanks.
                  </td>
                  <td style={{ display: "table-cell" }}>
                    <span className="badge badge-inline badge-danger">
                      Pending
                    </span>
                  </td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    <Link
                      to="detail-page-not-found"
                      className="btn btn-styled btn-link py-1 px-0 icon-anim text-underline--none"
                    >
                      View Details
                      <i className="la la-angle-right text-sm" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="aiz-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CustomerSupportTicket;
