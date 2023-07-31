import { AiOutlineShoppingCart } from "react-icons/ai";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import "./InventoryDashbord.css";
import InventoryTable from "./inventoryTable/InventoryTable";
import axios from "axios";
import { base_Url_cust } from "../../../server";

function InventoryDashbord() {

  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <div className="aiz-user-panel">
          <div className="aiz-titlebar mt-2 mb-4">
            <div className="d-flex" style={{ alignItems: "center" }}>
              <div className="col">
                <h1 className="h3 mt-2" id="head-invent">Inventory Dashbord</h1>
              </div>
              <div className="col">
                <ul className="d-flex cart-item-list">
                  <li>
                    <a href="">
                      <span>
                        <AiOutlineShoppingCart className="me-1" />
                      </span>
                      Cart
                    </a>
                  </li>
                  <li>
                    <a href="">Accept</a>
                  </li>
                  <li>
                    <a href="">Download</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Inventory Dashbord</h5>
            </div>
            <div className="card-body">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Customer</Form.Label>
                    <Form.Control required type="text" placeholder="Customer" />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Location</Form.Label>
                    <Form.Control required type="text" placeholder="Location" />
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control type="text" placeholder="Status" />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Product Type</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Product Type"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control required type="text" placeholder="Brand" />
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Processor</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control type="text" placeholder="Processor" />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Company</Form.Label>
                    <Form.Control required type="text" placeholder="Company" />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Account Manager</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Account Manager"
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    sm="12"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Show</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="show-option"
                    >
                      <option>10</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>
                    <label htmlFor="">entire</label>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    sm="12"
                    controlId="validationCustom01"
                    style={{ textAlign: "center" }}
                  >
                    <Form.Label>Search</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="show-option show-option2"
                    >
                      <option>1312RGJ</option>
                      <option value="1">28S</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Form>
              <div className="aiz-pagination"></div>
            </div>
          </div>

          <InventoryTable />
        </div>
      </div>
    </>
  );
}
export default InventoryDashbord;
