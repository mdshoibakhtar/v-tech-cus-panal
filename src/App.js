import { useState } from "react";
import Header from "./common/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/media.css";
import "./assets/css/style.css";

import "./assets/all-pannel-css/css/vendors.css";
import "./assets/all-pannel-css/css/stylesheets.css";
import "./assets/all-pannel-css/css/aiz-core.css";
import "./assets/all-pannel-css/css/custom-style.css";
import "./assets/v-tech/TopHeader.css";
import "./assets/v-tech/Style.css";
import "./assets/v-tech/Dashbord.css";

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Footer from "./common/footer/Footer";

import DashbordCustomer from "./Customer-Panal/pages/dashbord/Index";
import WishlistPage from "./Customer-Panal/pages/wishlistPage";
import PurchaseHistoryPage from "./Customer-Panal/pages/purchase/PurchaseHistoryPage";
import DashbordCard from "./Customer-Panal/components/dashbord/DashbordCard";
import WalletPage from "./Customer-Panal/pages/wallet/WalletPage";
import ManegeProfilePage from "./Customer-Panal/pages/manegeProfile/ManegeProfilePage";
import CustomerSupportTicketPage from "./Customer-Panal/pages/customerSupportTicketPage";
import HistoryDetailsPage from "./Customer-Panal/pages/HistoryDetails.js/HistoryDetailsPage";
import InvoicesPage from "./Customer-Panal/pages/invoices";
import OutstandingPage from "./Customer-Panal/pages/outstanding";
import InventoryPage from "./Customer-Panal/pages/inventory";
import AgreementPage from "./Customer-Panal/pages/agrement";
import DeliveryChallanPage from "./Customer-Panal/pages/deliveryChallan";
import QuotationsPage from "./Customer-Panal/pages/quotations";
import InvoicesDetails from "./Customer-Panal/components/invoices/invoicesDetails/InviocesDetails";
import QuotationDetails from "./Customer-Panal/components/quotations/quotationDetails/QuotationDetails";
import InventoryDashbordPage from "./Customer-Panal/pages/inventoryDashbord";
import CustomerDashbordPage from "./Customer-Panal/pages/customerDashbord";
import ChallanDetails from "./Customer-Panal/components/deliveryChallan/challanDetails/ChallanDetails";
import PurchaseOrderListPage from "./Customer-Panal/pages/purchaseOrderList";
import LoginSection from "./loginPage/LoginAdmin";
import Protected from "./Customer-Panal/components/protected/Protected";
import Registration from "./Customer-Panal/components/registration/Registration";
import BillingAddress from "./Customer-Panal/pages/billingAdd/BillingAddress";
import ShippingAddress from "./Customer-Panal/pages/shippingadd/ShippingAddress";
import AllProducts from "./Customer-Panal/pages/allProducts/Index";
import ProDetails from "./Customer-Panal/pages/productDetail/Index";
import CartPage from "./Customer-Panal/pages/CartPage/CartPage";
import Checkout from "./Customer-Panal/pages/checkoutpage/Index";
import MyAccountDetail from "./Customer-Panal/pages/myAccountDetail/Index";
import OrderDetail from "./Customer-Panal/pages/orderDetails/Index";
import CancellOrders from "./Customer-Panal/pages/cancellorders/CancellOrders";
import TrackOrderPage from "./Customer-Panal/pages/track-order";
import ChangePassword from "./Customer-Panal/pages/changePass/ChangePassword";
import RmaHistory from "./Customer-Panal/pages/rmahistory/RmaHistory";
import RentalProduct from "./Customer-Panal/pages/rentalProduct/RentalProduct";
import RentProDetail from "./Customer-Panal/pages/rentalProduct/RentProDetail";
import RentalCart from "./Customer-Panal/pages/rental-allProducts-cart/RentalCart";
import ProductsPage from "./Customer-Panal/pages/products";
import ProductDetail from "./Customer-Panal/components/prodetails/ProductDetail";
import ProductDetails from "./Customer-Panal/components/home/product-detail/ProductDetail";
// import ChallanDetails from "./Customer-Panal/components/deliveryChallan/challanDetails/ChallanDetails";

function App() {
  const [show, setshow] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(null)
  const signin = () => {
    setIsSignedIn(true)
  }
  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {show && <Header handleSidebar={handleSidebar} />}

      <Routes>
        <Route path="/loginPage" element={<LoginSection signin={signin} />} />

        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Navigate to="/loginPage" />} />
        {/* <Route path="/customer" element={<Protected isSignedIn={isSignedIn}> */}
        <Route
          path="/customer"
          element={<DashbordCustomer showSidebar={showSidebar} />}
        >
          <Route path="purchase_history" element={<PurchaseHistoryPage />} />
          <Route path="" element={<DashbordCard />} />
          <Route path="allProducts" element={<AllProducts />} />
          <Route path="rental-allProducts" element={<RentalProduct />} />
          <Route path="product/:id" element={<ProductDetails/>} />
          <Route path="rent-product/:id" element={<RentProDetail />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="cancelOrders" element={<CancellOrders/>} />
          <Route path="trackmyOrders" element={<TrackOrderPage/>} />
          <Route
            path="purchase_history/details-page"
            element={<HistoryDetailsPage />}
          />

          <Route path="delivery-challan" element={<DeliveryChallanPage />} />
          <Route
            path="delivery-challan/challan-details/:id"
            element={<ChallanDetails />}
          />

          <Route path="agreement" element={<AgreementPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="outstanding" element={<OutstandingPage />} />


          <Route path="Shipping" element={<ShippingAddress />} />
          <Route path="Billing" element={<BillingAddress />} />
          <Route path="changePass" element={<ChangePassword />} />


          <Route path="invoices" element={<InvoicesPage />} />
          <Route
            path="invoices/invoices-details/:id"
            element={<InvoicesDetails />}
          />

          <Route path="wishlists" element={<WishlistPage />} />
          <Route path="support-tiket" element={<CustomerSupportTicketPage />} />
          <Route path="profile" element={<ManegeProfilePage />} />

          <Route path="cart" element={<CartPage/>} />
          <Route path="rental-allProducts-cart" element={<RentalCart/>} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="rmahistor" element={<RmaHistory/>} />
          <Route path="myOrders" element={<MyAccountDetail/>} />
          <Route path="order-detail/:id" element={<OrderDetail/>} />

          
          <Route path="quotation" element={<QuotationsPage />} />
          <Route
            path="quotation/quotation-details/:id"
            element={<QuotationDetails />}
          />
          <Route path="purchase-order-list" element={<PurchaseOrderListPage />} />
          <Route
            path="inventory-dashbord"
            element={<InventoryDashbordPage />}
          />
          <Route path="customer-dashbord" element={<CustomerDashbordPage />} />
        </Route>

        {/* <Route path="/admin" element={<DashboardRightSectionAdmin setshow={setshow} />}>
          <Route path="" element={<DashboardAdminPage />} />
          
        </Route> */}
        {/* </Protected>} /> */}


        {/* {Nizaam Route start} */}
        {/* <Route path="add-money-to-wallet" element={<AddMoneyTOWallet />} />
        <Route path="add-wallet-summery" element={<AddWallet />} /> */}
        {/* {Nizaam Route end} */}
      </Routes>
      {show && <Footer />}
    </>
  );
}
export default App;
