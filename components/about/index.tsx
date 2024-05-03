import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";
import Eye from "@/svgs/eye";
import Mission from "@/svgs/mission";
import Vision from "@/svgs/vision";

const About = () => {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <h2>About us</h2>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutVision}>
            <div>
              <Eye />
              <h2>Our Vision</h2>
            </div>
            <p>Farm Link Connect ia aimed at connecting merchants with farmers and potentially attracting investors to support promising farming initiatives. </p>
          </div>
          <div className={styles.aboutCont}>
            <div className={styles.aboutSingle}>
              <div>
                <Mission /> <h2>Our Mission</h2>
              </div>
              <p>Farm Link Connect ia aimed at connecting merchants with farmers and potentially attracting investors to support promising farming initiatives. </p>
            </div>
            <div className={styles.aboutSingle}>
              <div>
                <Vision /> <h2>Our Values</h2>
              </div>
              <p>Farm Link Connect ia aimed at connecting merchants with farmers and potentially attracting investors to support promising farming initiatives. </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
