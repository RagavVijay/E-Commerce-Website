import React,{useState,useEffect} from "react";
import Marquee from "react-fast-marquee";
import Footer from "./Footer";
import { useParams } from "react-router";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addCart } from "../ReduxForCart/action";

const ProductDetails = () => 
{

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    useEffect(() =>{
        const getProduct = async () => {
            setLoading(true);
            setLoading2(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
            const response2 = await fetch(`https://fakestoreapi.com/products/category/${data.category}`);
            const data2 =  await response2.json();
            setSimilarProducts(data2);
            setLoading2(false);
        };
        getProduct();
    },[id]);

    const Loading = () => {
        return(
            <>
                <div className="container my-5 py-2">
                    <div className="row">
                        <div className="col-md-6 py-3">
                            <Skeleton height={400} width={400}/>
                        </div>
                        <div className="col-md-6 py-5">
                            <Skeleton height={30} width={250} />
                            <Skeleton height={90} />
                            <Skeleton height={40} width={70} />
                            <Skeleton height={50} width={110} />
                            <Skeleton height={120} />
                            <Skeleton height={40} width={110} inline={true} />
                            <Skeleton className="mx-3" height={40} width={110} />
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const ShowProduct = () => {
        return(
            <>
                <div>
                    <div className="productdetails-container">
                        <div>
                            <img src={product.image} alt="product.title" width="400px" height="400px"></img>
                        </div>
                        <div className="productdetails-Details">
                            <h4>{product.category}</h4>
                            <h1>{product.title}</h1>
                            <p>Rating : {product.rating && product.rating.rate}{" ★"}</p>
                            <h3>Price : ${product.price} </h3>
                            <p>{product.description}</p>
                            <button id="common-hover" className="productdetails-button" onClick={() => addProduct(product)}>Add to Cart</button>
                            <></>
                            <Link id="common-hover" className="productdetails-Link" to="/cart" >Go to Cart</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const Loading2 = () => {
        return(
            <>
                <div className="my-4 py-4">
                    <div className="d-flex">
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                    </div>
                </div>
            </>
        );
    }; 

    const ShowSimilarProduct =() => {
        return(
            <>
                <div>
                    <div>
                        {similarProducts.map((item) =>{
                            return(
                                <div className="similarProducts-container">
                                    <div key={item.id}>
                                        <img src={item.image} height={300} width={300}></img>
                                        <div>
                                            <h5>{item.title.substring(0,15)}...</h5>
                                        </div>
                                        <div className="Buynow-Cart2">
                                            <Link id="common-hover" className="Buynow-Cart-link2" to={'/product/'+item.id}>
                                                Buy Now
                                            </Link>
                                            <button id="common-hover" className="Buynow-Cart-button2" onClick={() => addProduct(item)}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
            </>
        );
    };


    return(
        <>
        <Header/>
        <div>
            <div>{loading ? <Loading/> : <ShowProduct/>}</div>
            <div>
                <div>
                    <h2>You may also Like</h2>
                    <Marquee pauseOnHover='stop'>
                        {loading2 ? <Loading2/> : <ShowSimilarProduct/>}
                    </Marquee>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ProductDetails;