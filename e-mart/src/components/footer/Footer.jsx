import { Button } from "bootstrap";
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={`footer mt-auto  bg-default ${styles.footerBg}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12">
              <h4 className={`${styles.base1} text-white`}>Company</h4>
              <p className={`text-muted ${styles.base2}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quibusdam quis voluptatum, soluta harum id officiis dolore,
                aperiam architecto
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <h4 className={`${styles.base1} text-white`}>NewsLetter</h4>
              <p className="text-muted">Join us for get latest update</p>
              <div className="d-flex">
                <input
                  type="name"
                  placeholder="Enter an email"
                  className="form-control form-control-sm me-2"
                  style={{ width: "18em" }}
                  required
                ></input>
                <div className="">
                  <button type="submit" className="btn btn-success btn-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <h4 className={`${styles.base1} text-white`}>Contact</h4>
              <ul className={` ${styles.foot_ul}`}>
                <li>
                  🗺<span className="text-muted">E-mart store United state</span>
                </li>
                <li>
                  📞<span className="text-muted">000-000-000</span>
                </li>
                <li>
                  📠<span className="text-muted">123456</span>
                </li>
                <li>
                  📧<span className="text-muted">e-mart@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.bottfoot}`}>
          <p className="text-center mb-0">
            Copyright @2021 Restant . All Rights Reserved By{" "}
            <a href="/" className="font-weight-bold text-light">
              E-mart
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
