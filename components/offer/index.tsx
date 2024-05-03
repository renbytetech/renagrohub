import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";

const Offer = () => {
  return (
    <Layout>
      <div className={styles.offerContainer}>
        <h2>We offer</h2>
        <div className={styles.offerWrapper}>
          <div className={styles.offerSingle1}>
            <h2>100%</h2>
            <p>Client Satisfaction</p>
          </div>
          <div className={styles.offerSingle2}>
            <h2>100%</h2>
            <p>Accessible Market Place </p>
          </div>
          <div className={styles.offerSingle2}>
            <h2>100%</h2>
            <p>Merchant - Farmer connection</p>
          </div>
          <div className={styles.offerSingle1}>
            <h2>100%</h2>
            <p>Investors - Farmer connection </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Offer;
