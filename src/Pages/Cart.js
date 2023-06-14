import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart,delCart } from "../ReduxForCart/action";


export default function Cart()
{
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const EmptyCart = () => {
        return(
            <div>
                <div className="cart-emptycontainer">
                    <h4>Your Cart is Empty</h4>
                    <Link to="/">Continue Shopping</Link>
                </div>
            </div>
        );
    };

    const addItem = (product) => {
        dispatch(addCart(product));
    };
    const removeItem = (product) => {
        dispatch(delCart(product));
    };

    const ShowCart = () => {
        let subtotal = 0;
        let shipping = 30.0;
        let totalItems = 0;
        state.map((item)=> {
            return (subtotal += item.price * item.qty);
        });

        state.map((item) => {
            return (totalItems += item.qty);
        });
        return(
            <>
                <div className="cart-prodcontainer">
                <div>
                    <div >
                    <div>
                        <div className="cart-itemlist">
                            <h4>Item List</h4>
                        </div>
                        <div>
                            {
                                state.map((item) => {
                                    return(
                                        <div className="cart-prod-details" key={item.id}>
                                          <div>
                                          <img
                                            src={item.image}
                                            alt={item.title}
                                            width={300}
                                            height={150}
                                            />
                                          </div>
                                          <div>
                                            <p>
                                                <strong>{item.title}</strong>
                                            </p>
                                          </div>
                                          <div>
                                            <div  className="cart-plusminus">
                                                <button onClick={() => {removeItem(item);}}>
                                                    <h3>-</h3>   
                                                </button>

                                                <h4 >{item.qty}</h4>

                                                <button onClick={() => {addItem(item);}}>
                                                    <h3>+</h3> 
                                                </button>
                                            </div>
                                            <div className="cart-plusminusprice"> 
                                                <p >
                                                <strong>
                                                    <span>{item.qty}</span>{" "}
                                                    x ${item.price}
                                                </strong>
                                                </p> 
                                            </div>      
                                          </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div> 
                    </div>
                    <div className="cart-orderdetails">
                        <div>
                            <h5>Order Summary</h5>
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

                            <Link to="/checkout" className="checkoutbtn">
                                Go to checkout
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </>
        );
    };
    return<>
        <Header/>
        <div>
            <h1>Cart</h1>
            <hr />
            {state.length > 0 ? <ShowCart /> : <EmptyCart />}
        </div>
        <Footer/>
    </>
};