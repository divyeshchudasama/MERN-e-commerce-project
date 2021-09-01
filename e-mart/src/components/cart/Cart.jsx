import React, {useState}from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import images from "../../images/bird.jpg"


function Cart() {

 const [count, setCount] = useState(0)
  const decrementValue = () => {
      setCount(count-1)
  }

  const incrementValue = () => {
    setCount(count+1)
   }
  return (
    <section>
      <div className="container py-5">
        <div className="">
          <div className="row">
            <div className="col-lg-8 col-sm-8 col-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className={styles.cartBg}>
                      <th className="text-white p-3">Product</th>
                      <th className="text-white p-3">Quantity</th>
                      <th className="text-white p-3">Price</th>
                      <th className="text-white p-3">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <td>
                          <div className="">
                            {/* <p className="">LENOVO G50</p> */}
                            <Link className={styles.links} to="/details">
                             LENONO G50
                             </Link>
                          </div>
                      </td>
                      <td>
                        <div className="mc-count">
                          <input type="button" onClick="decrementValue()" value="-" className={styles.inc} onClick={decrementValue}/>
                          <input type="text" name="quantity" value={count} maxLength="2" max="100" size="1" id="number" className={styles.num}/>
                          <input type="button" onClick="incrementValue()" value="+" className={styles.inc} onClick={incrementValue}/>
                        </div>
                      </td>
                      <td className="text-muted">Rs.500</td>
                      <td className="font-width-bold">Rs. 555/-  <FontAwesomeIcon icon={faTrash} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-12">
              <div className="">
                <div className={styles.cartBg}>
                  <h5 className={`text-white py-3 text-center mb-0`}>Your Order <span className={styles.detf}>(Details)</span></h5>
                </div>
                <div className="border py-3 px-3">
                  <h5 className={`${styles.d} font-weight-bold`}>Billing Details</h5>
                  <div className="d-flex justify-content-between">
                    <div className="text-muted">Items Total</div>
                    <div className="text-muted"> Rs. 500/-</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="text-muted">Delevery Fee</div>
                    <div className="text-muted"> Rs. 00/-</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="text-muted">Tax & clear</div>
                    <div className="text-muted"> Rs. 00/-</div>
                  </div>
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <div className="text-muted"><h6>Total</h6></div>
                    <div className="text-muted"><h6>Rs.500/-</h6></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
         
        </div>

      </div>
    </section>

  );
}

export default Cart;
