import React from "react";
import styles from "./HTMain.module.css";
import Main_background from "./Main_background";
import Main_baloon from "./Main_balloon";
import Main_bee from "./Main_bee";
import Main_text from "./Main_text";
import Main_cloud from "./Main_cloud";

const HTMain = () => {
  return (
    <div className={styles.HTMain}>
      <Main_background />
      <Main_baloon />
      <Main_bee />
      <Main_text />
      <Main_cloud />
    </div>
  );
};

export default HTMain;
