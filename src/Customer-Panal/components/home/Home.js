import { useState } from "react";
import React, { createContext, useContext, useEffect } from "react";
import { Provider } from "react-redux";
import { productItemHome } from "../../pages/home";
import { productData } from "../../pages/products/mockData";
import { store } from "../store";
import Banner from "./banner/Banner";
import BestSeller from "./best-seller/BestSeller";
import Brands from "./brands/Brands";
import CategoriesItems from "./categories-items/CategoriesItems";
import CostInfo from "./cost-info/CostInfo";
import FeaturedProducts from "./featured-products/FeaturedProducts";
import Network from "./network/Network";
import ProductsCategory from "./products-category/ProductsCategory";
import ProductItem from "./products/product/ProductItem";
import Products from "./products/Products";
import ServiceList from "./service-list/ServiceList";
import TodayDeals from "./today-deals/TodayDeals";
import TrendingProducts from "./trending-products/TrendingProducts";
import AddingShow from "./network/AddingShow";
import { Helmet } from "react-helmet";
import RentalProducts from "./rentalProduct/RentalProducts";
function Home() {
  const productData = useContext(productItemHome)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>

      <Helmet>
        <title>Welcome to Tool Online</title>
        <meta
          name="keyword"
          content="Tool Online"
        />
        <meta
          name="description"
          content="Tool Online"
        />
      </Helmet>


      <Banner />
      {/* <ServiceList /> */}
      <ProductsCategory />
      {/* <Products productData={productData} /> */}
      <FeaturedProducts />
      <RentalProducts />
      <TrendingProducts />
      {/* <TodayDeals /> */}
      <section className="sellerCategorySec">
        <div className="container">
          <div className="row">

            <div className="col-lg-12">
              {/* <CategoriesItems /> */}
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <AddingShow />
      <Network />
      {/* <CostInfo /> */}

    </>
  );
}

export default Home;
