import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={`footer mt-auto py-3 bg-default ${styles.footerBg}`}>
        <div className="container">
          <span className="text-muted">Place footer content here.</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
