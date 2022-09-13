import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getProducts } from "../features/productsSlice";
import { useEffect, useState } from "react";
import { addCart, setQuantity } from "../features/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  const [changeProductList, setChangeProductList] = useState();

  // const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleClickAll = () => {
    setChangeProductList(productsList);
    console.log(changeProductList);
  };
  const handleClickMen = () => {
    setChangeProductList(
      productsList?.filter((item) => item.category == "men's clothing")
    );
    console.log(changeProductList);
  };
  const handleClickWomen = () => {
    setChangeProductList(
      productsList?.filter((item) => item.category == "women's clothing")
    );
  };
  const handleClickJew = () => {
    setChangeProductList(
      productsList?.filter((item) => item.category == "jewelery")
    );
  };
  const handleClickElec = () => {
    setChangeProductList(
      productsList?.filter((item) => item.category == "electronics")
    );
  };

  const handleBuy = (id) => {
    dispatch(setQuantity());
    const filteredProduct = productsList.filter((item) => item.id == id);
    dispatch(addCart(filteredProduct[0]));
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
        {changeProductList
          ? changeProductList?.map((product, index) => {
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
                    <button
                      class="btn btn-primary d-block w-100"
                      onClick={() => handleBuy(product.id)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })
          : productsList.map((product, index) => {
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
                    <button
                      class="btn btn-primary d-block w-100"
                      onClick={() => handleBuy(product.id)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Products;
