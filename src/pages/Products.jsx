import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getProducts } from "../features/productsSlice";
import { useEffect, useState } from "react";

const Products = () => {
  const [changeProductList, setChangeProductList] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const productsList = useSelector((state) => state.products.productsList);
  console.log(productsList);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  // console.log(productsList.filter((item) => item.title.includes("Mens")));
  // console.log(productsList.map((item) => item.title));

  const handleClickAll = () => {
    setChangeProductList(productsList);
    console.log(changeProductList);
  };
  const handleClickMen = () => {
    setChangeProductList(
      productsList.filter((item) => item.category == "men's clothing")
    );
    console.log(changeProductList);
  };
  const handleClickWomen = () => {
    setChangeProductList(
      productsList.filter((item) => item.category == "women's clothing")
    );
  };
  const handleClickJew = () => {
    setChangeProductList(
      productsList.filter((item) => item.category == "jewelery")
    );
  };
  const handleClickElec = () => {
    setChangeProductList(
      productsList.filter((item) => item.category == "electronics")
    );
  };

  return (
    <div>
      <h1 className="display-4 text-center p-3"> PRODUCTS</h1>
      <div className=" d-flex justify-content-center gap-2 mb-5">
        <div
          class="border border-2 border-dark btn btn-light"
          onClick={handleClickAll}
        >
          All
        </div>
        <div
          class="border border-2 border-dark btn btn-light"
          onClick={handleClickMen}
        >
          Men's Clothing
        </div>
        <div
          class="border border-2 border-dark btn btn-light"
          onClick={handleClickWomen}
        >
          Women's Clothing
        </div>
        <div
          class="border border-2 border-dark btn btn-light"
          onClick={handleClickJew}
        >
          Jewelery
        </div>
        <div
          class="border border-2 border-dark btn btn-light"
          onClick={handleClickElec}
        >
          Electronic
        </div>
      </div>
      <div
        className="d-flex gap-4 container justify-content-center"
        style={{ flexWrap: "wrap" }}
      >
        {changeProductList?.map((product, index) => {
          return (
            <div
              class="card"
              style={{ width: "18rem", height: "33rem" }}
              key={index}
            >
              <img
                src={product.image}
                class="card-img-top"
                alt="..."
                style={{ height: "18rem", backgroundSize: "cover" }}
              />
              <div class="card-body" style={{ maxHeight: "20rem" }}>
                <h5
                  class="card-title text-center"
                  style={{ height: "8rem", overflow: "hidden" }}
                >
                  {product.title}
                </h5>
                <h5
                  className="text-center"
                  style={{ height: "2rem" }}
                >{`$${product.price}`}</h5>
                <a href="#" class="btn btn-primary d-block">
                  Buy Now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
