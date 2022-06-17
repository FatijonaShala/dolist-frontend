import React from "react";
import style from "./home.module.scss";
import LayoutWrapper from "../../hoc/Layout";
import Header from "../../Components/Header/Header";

function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default LayoutWrapper(Home);
