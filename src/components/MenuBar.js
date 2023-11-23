import React from 'react'
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div>
    <ul className="nav justify-content-center nav-fill bg-info-subtle border border-3 border-info-subtle rounded-4">
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/">
        Mobiles/Tablets
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/">
        Laptops
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/">
        Headphones
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/">
        Accessories
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/">
        Televisions
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/">
        Home appliances
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/">
        More...
      </Link>
    </li>
  </ul>
  <br />
  <br />
  </div>
  )
}

export default MenuBar