import React from "react";
import Hearder from "./Hearder";
import Footer from "./Footer";

function layout({ children }) {
  return (
    <>
      <Hearder />
      {children}
      <Footer />
    </>
  );
}

export default layout;
