import React from "react";
import styles from "./HTMain.module.css";

const Main_background = () => {
  return (
    <div className={styles.bg}>
      <img
        className={styles.bg_img}
        src="images/main/bg-main.jpg"
        alt="main background"
      />
    </div>
  );
};

export default Main_background;
