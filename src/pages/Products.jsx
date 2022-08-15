import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getProducts } from "../features/productsSlice";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const productsList = useSelector((state) => state.products.productsList);
  console.log(productsList);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <h1 className="display-4 text-center p-3"> PRODUCTS</h1>
      <div className=" d-flex justify-content-center gap-2 mb-5">
        <div class="border border-2 border-dark btn btn-light">All</div>
        <div class="border border-2 border-dark btn btn-light">
          Men's Clothing
        </div>
        <div class="border border-2 border-dark btn btn-light">
          Women's Clothing
        </div>
        <div class="border border-2 border-dark btn btn-light">Jewelery</div>
        <div class="border border-2 border-dark btn btn-light">Electronic</div>
      </div>
      <div className="d-flex gap-4 container" style={{ flexWrap: "wrap" }}>
        {productsList?.map((product) => {
          return (
            <div class="card" style={{ width: "18rem", height: "33rem" }}>
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
