import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-all text-center text-white bg-dark">
  <br />
  <section className="">
    <div className="container-fluid text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Products</h6>
          <p>
            <Link to="/" className="text-reset">
              Mobiles
            </Link>
          </p>
          <p>
            <Link to="/" className="text-reset">
              Laptops
            </Link>
          </p>
          <p>
            <Link to="/" className="text-reset">
              Headphones
            </Link>
          </p>
          <p>
            <Link to="/" className="text-reset">
              Accessories
            </Link>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
          <p>
            <Link to="/" className="text-reset">
              FAQ
            </Link>
          </p>
          <p>
            <Link to="/" className="text-reset">
              Settings
            </Link>
          </p>
          <p>
            <Link to="/" className="text-reset">
              Terms of Use
            </Link>
          </p>
          <p>
            <Link to="/" className="text-reset">
              Help
            </Link>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p> IIIT Bangalore, Electronic city</p>
          <p>techiestore@iiitb.ac.in</p>
          <p> + 91 23456788</p>
          <p> + 91 23456789</p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Social</h6>
          <p>
            <Link to="/" className="text-reset">
              Youtube
            </Link>
          </p>
          <p>
            <Link to="/" className="text-reset">
              Twitter
            </Link>
          </p>
          <p>
            <Link to="/" className="text-reset">
              Instagram
            </Link>
          </p>
          <p>
            <Link to="/" className="text-reset">
              Facebook
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
</footer>

  )
}

export default Footer