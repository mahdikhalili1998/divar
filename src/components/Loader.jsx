import React from "react";
import styles from "../css/Loader.module.css";
function Loader() {
  return (
    <div className="text-center mt-2">
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loader;
