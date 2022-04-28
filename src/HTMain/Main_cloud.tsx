import React from "react";
import styles from "./HTMain.module.css";

const Main_cloud = () => {
  return (
    <>
      <div className={styles.cloud1}>
        <img
          className={styles.cloud1_img}
          src="images/main/bg-main0-0.png"
          alt="main background"
        />
      </div>

      <div className={styles.cloud2}>
        <img
          className={styles.cloud2_img}
          src="images/main/bg-main0-1.png"
          alt="main background"
        />
      </div>

      <div className={styles.cloud3}>
        <img
          className={styles.cloud3_img}
          src="images/main/bg-main0-2.png"
          alt="main background"
        />
      </div>
    </>
  );
};
export default Main_cloud;
