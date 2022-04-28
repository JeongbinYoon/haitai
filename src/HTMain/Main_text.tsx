import React, { useEffect, useState } from "react";
import styles from "./HTMain.module.css";

const Main_text = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const countUp = setInterval(() => {
      if (index < 33) {
        setIndex(index + 1);
      } else {
        clearInterval(countUp);
        setIndex(0);
      }
    }, 100);
    return () => clearInterval(countUp);
  }, [index]);

  return (
    <div className={styles.txt}>
      <img
        className={`textImg-${index}`}
        src="images/main/bg-txt.png"
        alt="balloon"
      />
    </div>
  );
};

export default Main_text;
