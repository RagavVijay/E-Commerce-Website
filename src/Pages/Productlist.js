import React from "react";
import { useState,useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../ReduxForCart/action";


const Productlist = () => {
    const [data,setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    let componentMounted = true;

    const dispatch = useDispatch();

    const addProduct = (product) => {
    dispatch(addCart(product))
  }

    useEffect(() =>{
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products/");
            if (componentMounted) {
              setData(await response.clone().json());
              setFilter(await response.json());
              setLoading(false);
            }
      
            return () => {
              componentMounted = false;
            };
          };
      
          getProducts();
        }, []);

    const Loading = () => {
        return(<>
            <div className="col-12 py-5 text-center">
                <Skeleton height={40} width={560} />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                <Skeleton height={592} />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                <Skeleton height={592} />
            </div>
            </>);
    };

    const filterProduct = (type) => {
        const upadatedList = data.filter((item) =>
            item.category === type
        );
        setFilter(upadatedList);
    };

    const Showproducts = () => {
        return(
            <>
                <div className="category-btns">
                    <button id="common-hover" onClick={() => setFilter(data)}>All</button>
                    <button id="common-hover" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button id="common-hover" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button id="common-hover" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button id="common-hover" onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>

                {
                    filter.map((product) =>{
                        return(
                            <div className="product-container">
                                <div className="product-div-container"  id={product.id} key={product.id}>
                                    <div>
                                        <img className="product-img" src={product.image}></img>
                                    </div>
                                    <div className="product-text">
                                        <h5>{product.title.substring(0,10)}...</h5>
                                        <p>{product.description.substring(0,80)}...</p>
                                    </div>
                                    <div>
                                        <p>Price : $ {product.price}</p>
                                    </div>
                                    <div className="Buynow-Cart">
                                        <Link className="Buynow-Cart-link" to={"/product/" + product.id}> Buy Now</Link>
                                        <button className="Buynow-Cart-button" type="button"  onClick={() => addProduct(product)}> Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </>
        )
    }

    return(
        <>
            <div className="productlist-container">
                <div className="productlist-title">
                    <h2>Latest Products</h2>
                </div>
                <div className="productlist-Images">
                    {loading ? <Loading/> : <Showproducts/>}
                </div>
            </div>
        </>
    );
};

export default Productlist;