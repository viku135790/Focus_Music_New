import React from 'react'
import "./Footer.css"
const Footer = () => {

  return (
    <div className="container-fluid text-light footer mt-0 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="row g-6">
          <div className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p><i className="fa fa-map-marker-alt me-3"></i>A-88, Sec-4, Noida India</p>
            <p><i className="fa fa-phone-alt me-3"></i>+91 7045865031</p>
            <p><i className="fa fa-envelope me-3"></i>haarmkinfotech@gmail.com</p>
            {/* <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://twitter.com/Haarmkinfotech?s=08"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=100087551794392&mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://youtube.com/@HAARMKInfotech"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://instagram.com/haarmk.infotech?igshid=MzRlODBiNWFlZA=="><i className="fab fa-instagram"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/haarmk-infotech-pvt-ltd/"><i className="fab fa-linkedin-in"></i></a>
            </div> */}
          </div>
          <div className="col-md-6 col-lg-3 pop-sec">
            <h5 className="text-white mb-4 ">Insights</h5>
            <a className="btn btn-link" href="/">Cloud</a>
            <a className="btn btn-link" href="">Blockchain</a>
            <a className="btn btn-link" href="">Iot</a>
            <a className="btn btn-link" href="">CyberSecurity</a>
            <a className="btn btn-link" href="">Ai and ML</a>
          </div>
          <div className="col-md-6 col-lg-3 pop-sec">
            <h5 className="text-white mb-4 ">Services</h5>
            <a className="btn btn-link" href="/">Haarmk and AWS Cloud</a>
            <a className="btn btn-link" href="">Haarmk Enterprise Cloud</a>
            <a className="btn btn-link" href="">Haarmk and Google cloud</a>
            <a className="btn btn-link" href="">Haarmk and Microsoft Cloud</a>
            <a className="btn btn-link" href="">Data and Analytics</a>
          </div>


          <div className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>Stay ahead of the tech curve with our weekly newsletter packed with the latest IT industry news, emerging trends, and expert insights.</p>
            {/* <div className="position-relative w-100 mt-3">
              <input
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="Your Email"
                style={{ height: '48px' }}
              />
              <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                className="fa fa-paper-plane text-primary fs-4"></i></button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">HAARMK infotech</a> ,
              Copyright : All rights reserved We are tracking any intention of piracy. <a className="border-bottom" href="www.haarmk.com"></a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer