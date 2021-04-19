import React from "react";
import "../../Styles/footer.css";
import card from '../../img/card_img.png';

export default function Footer() {
  return (
    <div>
      <div className="footer-arena">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-30">
                  <h6>Address office</h6>
                </div>
                <div className="footer-contact-info">
                  <ul>
                    <li>
                      <p>
                        Park Street 223b Nwe York, CA 70413
                        <span>Open:</span> 8:30 AM 9:30PM
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-headphones" /> <span>Phone : </span>
                      +24 1245 654 235
                    </li>
                    <li>
                      <i className="fas fa-envelope-open" />
                      <span>Email : </span>info@exemple.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-30">
                  <h6>trend games</h6>
                </div>
                <div className="fw-link">
                  <ul>
                    <li>
                      <a href="#">The King: Judge Destiny</a>
                    </li>
                    <li>
                      <a href="#">PUBG Mobile UC</a>
                    </li>
                    <li>
                      <a href="#">Era of Celestials</a>
                    </li>
                    <li>
                      <a href="#">Legacy of Discord</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-30">
                  <h6>Need Help?</h6>
                </div>
                <div className="fw-link">
                  <ul>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Refund Policy</a>
                    </li>
                    <li>
                      <a href="#">FAQ Use Cases</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-30">
                  <h6>Recent Comments</h6>
                </div>
                <div className="rc-comments">
                  <ul>
                    <li>
                      <span>Elon Musk :</span>
                      <a href="#">Designed for Support Our super suppor</a>
                    </li>
                    <li>
                      <span>Jonny Bairstow :</span>
                      <a href="#">Wired Full Coverag Super Support Bra</a>
                    </li>
                    <li>
                      <span>Tomas Musk :</span>
                      <a href="#">Top game for Support Our super suppor</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>
                  Copyright © 2020 <a href="#">Vinom</a> All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-none d-md-block">
              <div className="payment-method-img text-right">
                <img src={card} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
