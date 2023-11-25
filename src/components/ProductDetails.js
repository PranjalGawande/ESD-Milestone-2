import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/productdetails.json";
import cartProductsData from "../data/products.json";
import { Link } from 'react-router-dom';

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [cartproduct, setcartProduct] = useState(null);
  const [newReview, setNewReview] = useState({
    user: "",
    title: "",
    comment: "",
    rating: 0,
  });
  const [quantity] = useState(1);

  const handleAddtoCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cartData.findIndex(
      (item) => item.id === cartproduct.id
    );
    if (existingProductIndex !== -1) {
      cartData[existingProductIndex].quantity += quantity;
    } else {
      cartData.push({
        id: cartproduct.id,
        name: cartproduct.name,
        curr_price: cartproduct.curr_price,
        del_price: cartproduct.del_price,
        quantity: quantity,
        description: cartproduct.description,
        imagePath: cartproduct.imagePath,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cartData));

    alert("Product added to cart!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const updatedProductDetails = [...productsData];
    const productIndex = updatedProductDetails.findIndex(
      (p) => String(p.id) === productId
    );

    if (productIndex !== -1) {
      updatedProductDetails[productIndex].reviews.push({
        id: new Date().getTime(),
        ...newReview,
      });

      setProduct(updatedProductDetails[productIndex]);
      setNewReview({
        user: "",
        title: "",
        comment: "",
        rating: 0,
      });
    }
  };

  useEffect(() => {
    const selectedProduct = cartProductsData.find(
      (p) => String(p.id) === productId
    );

    setcartProduct(selectedProduct);
  }, [productId]);

  useEffect(() => {
    const selectedProduct = productsData.find(
      (p) => String(p.id) === productId
    );
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const formatCurrency = (value) => {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });
    return formatter.format(value);
  };

  const highlightsList = product.highlights.split(",").map((item, index) => (
    <div key={index}>
      {item.trim()}{" "}
      <br />
    </div>
  ));

  return (
    <>
      <div className="product-d container d-flex flex-wrap ">
        <div className="container-fluid d-flex justify-content-around">
          <div className="left-prod container-fluid gx-5">
            <div
              id="carouselExample"
              className="carousel carousel-dark slide d-flex justify-content-around"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={product.imagePath1}
                    className="d-block w-100"
                    alt={product.name}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={product.imagePath2}
                    className="d-block w-100"
                    alt={product.name}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={product.imagePath3}
                    className="d-block w-100"
                    alt={product.name}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>

            </div>
            <div className="buttons container-fluid d-flex justify-content-around">
              <button className="shadow btn btn-lg btn-warning" onClick={handleAddtoCart} >
                Add to Cart
              </button>
              <Link to="/cart" className="shadow btn btn-lg btn-primary" onClick={handleAddtoCart}>
                Buy Now
              </Link>
            </div>
          </div>

          {/* Product details */}
          <div className="product-details">
            <h2> {product.name}</h2>
            <h5>
              {Array.from({ length: 5 }, (_, index) => {
                const starValue = index + 1;
                const starClass =
                  starValue <= Math.floor(product.rating)
                    ? "fas fa-star"
                    : starValue - 0.5 <= product.rating
                      ? "fas fa-star-half-alt"
                      : "far fa-star";
                return (
                  <i
                    key={index}
                    className={starClass}
                    style={{ color: "orange" }}
                  ></i>
                );
              })}{" "}
              {product.rating.toFixed(1)}
            </h5>

            <h2> {formatCurrency(product.curr_price)} </h2>
            <p>
              <del>{formatCurrency(product.del_price)}</del>
            </p>
            <p>Free Delivery by tomorrow</p>
            <p className="highlights"></p>
            <p className="text-bg-light">Highlights</p>
            {highlightsList}
            
            <p />
            <p className="description container d-flex flex-wrap"></p>
            <p className="text-bg-light">Description</p>
            {product.description}
            <p />
          </div>
        </div>
      </div>
      
      {/* Rating and Reviews */}
      <div className="rating-review  container-fluid d-flex justify-content-around align-items-center">
        <div className="reviews-submit card p-1"> 
          <h2 className="text-center row-gap-5">Submit a Review</h2>
          <span className="border-bottom" />

          <div className="d-flex flex-wrap">
            <form onSubmit={handleReviewSubmit} className="row g-4">
              <div className="col-md-6">
                <label htmlFor="user" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  name="user"
                  value={newReview.user}
                  onChange={handleInputChange}
                  className="form-control"
                  id="user"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  value={newReview.title}
                  onChange={handleInputChange}
                  className="form-control"
                  id="title"
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="comment" className="form-label">
                  Comment:
                </label>
                <textarea
                  name="comment"
                  value={newReview.comment}
                  onChange={handleInputChange}
                  className="form-control"
                  id="comment"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="rating" className="form-label">
                  Rating:
                </label>
                <input
                  type="number"
                  name="rating"
                  value={newReview.rating}
                  onChange={handleInputChange}
                  step="0.1"
                  min="1"
                  max="5"
                  className="form-control"
                  id="rating"
                  required
                />
              </div>

              <span className="border-bottom" />
              <div className="buttons-review d-flex justify-content-around">
                <button type="submit" className="shadow btn btn-lg btn-warning">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="reviews card p-1">
          <h2 className="text-center row-gap-5">Reviews and Ratings</h2>
          <span className="border-bottom" />

          {product.reviews.map((review) => (
            <div>
              <div className="d-flex flex-wrap">
                <div className="border-review"></div>
                <div className="small-ratings">
                  {Array.from({ length: 5 }, (_, index) => {
                    const starValue = index + 1;
                    const starClass =
                      starValue <= Math.floor(review.rating)
                        ? "fas fa-star"
                        : starValue - 0.5 <= review.rating
                          ? "fas fa-star-half-alt"
                          : "far fa-star";
                    return (
                      <i
                        key={index}
                        className={starClass}
                        style={{ color: "orange" }}
                      ></i>
                    );
                  })}{" "}
                  {review.rating}
                </div>
                <pre className="review-stat row-gap-5">
                  {"  "}
                  {review.title}
                  {"  "}
                </pre>
                <p className="review-name text-dark-subtle">-{review.user}
                </p>
              </div>
              <p className="card-text" style={{ marginBottom: '10px' }}>
                {review.comment}
              </p>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

