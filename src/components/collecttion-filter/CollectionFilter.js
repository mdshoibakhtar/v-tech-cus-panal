import React from "react";
import {RiCheckboxBlankFill} from "react-icons/ri"
import {HiViewGrid} from "react-icons/hi"
import {FaBars} from "react-icons/fa"
import "./CollectionFilter.css";
function CollectionFilter() {
  return (
    <>
      <div className="collectionFilter">
        <div className="totalProducts">
          <h6>6 products</h6>
        </div>
        <div className="collectionFilterItem">
          <div className="collectionFilterSort">
            <select name="SortBy" id="SortBy" data-default-sortby="manual">
              <option value="title-ascending" selected="selected">Default Sorting</option>
              <option value="manual">Featured</option>
              <option value="best-selling">Best selling</option>
              <option value="title-ascending" >
                Alphabetically, A-Z
              </option>
              <option value="title-descending">Alphabetically, Z-A</option>
              <option value="price-ascending">Price, low to high</option>
              <option value="price-descending">Price, high to low</option>
              <option value="created-ascending">Date, old to new</option>
              <option value="created-descending">Date, new to old</option>
            </select>
          </div>
          <div className="collectionFilterList">
            <ul className="no-bullets inline-list text-right">
              <li>
                <button
                  type="button"
                  className="grid-view-btn"
                  data-view="large"
                  title="Large"
                >
                  <RiCheckboxBlankFill />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="grid-view-btn is-active"
                  data-view="small"
                  title="Small"
                >
                  <HiViewGrid />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="grid-view-btn"
                  data-view="list"
                  title="List"
                >
                  <FaBars />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionFilter;
