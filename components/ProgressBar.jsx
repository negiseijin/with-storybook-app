import React, { useRef, useEffect } from "react";

const ProgressBar = ({ value, className }) => {
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

export default ProgressBar;
