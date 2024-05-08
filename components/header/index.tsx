"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { headerNav } from "@/utils/data";
import Link from "next/link";
import UserSvg from "@/svgs/user";
import Bars from "@/svgs/bars";
import Close from "@/svgs/close";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className={mobile ? `${styles.headerContainer}  ${styles.headerCont}` : styles.headerContainer}>
      <div className={styles.headerLogo}>
        <h2>Farm Link</h2>
        {mobile ? <Close action={() => setMobile(false)} /> : <Bars action={() => setMobile(true)} />}
      </div>
      <div className={styles.navLinks}>
        {headerNav?.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className={styles.headerButton}>
        <UserSvg />
        <p>Sign up </p>
      </div>
    </div>
  );
};

export default Header;
