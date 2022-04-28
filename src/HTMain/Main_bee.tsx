import React, { useEffect, useState } from "react";
import styles from "./HTMain.module.css";

const Main_bee = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const countUp = setInterval(() => {
      if (index < 29) {
        setIndex(index + 1);
      } else {
        clearInterval(countUp);
        setIndex(0);
      }
    }, 100);
    return () => clearInterval(countUp);
  }, [index]);

  return (
    <div className={styles.bee}>
      <img
        className={`beeImg-${index}`}
        src="images/main/bg-main0-3-0.png"
        alt="bee"
      />
    </div>
  );
};

export default Main_bee;
