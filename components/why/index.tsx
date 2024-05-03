import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";
import Image from "next/image";

const Why = () => {
  return (
    <Layout>
      <div className={styles.whyContainer}>
        <h2>Why choose us</h2>
        <div className={styles.whyWrapper}>
          <div className={styles.whySingle}>
            <Image src="/images/why1.png" width={354} height={320} alt="Why" />
            <p>Discover a wide range of hgh quality produce</p>
          </div>
          <div className={styles.whySingle}>
            <Image src="/images/why2.png" width={354} height={320} alt="Why" />
            <p>Link with investors and merchants</p>
          </div>
          <div className={styles.whySingle}>
            <Image src="/images/why1.png" width={354} height={320} alt="Why" />
            <p>Discover a wide range of hgh quality produce</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Why;
