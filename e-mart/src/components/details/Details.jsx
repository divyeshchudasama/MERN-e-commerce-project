import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./Details.module.css";
import images from "../../images/bird.jpg"

function Details() {
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-5 col-sm-5 col-12">
            <div >
              <img  src={images} alt="" className={styles.dimage}></img>
            </div>
          </div>
          <div className="col-lg-7 col-sm-7 col-12">
            <div className="">
              <h4>Accuseantium Doloremque</h4>
            </div>

            <div className="rating-wapper my-2">
              <span className="">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
              <a href="" className="m-3">1 reviews</a>
            </div>
            <div className="">
              <ul className={styles.deus} >
                <li><span className={styles.decs}>Manufacture</span><h6>DGP</h6></li>
                <li><span className={styles.decs}>Product Code</span>Product123</li>
                <li><span className={styles.decs}>Reward Points</span>300</li>
                <li><span className={styles.decs}>Avaliabilty</span>In Stock</li>
              </ul>
            </div>
            <div className="my-3">
              <h4>Description</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque mollitia harum quae corrupti vero minus alias molestias
                 non neque fuga doloribus doloremque voluptates iusto iure pariatur vitae, cum qui cumque?</p>
            </div>
            <div className={`d-flex justify-content-between align-item-center points`}>
          
                <div className="">
                  <ul className="list-unstyled">
                    <li><h3 className="">Rs.500/-</h3></li>
                    <li className="">Ex Tax: Rs. 85.00</li>
               
                  </ul>
                </div>
                <div className="">
                  <label>QTY</label>
                  <input type="text" name="quality" value="1" size="2" id="" className={styles.qty}></input>
                  <button variant="success"
                        className={`${styles.btn}`}
                        type="submit">Add To cart</button>
                
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    // <div>
    //   <h3>Details</h3>
    //   <h2>Praveen</h2>
    // </div>
  );
}

export default Details;
