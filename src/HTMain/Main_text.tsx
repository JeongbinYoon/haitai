import React, { useEffect, useState } from "react";
import styles from "./HTMain.module.css";

const Main_text = () => {
  const [index, setIndex] = useState(0);
  const [textPosY, setTextPosY] = useState(0);

  useEffect(() => {
    const countUp = setInterval(() => {
      if (index < 29) {
        if (index !== 5) {
          setIndex(index + 1);
          setTextPosY(textPosY - 168);
        } else {
          setIndex(index + 2);
          setTextPosY(textPosY - 336);
        }
      } else {
        clearInterval(countUp);
        setIndex(0);
        setTextPosY(0);
      }
    }, 100);
    return () => clearInterval(countUp);
  }, [index, textPosY]);

  return (
    <div className={styles.text}>
      <img
        style={{ top: textPosY }}
        src="images/main/bg-txt.png"
        alt="balloon"
      />
    </div>
  );
};

export default Main_text;
