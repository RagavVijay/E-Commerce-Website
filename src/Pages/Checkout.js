import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Checkout()
{
    const state = useSelector((state) => state.handleCart);
    const EmptyCart = () => {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-12 py-5 bg-light text-center">
                <h4 className="p-3 display-5">No item in Cart</h4>
                <Link to="/" className="btn btn-outline-dark mx-4">
                  <i className="fa fa-arrow-left"></i> Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        );
      };

    const ShowCheckout = () => {
        let subtotal = 0;
        let shipping = 30.0;
        let totalItems = 0;
        state.map((item) => {
          return (subtotal += item.price * item.qty);
        });
    
        state.map((item) => {
          return (totalItems += item.qty);
        });
        return (
          <>
            <div>
              <div>
                <div>
                  <div className="ordersummary">
                    <div>
                      <h2>Order Summary</h2>
                    </div>
                    <div>
                      <ul>
                        <li>
                          Products ({totalItems})<span>${Math.round(subtotal)}</span>
                        </li>
                        <li>
                          Shipping
                          <span>${shipping}</span>
                        </li>
                        <li>
                          <div>
                            <strong>Total amount</strong>
                          </div>
                          <span>
                            <strong>${Math.round(subtotal + shipping)}</strong>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <hr/>
                <div>
                  <div>
                    <div>
                      <h2 className="Title-billingaddress">Billing Address</h2>
                    </div>
                    <div>
                      <form>
                        <div className="billingaddress">
                          <div>
                            <label>
                              First name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              placeholder="Enter your first name"
                              value=""
                              required
                            />
                          </div>
    
                          <div>
                            <label>
                              Last name
                            </label>
                            <input
                              type="text"
                              
                              id="lastName"
                              placeholder="Enter your last name"
                              value=""
                              required
                            />
                          </div>
    
                          <div>
                            <label >
                              Email
                            </label>
                            <input
                              type="email"
                              
                              id="email"
                              placeholder="you@example.com"
                              required
                            />
                          </div>
    
                          <div>
                            <label>
                              Address
                            </label>
                            <input
                              type="text"
                              
                              id="address"
                              placeholder="1234 Main St"
                              required
                            />
                          </div>
    
                          <div>
                            <label>
                              Address 2{" "}
                              <span>(Optional)</span>
                            </label>
                            <input
                              type="text"
                              
                              id="address2"
                              placeholder="Apartment or suite"
                            />
                          </div>
    
                          {/* <div>
                            <label>
                              Country
                            </label>
                            <br />
                            <select id="country" required>
                              <option value="">Choose...</option>
                              <option>India</option>
                            </select>
                          </div>
    
                          <div>
                            <label>
                              State
                            </label>
                            <br />
                            <select id="state" required>
                              <option value="">Choose...</option>
                              <option>TamilNadu</option>
                            </select>
                          </div> */}
    
                          <div>
                            <label>
                              Zip
                            </label>
                            <input
                              type="text"
                              
                              id="zip"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
    
                        <hr/>
    
                        <h2 className="Title-payment">Payment</h2>
    
                        <div className="billingaddress">
                          <div>
                            <label>
                              Name on card
                            </label>
                            <input
                              type="text"
                              
                              id="cc-name"
                              placeholder="Full name as displayed on card"
                              required
                            />
                          </div>
    
                          <div>
                            <label>
                              Credit card number
                            </label>
                            <input
                              type="text"
                              
                              id="cc-number"
                              placeholder=""
                              required
                            />
                          </div>
    
                          <div>
                            <label>
                              Expiration
                            </label>
                            <input
                              type="text"
                              
                              id="cc-expiration"
                              placeholder="xx/yy"
                              required
                            />
                          </div>
    
                          <div>
                            <label>
                              CVV
                            </label>
                            <input
                              type="text"
                              
                              id="cc-cvv"
                              placeholder="xxx"
                              required
                            />
                          </div>
                        </div>
    
                        <hr className="my-4" />
    
                        <button
                          
                          type="submit" className="btn-checkout"
                        >
                          Continue to checkout
                        </button>
                        <button className="btn-goback"  onClick={() => navigate(-1)}>
                          Go Back
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      };

      const navigate = useNavigate();
    return<>
        <Header />
        <div>
            <h1>Checkout</h1>
            <hr />
            {state.length ? <ShowCheckout /> : <EmptyCart />}
        </div>
        <Footer />
    </>
}