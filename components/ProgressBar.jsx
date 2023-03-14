import React, { useRef, useEffect } from "react";

import styles from "../styles/ProgressBar.module.scss";

export const ProgressBar = ({ value, className }) => {
  const fillRef = useRef(null);

  useEffect(() => {
    if (fillRef.current) {
      fillRef.current.style.width = `${value}%`;
    }
  }, [value]);

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "20px",
        backgroundColor: "#e0e0de",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        ref={fillRef}
        style={{
          height: "100%",
          textAlign: "center",
          backgroundColor: "#4caf50",
          transition: "width 0.3s ease-in-out",
        }}
      >
        {value}%
      </div>
    </div>
  );
};

export const ProgressBar2 = ({ value, max }) => {
  const styleValue =
    value >= max
      ? styles.end
      : value === max - max + 1
      ? styles.start
      : styles.middle;

  return (
    <div className={styles.progress2}>
      <progress value={value} max={max} className={styleValue} />
    </div>
  );
};

export const ProgressBar3 = ({ value, max }) => {
  return (
    <div className={styles["progress-container"]}>
      <div className={styles["progress-bar"]}>
        <span className={styles["step-arrow"]}></span>
        <span className={styles["step-arrow"]}></span>
        <span className={styles["step-arrow"]}></span>
        <progress value={value} max={max}></progress>
      </div>
    </div>
  );
};
