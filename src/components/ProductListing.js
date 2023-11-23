import React from 'react'
import { useState, useEffect } from 'react';        // Hooks
import productsData from '../data/products.json'
import { Link } from 'react-router-dom'; // Import the Link component


const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {             // getting products from json, run at every render
    setProducts(productsData);
  }, []);

  const formatCurrency = (value) => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });
    return formatter.format(value);
  };

  return (
    <div class="container">
      <div class="container-list d-flex flex-wrap justify-content-around row-gap-5">
        {products.map((product) => (
          <div className="card" style={{ width: "18rem" }}>
            <Link to={`/prodDetails/${product.id}`} className='text-decoration-none'>
            <img
              src={product.imagePath}
              // style={imageStyles}
              className="card-img-top"
              alt={product.name}
            />
            </Link>

            <div className="card-body d-flex flex-wrap">
              <h5>
                <Link to={`/prodDetails/${product.id}`}
                  className="card-title link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex "
                >
                  {product.name}
                </Link>
              </h5>
              <div className="prices d-flex">
                <h6 className="curr-price">
                  {formatCurrency(product.curr_price)}
                </h6>
                <p className='deleted-price '>
                  <del>{formatCurrency(product.del_price)}</del>
                </p>
              </div>
              <div className='stars'>
                {Array.from({ length: 5 }, (_, index) => {
                  const starValue = index + 1;
                  const starClass = starValue <= Math.floor(product.rating)
                    ? 'fas fa-star'
                    : starValue - 0.5 <= product.rating
                      ? 'fas fa-star-half-alt'
                      : 'far fa-star';

                  return <i key={index} className={starClass} style={{ color: 'orange' }}></i>;
                })}
              </div>
              <p className='ratingGap'>{product.rating.toFixed(1)}</p>
              <p className="card-text">{product.description}</p>
              <Link to={`/prodDetails/${product.id}`} className="container shadow btn btn-info">
                View Product
              </Link>

            </div>
          </div>

        ))
        }
      </div>
    </div >
  )
}

export default ProductListing