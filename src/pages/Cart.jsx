import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cart);
  console.log(cartList);

  return (
    <div>
      <div className="display-4 text-center py-5">CART</div>
      <div>
        {cartList.map((item, index) => {
          return (
            <div>
              <div class="card">
                <div class="row">
                  <div class="col-md-8 cart">
                    <div class="title">
                      <div class="row"></div>
                    </div>
                    <div class="row border-top border-bottom">
                      <div class="row main align-items-center">
                        <div class="col-2">
                          <img class="img-fluid" src={item.image} />
                        </div>
                        <div class="col">
                          <div class="row text-muted">{item.category}</div>
                          <div class="row">{item.title}</div>
                        </div>
                        <div class="col">
                          <button>-</button>
                          <span class="border px-2">1</span>
                          <button>+</button>
                        </div>
                        <div class="col">
                          &euro; {item.price}{" "}
                          <span class="close">&#10005;</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="row main align-items-center"></div>
                    </div>
                  </div>
                  <div class="col-md-4 summary">
                    <div>
                      <h5>
                        <b>Summary</b>
                      </h5>
                    </div>

                    <div
                      class="row"
                      style={{
                        borderTop: "1px solid rgba(0,0,0,.1)",
                        padding: "2vh 0",
                      }}
                    >
                      {/* <div class="col">TOTAL PRICE</div>
                    <div class="col text-right">&euro; 137.00</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
