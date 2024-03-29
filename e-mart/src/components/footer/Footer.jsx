import React, { useState } from "react";
import styles from "./Footer.module.css";
import { ToastContainer, toast } from "react-toastify";

function Footer() {
  const [email, setemail] = useState("");
  const subuser = () => {
    toast.success(`Thank you for subscribing.`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
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
                  <button
                    type="email"
                    className="btn btn-success btn-sm"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    onClick={subuser}
                  >
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
            Copyright @2021,{" "}
            <a href="/" className="font-weight-bold text-light">
              E-mart
            </a>
            . All Rights Reserved
          </p>
        </div>
      </footer>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Footer;
