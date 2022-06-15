import React from "react";
import { Link } from "react-router-dom";
import "../MyComponentsCss/Footer2.css";

export const Footer2 = (props) => {
  return (
    <section className="Footer2Section">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
      ></link>
      <footer class="footer">
        <div class="container_footer">
          <div class="row_footer">
            <div class="col_footer">
              <h4>{props.company}</h4>
              <ul>
                <li>
                  <Link to="/about">{props.aboutUs}</Link>
                </li>
                <li>
                  <Link to="/">{props.Home}</Link>
                </li>
                <li>
                  <Link to="">{props.privacyPollicy}</Link>
                </li>
                <li>
                  <Link to="">{props.affiliatProgramme}</Link>
                </li>
              </ul>
            </div>

            <div class="col_footer">
              <h4>get Help</h4>
              <ul>
                <li>
                  <Link to="">{props.FAQ}</Link>
                </li>
                <li>
                  <Link to="">{props.shipping}</Link>
                </li>
                <li>
                  <Link to="">{props.returns}</Link>
                </li>
                <li>
                  <Link to="">{props.orderStatus}</Link>
                </li>
                <li>
                  <Link to="">{props.paymentOptions}</Link>
                </li>
              </ul>
            </div>

            <div class="col_footer">
              <h4>online Shop</h4>
              <ul>
                <li>
                  <Link to="">{props.watch}</Link>
                </li>
                <li>
                  <Link to="">{props.bag}</Link>
                </li>
                <li>
                  <Link to="">{props.shoes}</Link>
                </li>
                <li>
                  <Link to="">{props.dress}</Link>
                </li>
              </ul>
            </div>

            <div class="col_footer">
              <h4>{props.followUs}</h4>
              <div class="social_links">
                <Link to="#">
                  <i class="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i class="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i class="fab fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i class="fab fa-linkedin"></i>
                </Link>
                <Link to="#">
                  <i class="fab fa-discord"></i>
                </Link>
              </div>
            </div>

            <div className="copy_Right">
                <div className="copy_Flex">
                <p className="copy_Paragraph">sanjivpaul.com &copy; all rights reserved</p>
                </div> 
            </div>

          </div>
        </div>
      </footer>
    </section>
  );
};
