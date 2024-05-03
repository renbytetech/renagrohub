import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";
import Image from "next/image";

const Aims = () => {
  return (
    <Layout>
      <div className={styles.aimsContainer}>
        <div className={styles.aimsPicture}>
          <div>
            <Image src="/images/aims1.png" width={195} height={284} alt="Aims" />
            <Image src="/images/aims2.png" width={436} height={284} alt="Aims" />
          </div>
          <div>
            <Image src="/images/aims2.png" width={436} height={284} alt="Aims" />
            <Image src="/images/aims1.png" width={195} height={284} alt="Aims" />
          </div>
        </div>
        <div className={styles.aimsText}>
          <h2>Linking Merchants with Farmers and investors</h2>
          <p>Our aim is to allow merchants search for farmers based on location, crop type and other relevant criteria.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Aims;
