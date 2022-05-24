import React from 'react';
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {useFetch} from "../../../../Request/useFetch";
import {useCart} from "../../../../Providers/CartProvider";
import {encode, decode} from 'base-64';
import {TwitterShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    EmailShareButton,
    WhatsappShareButton,
    FacebookIcon,
    LinkedinIcon,
    EmailIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";


const ShopSingleView = () => {

    let {t} = useTranslation();
    let param = useParams();
    let paramId = decode(param.id);
    let cart = useCart();

    let originalQuantity = cart.cartProductQuantity(paramId);
    let url = {url: t('hostProductUrl')};
    const [loader, products] = useFetch(url);
    const [loading, product] = useFetch({url: t('hostAProductUrl') + '/' + paramId});
    const [relatedItems, setRelatedItems] = React.useState([]);
    const [add, setAddToCartState] = React.useState(false);
    const [wish, setAddToWishListState] = React.useState(false);
    const [quantity, setQuantity] = React.useState(originalQuantity);


    const increaseQuantity = (e) => {
        e.preventDefault();
        if(quantity > product.quantity){
            return;
        }
        setAddToCartState(false);
        setQuantity((prev) => {
            return prev + 1;
        });
    }

    const decreaseQuantity = (e) => {
        e.preventDefault();
        setAddToCartState(false);
        if (quantity > 1) {
            setQuantity((prev) => {
                return prev - 1;
            });
        }

    }

    const updateCart = () => {
        let newProduct = {
            p_id: paramId,
            productName: product.product_name,
            quantity: quantity,
            price: product.price,
            image:product.images[0].filename,
            description:product.description
        }
        cart.addToCart(newProduct);
        setAddToCartState(true);
    }

    const socialMediaButton={
        "&:hover > svg": {
           paddingRight:"12px;"
        },
    };

    if (loading || loader) {
        return (
            <React.Fragment>
                <div style={{position: "relative", top: '40%', left: '28%'}}>
                    <h5>{t('loading')}</h5>
                </div>
            </React.Fragment>

        );
    }
    if (relatedItems.length === 0 && products.length !== 0) {
        let prods = products.filter((prod) => {
            if (prod.brand === product.brand) {
                return prod;
            }
        });
        setRelatedItems(prods);
    }


    return (
        <React.Fragment>
            <section id="product" className="shop shop-product bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12  col-md-9">
                            {
                                !add ? (<div className="alerts">
                                    <div className="alert-icon">
                                        <i className="fa fa-check-circle"></i>
                                    </div>
                                    <div className="alert-content">
                                        <h4>{t('itemAddedToCartInfo')}</h4>
                                        <p>{t('itemAddedToCartInstruct')}</p>
                                    </div>
                                </div>) : (<div className="alerts">
                                    <div className="alert-icon">
                                        <i className="fa fa-check-circle"></i>
                                    </div>
                                    <div className="alert-content">
                                        <h4>{t('itemAddedToCartTitle')}</h4>
                                        <p>{t('itemAddedToCartMsg')}</p>
                                    </div>
                                    <br/>
                                </div>)
                            }
                            {
                                wish && (<div className="alerts">
                                    <div className="alert-icon">
                                        <i className="fa fa-check-circle"></i>
                                    </div>
                                    <div className="alert-content">
                                        <h4>{t('itemAddedToWishListTitle')}</h4>
                                        <p>{t('itemAddedToCartMsg')}</p>
                                    </div>
                                </div>)
                            }

                            <div className="product-img mb-50">
                                <img className="img-responsive" src={product.images[0].filename}
                                     alt="product image" style={{width: "100%", height: "500px"}}/>
                            </div>
                            <hr/>
                            <div className="product-img m-0 p-0">
                                <h5>Models:</h5>
                                <div className='row'>
                                    {
                                        product.images.map((image, index) => {
                                            if (index > 0) {
                                                return (
                                                    <div className="col-xs-2"
                                                         key={image._id} style={{padding: '0px', margin: '0px'}}>
                                                        <div className="product--img"
                                                             style={{padding: '0px', margin: '0px'}}>
                                                            <img src={image.filename} alt="Product"
                                                                 style={{
                                                                     width: "80px",
                                                                     height: "80px",
                                                                     padding: '0px',
                                                                     margin: '0px'
                                                                 }}/>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                    <div className="product-meta mb-30">
                                        <div className="product-price pull-left pull-none-xs">

                                        </div>
                                        <div className="product-review text-right text-center-xs">
							<span className="product-rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star-half-o"></i>
							<i className="fa fa-star-o"></i>
							</span>
                                        </div>
                                    </div>
                                    <div className="product-desc">
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <hr/>
                            <div className="product-details">
                                <h5>Other Details :</h5>
                                <ul className="list-unstyled">
                                    <li>Product : <span>{product.product_name}</span></li>
                                    <li>Code : <span>#{product._id}</span></li>
                                    <li>Availabiltity
                                        : <span>{product.quantity > 0 ? 'Available' : 'Not Available'}</span></li>
                                    <li>Brand : <span>{product.brand}</span></li>
                                    <li>Quantity in Stock: <span>{product.quantity}</span></li>
                                    <li>Price: <span>{product.price}$</span></li>
                                </ul>
                            </div>
                            <hr/>
                            <div className="product-action clearfix">
                                <div className="product-quantity pull-left pull-none-xs">
                                    <span className="qua">Quantity:</span>
                                    <span> <a href="#"><i className="fa fa-minus" onClick={decreaseQuantity}></i></a>
					<input type="text" value={quantity} id="pro-qunt" readOnly/>
					<a href="#"><i className="fa fa-plus" onClick={increaseQuantity}></i></a> </span>
                                </div>
                                <div className="product-cta text-right text-center-xs">
                                    <button className="btn btn--primary" onClick={updateCart} style={{paddingLeft:"12px",paddingRight:"12px",width:"23%"}}>{t('addToCard')}</button>
                                    <button className="btn btn--secondary" href="#"
                                            style={{width: '20%'}}>{t('AddToWishList')}</button>
                                </div>
                            </div>
                            <hr/>

                            <div className="product-share">
                                <h5 className="share-title">share product: </h5>
                                 <FacebookShareButton
                                        url={t('appBaseUrl')  + t('shopUrl') + t('shopSingleUrl') + '/' + param.id}
                                        quote={product.description}
                                        hashtag={'#' + product.product_name}
                                        className='share-facebook' style={{paddingRight: "5px"}}>
                                        <FacebookIcon size={36} round={true}/>
                                    </FacebookShareButton>
                                <TwitterShareButton
                                    url={t('appBaseUrl') + t('shopUrl')  + t('shopSingleUrl') + '/' + param.id}
                                    hashtags={['#' +product.description]}
                                    title={product.product_name}
                                    className='share-twitter' style={{paddingRight: "5px"}}>
                                    <TwitterIcon size={36} round={true} />
                                </TwitterShareButton>
                                <WhatsappShareButton
                                    url={t('appBaseUrl')  + t('shopUrl')  + t('shopSingleUrl') + '/' + param.id}
                                    hashtag={product.description}
                                    title={'#' + product.product_name}
                                    className='share-twitter' style={{paddingRight: "5px"}}>
                                    <WhatsappIcon size={36} round={true}/>
                                </WhatsappShareButton>
                                <LinkedinShareButton
                                    url={t('appBaseUrl')  + t('shopUrl') + t('shopSingleUrl') + '/' + param.id}
                                    summary={product.description}
                                    title={'#' + product.product_name}
                                    className='share-linkedin' style={{paddingRight: "5px"}}>
                                    <LinkedinIcon size={36} round={true}/>
                                </LinkedinShareButton>
                                <EmailShareButton
                                    body={product.description + ':' + t('appBaseUrl')  + t('shopUrl') + t('shopSingleUrl') + '/' + param.id}
                                    subject={product.product_name}
                                    className='share-google-plus'>
                                    <EmailIcon size={36} round={true} />
                                </EmailShareButton>
                            </div>

                            <div className="product-tabs">

                                <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active"><a href="#description"
                                                                                  aria-controls="description"
                                                                                  role="tab"
                                                                                  data-toggle="tab">{t('description')}</a>
                                    </li>
                                    <li role="presentation"><a href="#details" aria-controls="details"
                                                               role="tab" data-toggle="tab">details</a></li>
                                   {/* <li role="presentation"><a href="#reviews" aria-controls="reviews"
                                                               role="tab" data-toggle="tab">reviews(2)</a>
                                    </li>*/}
                                </ul>

                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="description">
                                        <p>
                                            {product.description}
                                        </p>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="details">
                                        <h5>Technical Details</h5>
                                        <table className="table table-striped">
                                            <tbody>
                                            <tr>
                                                <td>Part Number</td>
                                                <td>{product._id}</td>
                                            </tr>
                                            <tr>
                                                <td>Item Weight</td>
                                                <td>{product.price}{t('currency')}</td>
                                            </tr>
                                            <tr>
                                                <td>Product Dimensions</td>
                                                <td>{product.sizes.toString()} inches</td>
                                            </tr>
                                            <tr>
                                                <td>Item model number</td>
                                                <td>{product.brand}</td>
                                            </tr>
                                            <tr>
                                                <td>Item Package Quantity</td>
                                                <td>{product.quantity}</td>
                                            </tr>
                                            <tr>
                                                <td>Number of Handles</td>
                                                <td>{product.images.length}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/*    <div role="tabpanel" className="tab-pane reviews" id="reviews">
                                        <ul className="product-review list-unstyled">
                                            <li className="review-comment">
                                                <h6>Mostafa Amin</h6>
                                                <p className="review-date">22/02/2016</p>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                                <div className="product-comment">
                                                    <p>Lorem ipsum dolor sit amet, mauris suspendisse
                                                        viverra eleifend tortor tellus suscipit, tortor
                                                        aliquet at nulla mus, dignissim neque, nulla neque.
                                                        Ultrices proin mi urna nibh ut, aenean sollicitudin
                                                        etiam libero nisl, ultrices ridiculus in magna purus
                                                        consequuntur, ipsum donec orci ad vitae pede, id
                                                        odio.</p>
                                                </div>
                                            </li>

                                            <li className="review-comment">
                                                <h6>Mohamed Habaza</h6>
                                                <p className="review-date">21/02/2016</p>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <div className="product-comment">
                                                    <p>Lorem ipsum dolor sit amet, mauris suspendisse
                                                        viverra eleifend tortor tellus suscipit, tortor
                                                        aliquet at nulla mus, dignissim neque, nulla neque.
                                                        Ultrices proin mi urna nibh ut, aenean sollicitudin
                                                        etiam libero nisl, ultrices ridiculus in magna purus
                                                        consequuntur, ipsum donec orci ad vitae pede, id
                                                        odio.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="form-review">
                                            <form>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Your Name"/>
                                                <input type="email" className="form-control" id="email"
                                                       placeholder="Your Email"/>
                                                <select className="form-control">
                                                    <option value="Default">Your Rating</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                                <textarea className="form-control" id="review" rows="2"
                                                          placeholder="your Review"></textarea>
                                                <button type="submit"
                                                        className="btn btn--primary btn-block">Post Your review
                                                </button>
                                            </form>
                                        </div>
                                    </div>*/}
                                </div>

                            </div>

                           {/* <div className="row">
                                <div className="col-xs-12 col-sm-12  col-md-12 clearfix mb-60 text--center">
                                    <ul className="pagination">
                                        <li>
                                            <a href="#" aria-label="Next">
                                                            <span aria-hidden="true"><i
                                                                className="fa fa-angle-left"></i></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                            <span aria-hidden="true"><i
                                                                className="fa fa-angle-right"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>*/}
                            {/* .row end */}
                            <div className="product-related shop-categories">
                                <div className="product-related-title">
                                    <h5>{t('relatedItems')} :</h5>
                                </div>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                                <div className="row">

                                    {
                                        relatedItems.map((pd, index) => {
                                            if (pd._id != product._id) {
                                                return (
                                                    <div className="col-xs-12 col-sm-6 col-md-4 product-item"
                                                         key={++index}>
                                                        <div className="product--img">
                                                            <img src={pd.images[0].filename} alt="Product" style={{width:"250px",height:"350px"}}/>
                                                            <div className="product--hover">
                                                                <div className="product--action">
                                                                    <a href={t('shopUrl') + t('shopSingleUrl') + '/' + encode(pd._id)}>{t('addToCard')}</a>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="product--content">
                                                            <div className="product--title">
                                                                <h3><a href="#">{pd.product_name}</a></h3>
                                                            </div>
                                                            <div className="product--price">
                                                                <span>{t('currency') + pd.price}</span>
                                                            </div>

                                                        </div>
                                                    </div>

                                                )
                                            }
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12  col-md-3 sidebar-full">

                        </div>
                    </div>


                </div>

            </section>


        </React.Fragment>
    )
}
export default ShopSingleView;
