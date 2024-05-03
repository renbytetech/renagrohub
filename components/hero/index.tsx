import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";
import Header from "../header";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroCont}></div>
      <Layout>
        <div className={styles.heroWrapper}>
          <Header />
          <div className={styles.heroText}>
            <h2>
              Connecting Farmers, Merchants <span>and</span> Investors
            </h2>
            <button>Discover More</button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Hero;
