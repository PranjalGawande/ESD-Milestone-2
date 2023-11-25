import React from 'react'
import { Link } from "react-router-dom";


const ProfileDetails = () => {
  return (
    <div className="container d-flex flex-wrap justify-content-around">
      <h1>My Account</h1>
      <div className="profile-img d-flex container justify-content-center">
        <img
          src="https://i.postimg.cc/BnvdHzvn/71u-CDkpip7-L-AC-UF894-1000-QL80-removebg-preview.png"
          alt="profile-img"
          // height="18%"
        />
      </div>
      <div className="container-fluid text-center text-md-start mt-5">
        <div className="row mt-3 profile-fields">
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
            <p className="text-uppercase fw-bold mb-4"> Name</p>
            <p className="text-uppercase fw-bold mb-4">Email Address</p>
            <p className="text-uppercase fw-bold mb-4"> Mobile Number</p>
            <p className="text-uppercase fw-bold mb-4"> Address</p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <p className=" fw-bold mb-4"> Pranjal</p>
            <p className=" fw-bold mb-4">pranjal@gmail.com</p>
            <p className=" fw-bold mb-4"> + 91 23456788</p>
            <p className=" fw-bold mb-4"> IIITB</p>
          </div>
        </div>
        <div className="edit-btn d-flex justify-content-center">
          <Link to="/profile" className="btn btn-warning ">
            Edit
          </Link>
        </div>
      </div>
      
      {/* Recent Orders */}
      <div className="recent-orders d-flex container justify-content-center">
        <h3>Recent Orders</h3>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <Link to={`/prodDetails/${1}`} className='text-decoration-none'>
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/s/7/-original-imagmg6gktts6sfy.jpeg?q=70"
            className="card-img-top"
            alt="Samsung galaxy s23 ultra"
          />
        </Link>
        <div className="card-body d-flex flex-wrap">
          <h5>
            <Link
              to={`/prodDetails/${1}`}
              className="card-title link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex "
            >
              SAMSUNG Galaxy S23 Ultra 5G
            </Link>
          </h5>
          <div className="prices d-flex">
            <h6 className="curr-price">₹1,24,999 </h6>
            <p className='deleted-price '>
              <del>₹1,49,999</del>
            </p>
          </div>
          <div className='stars'>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
          </div>
          <p className="card-text">12 GB RAM | 256 GB ROM.</p>
          <Link to={`/prodDetails/${1}`} className="btn btn-info container">
            View Product
          </Link>
        </div>
      </div>
    </div>

  )
}

export default ProfileDetails