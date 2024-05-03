import React from "react";
import styles from "./styles.module.css";
import { headerNav } from "@/utils/data";
import Link from "next/link";
import UserSvg from "@/svgs/user";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h2>Farm Link</h2>
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
