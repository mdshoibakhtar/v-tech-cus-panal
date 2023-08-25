import React, { useContext, useEffect, useState } from "react";
// import Breadcrumb from "../../shared/breadcrumb/Breadcrumb";
import ProductItem from "../home/products/product/ProductItem";
// import ProductFilter from "../products-filter/ProductsFilter";
import "./Products.css";
// import CollectionFilter from "../collecttion-filter/CollectionFilter";
import { productViewContext } from "../../pages/products";
import { Helmet } from "react-helmet";
// import QuiekViewModal from "../../pages/QueikViewModal/QuiekViewModal";
import axios from "axios";
import { useParams } from "react-router-dom";
let showProduct = 10;

function Products() {
  const productData = useContext(productViewContext);
  const [latestData, setLatestData] = useState(null);
  const params = useParams()

  const [totalProductLength, setTotalProductLength] = useState(0)

  const [loadMore, setLoadMore] = useState(showProduct);
  const [listView, setListView] = useState("");
  const [page, setPage] = useState(0)

  const getdata = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/product/page/${page}`)
      setLatestData(res.data)
      setTotalProductLength(res.data)
    } catch (error) {
      alert('Server Error !')
    }
  }
  useEffect(() => {
    if (!params?.val) {
      getdata()
    }
  }, [])

  const changePage = (num) => {
    setPage(num)
    getdata()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }



  const [modelDataId, setModelDataId] = useState(null)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setModelDataId(id)
    setShow(true)
  };


  // Show More Products
  const handleShowProduct = () => {
    if (latestData?.length > 12) {
      setLoadMore(loadMore + 12)
    } else {

    }
  };
  const handleList = () => {
    setListView("listView");
  };
  const handleGrid = () => {
    setListView("");
  };
  const setLenght = (num) => {
    setTotalProductLength(num);
  }




  const getDataShort = async (e) => {
    try {
      const res = await axios.get(` https://onlineparttimejobs.in/api/product/sort/${e.target.value}`)
      setLatestData(res.data)
    } catch (error) {
      alert('Server Error !')
    }
  }


  const [filterState, setFilterState] = useState({
    categories: [],
    brands: [],
    minprice: '',
    maxprice: ''
  })

  const filterdValues = async (id, str) => {
    const clone = { ...filterState }
    if (str === 'categories') {
      const arrCat = [...clone.categories]

      let flag = false
      let index;
      if (!arrCat.length) {
        arrCat.push(id)
        clone.categories = arrCat
        setFilterState(clone)
      } else {
        for (let i = 0; i <= arrCat.length; i++) {
          if (arrCat[i] === id) {
            flag = true
            index = i
          }
        }
        if (index) {
          arrCat.splice(index, 1)
          clone.categories = arrCat
          setFilterState(clone)
          flag = false
          index = undefined
          return
        }
        if (!flag) {
          arrCat.push(id)
          clone.categories = arrCat
          setFilterState(clone)
        }
      }

    }
    if (str === 'brands') {
      const arrBr = [...clone.brands]

      let flag = false
      let index;
      if (!arrBr.length) {
        arrBr.push(id)
        clone.brands = arrBr
        setFilterState(clone)
      } else {
        for (let i = 0; i <= arrBr.length; i++) {
          console.log(arrBr[i], id);
          if (arrBr[i] === id) {
            flag = true
            index = i
          }
        }
        if (index) {
          console.log('innndel');
          arrBr.splice(index, 1)
          clone.brands = arrBr
          setFilterState(clone)
          flag = false
          index = undefined
          return
        }
        if (!flag) {
          arrBr.push(id)
          clone.brands = arrBr
          setFilterState(clone)
        }
      }


    }
    if (str === 'size') {

    }
  }

  const [isLoadingVal, setIsloadingVal] = useState(false)

  const getFilterdData = async () => {
    setIsloadingVal(true)
    try {
      const res = await axios.post(`https://onlineparttimejobs.in/api/product/filter`, filterState)
      setLatestData(res.data)
      setTotalProductLength(res.data)
      setIsloadingVal(false)
    } catch (error) {
      alert('Filter Not Apply')
      setIsloadingVal(false)
    }
  }



  const getdataVal = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/product/search/${params.val}`)
      setLatestData(res.data.getSearchedProduct)
      setTotalProductLength(res.data.getSearchedProduct)
    } catch (error) {
      alert('Server Error !')
    }
  }

  useEffect(() => {
    if (params.val) {
      console.log('inn but not');
      getdataVal()
    }
  }, [params.val])


  return (
    <>
      <Helmet>
        <title>Products | Fertilizer Multi Vendor</title>
        <meta
          name="keyword"
          content="Fertilizer, Agricultural, Seeds, Machinery, Nutrition"
        />
        <meta
          name="description"
          content="Buy Agricultural Products and Machinery Online at ETG. We Offering broad range of Seeds, Plant Nutrition, Plant Protection and Agri Implements."
        />
      </Helmet>

      {/* <Breadcrumb title="Products" /> */}
      <section className="prodcutsSec">
        <div className="container">
          <div className="row">

            {isLoadingVal && <div className="preloaderCount">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>}

            <div className="col-lg-3 col-md-4 col-sm-12">
              {/* <ProductFilter filterdValues={filterdValues} getFilterdData={getFilterdData} /> */}
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="row">
                <div className="col-lg-12">
                  {/* <CollectionFilter
                    handleList={handleList}
                    handleGrid={handleGrid}
                    totalProductLength={totalProductLength}
                    getDataShort={getDataShort}
                  /> */}
                  <div
                    className={`row changeGrid ${listView ? "listView" : ""}`}
                  >
                    <ProductItem
                      listView={listView}
                      productData={productData}
                      loadMore={loadMore}
                      setTotalProductLength={setLenght}
                      latestData={latestData}
                      setLatestData={setLatestData}
                      handleShow={handleShow}
                    />

                  </div>
                  {/* {latestData?.length > 2 && (
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-primary loadMore"
                        onClick={handleShowProduct}
                      >
                        Load More
                      </button>
                    </div>
                  )} */}

                  <nav aria-label="Page navigation example">
                    <ul className="pagination" style={{ justifyContent: "center" }}>

                      <li className="page-item" onClick={() => changePage(0)}><button className="page-link">1</button></li>
                      <li className="page-item" onClick={() => changePage(1)}><button className="page-link">2</button></li>
                      <li className="page-item" onClick={() => changePage(2)}><button className="page-link">3</button></li>
                      <li className="page-item" onClick={() => changePage(3)}><button className="page-link">4</button></li>
                      <li className="page-item" onClick={() => changePage(4)}><button className="page-link">5</button></li>
                      <li className="page-item" onClick={() => changePage(5)}><button className="page-link">6</button></li>
                      <li className="page-item" onClick={() => changePage(6)}><button className="page-link">7</button></li>
                      <li className="page-item" onClick={() => changePage(7)}><button className="page-link">8</button></li>

                    </ul>
                  </nav>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {modelDataId && (
          <QuiekViewModal modelDataId={modelDataId} show={show} onHide={handleClose} size="xl"
            centered />
        )} */}
      </section>
    </>
  );
}

export default Products;
