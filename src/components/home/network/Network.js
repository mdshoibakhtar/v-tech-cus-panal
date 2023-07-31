import React from "react";
import "./Network.css"
function Network() {
  return (
    <>
      <section className="networkSec">
        <div className="container">
          <div className="networkItem">
            <div className="fisherman-content mb-5">
              <span>our network</span>
              <h3>emi network</h3>
            </div>
            <ul>
              <li>
                <div className="networkNumber">
                  <h2>3 Lakhs +</h2>
                  <p>members</p>
                </div>
              </li>
              <li>
                <div className="networkNumber">
                  <h2>1 Million +</h2>
                  <p>products</p>
                </div>
              </li>
              <li>
              <div className="networkNumber">
                  <h2>291 +</h2>
                  <p>cities</p>
                </div>
              </li>
              <li>
              <div className="networkNumber">
                  <h2>1.2k +</h2>
                  <p>stores</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Network;
