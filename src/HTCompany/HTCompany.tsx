import React from "react";
import styles from "./HTCompany.module.css";

function HTCompany() {
  return (
    <div className={styles.company}>
      <div className={styles.caption}>
        <h2>달콤한 세상으로의 초대</h2>
        <p>해태제과는 늘 새롭고 달콤한 세상을 꿈꿉니다.</p>
      </div>
      <div className={styles.imgs}>
        <img
          className={styles.img01}
          src="images/company/img-main0-0.png"
          alt="company"
        />
        <img
          className={styles.img02}
          src="images/company/img-main0-1.png"
          alt="company"
        />
        <img
          className={styles.img03}
          src="images/company/img-main0-2.png"
          alt="company"
        />
      </div>
    </div>
  );
}

export default HTCompany;
