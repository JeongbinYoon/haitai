import React from "react";
import styles from "./HTMain.module.css";

const Main_balloon = () => {
  return (
    <div className={styles.balloon} id={styles.balloon_div}>
      <img
        className={styles.balloon_img}
        id={styles.bees_div}
        src="images/main/bg-main0-5.png"
        alt="balloon"
      />
    </div>
  );
};

export default Main_balloon;
