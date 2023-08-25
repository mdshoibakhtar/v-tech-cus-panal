

import React from "react";
import img1 from "../../../assets/--jskjjjj/junaid1.jpg"
import img2 from "../../../assets/--jskjjjj/junaid2.jpg"
import img3 from "../../../assets/--jskjjjj/junaid3.jpg"
import img4 from "../../../assets/--jskjjjj/junaid4.jpg"
function AddingShow() {
    return (
        <>
            <section className="networkSec" style={{ margin: "20px 0" ,padding:"0" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-3" style={{textAlign:"center"}}>
                                    <img style={{ width: "120px", height: "120px" }} src={img1} />
                                    <h3 style={{ justifyContent: "center", color: "#124a2f", fontWeight: "700" }}>7000</h3>
                                    <h5 style={{ justifyContent: "center" }}>EMPLOYEES
                                        WORLDWIDE</h5>
                                </div>
                                <div className="col-3" style={{textAlign:"center"}}>
                                    <img style={{ width: "120px", height: "120px" }} src={img2} />
                                    <h3 style={{ justifyContent: "center", color: "#124a2f", fontWeight: "700" }}>462</h3>
                                    <h5 style={{ justifyContent: "center" }}>TOTAL
                                        WAREHOUSES</h5>
                                </div>
                                <div className="col-3" style={{textAlign:"center"}}>
                                    <img style={{ width: "120px", height: "120px" }} src={img3} />
                                    <h3 style={{ justifyContent: "center", color: "#124a2f", fontWeight: "700" }}>48</h3>
                                    <h5 style={{ justifyContent: "center" }}>COUNTRIES
                                        PRESENCE</h5>
                                </div>
                                <div className="col-3" style={{textAlign:"center"}}>
                                    <img style={{ width: "120px", height: "120px" }} src={img4} />
                                    <h3 style={{ justifyContent: "center", color: "#124a2f", fontWeight: "700" }}>120+</h3>
                                    <h5 style={{ justifyContent: "center" }}>PROCESSING
                                        PLANTS</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddingShow;
