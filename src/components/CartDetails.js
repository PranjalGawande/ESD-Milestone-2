import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [userQuantities, setUserQuantities] = useState({});

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    setProducts(cartData);

    const defaultQuantities = {};
    cartData.forEach(product => {
      defaultQuantities[product.id] = product.quantity || 1;
    });
    setUserQuantities(defaultQuantities);
  }, []);

  const updateLocalStorage = (updatedProducts) => {
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  const handleRemoveItem = (id) => {
    const updatedProducts = products.filter(item => item.id !== id);
    setProducts(updatedProducts);
    updateLocalStorage(updatedProducts);
  };

  const handleRemoveAllItems = () => {
    setProducts([]);
    // Optionally update local storage or perform any other necessary operations
    updateLocalStorage([]); // If you want to update local storage with an empty array
  };  

  const handleQuantityChange = (productId, quantity) => {
    setUserQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: quantity,
    }));

    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, quantity };
      }
      return product;
    });

    setProducts(updatedProducts);
    updateLocalStorage(updatedProducts);
  };

  const calculateSubtotal = (product) => {
    const quantity = userQuantities[product.id] || 0;
    return (product.curr_price * quantity).toFixed(2);
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => {
      const quantity = userQuantities[product.id] || 0;
      return total + (product.curr_price * quantity);
    }, 0).toFixed(2);
  };

  const formatCurrency = (value) => { 
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });
    return formatter.format(value);
  };

  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate() + 1;

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const wordMonth = monthNames[month];
  return (
    <>
      <div className="cart-table d-flex container justify-content-center">
        <table className="table table-hover">
          <thead>
            <tr className='table_heading'>
              <th scope="col">Products</th>
              <th scope="col">Delivery Date</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map(item => (
              <tr key={item.id}>
                <td className="d-flex flex-wrap container">
                  <div className=" d-flex  " />
                  <Link to={`/prodDetails/${item.id}`}>
                  <img
                    src={item.imagePath}
                    alt={item.name}
                    height={120}
                  />
                  </Link>
                  <div className="d-block">
                    <h5>
                      <b>
                        <Link
                          to={`/prodDetails/${item.id}`}
                          className="card-title link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                        >
                          {item.name}
                        </Link>
                      </b>
                    </h5>
                    <p> {item.description} </p>
                  </div>
                </td>
                <td>Delivery by tomorrow
                  <br />
                  {` ${date} ${wordMonth},${year}`}
                </td>
                <td data-th="Quantity">
                  <button
                    className="btn btn-white border-dark-subtle dropdown-toggle"
                    type="button"
                    id={`dropdownMenuButton-${item.id}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  {userQuantities[item.id] || 1}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${item.id}`}>
                    {[...Array(10)].map((_, index) => (
                      <li key={index}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleQuantityChange(item.id, index+1)}
                        >
                          {index+1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </td>

                
                <td>
                  {item.curr_price !== undefined ? `${formatCurrency(calculateSubtotal(item))}` : 'Total not available'}
                </td>
                <td className="remove" data-th="remove">
                  <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveItem(item.id)}>
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
          <tfoot>
            <tr className="visible-xs">
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"><strong> TOTAL AMOUNT </strong></td>
              <td className="text-center">
                <strong>
                  {formatCurrency(calculateTotal())}
                </strong>
              </td>
              <td className="text-center remove"><strong></strong></td>
            </tr>
            
          </tfoot>
        </table>
      </div>
        <Link to={'/'} className='checkout btn btn-warning btn-lg rounded border-3'>
        <i className="fas fa-angle-left"></i>
        Continue Shopping
        </Link>
      <Link to={'/'} className='checkout btn btn-info btn-lg rounded border-3' onClick={() => handleRemoveAllItems()}>
        Checkout
        <i className="fas fa-angle-right"></i>
        </Link>
    </>

  )
}

// export default CartDetails