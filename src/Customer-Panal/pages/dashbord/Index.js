import { Outlet } from "react-router-dom";
import AsideBar from "../../components/dashbord/AsideBar";

function DashbordCustomer({ showSidebar, closeSideBar }) {
  return (
    <section className="py-5" style={{ backgroundColor: "#f2f3f8" }}>
      <div className="d-flex align-items-start">
        <AsideBar showSidebar={showSidebar} closeSideBar={closeSideBar} />
        <Outlet></Outlet>
      </div>
      {/* <div className="container"></div> */}
    </section>
  );
}
export default DashbordCustomer;
