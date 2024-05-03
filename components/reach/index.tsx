import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";

const Reach = () => {
  return (
    <div className={styles.reachContainer}>
      <Layout>
        <div className={styles.reachWrapper}>
          <div className={styles.reachText}>
            <h2>Reach Out To Us</h2>
            <p>
              If you have any question, inquiries or need assistance with our services, feel free to reach out. We are here to provide you with the support and informations you
              need
            </p>
          </div>
          <div className={styles.reachContact}>
            <div className={styles.reachDouble}>
              <input type="text" placeholder="First Name:" />
              <input type="text" placeholder="Last Name:" />
            </div>
            <input type="text" placeholder="Email:" />
            <textarea placeholder="Message:" />
            <button>SUBMIT</button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Reach;
