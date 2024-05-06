import React from "react";
import MyAsideBar from "../components/aside";
import MyFooter from "../components/footer";
import MyHeader from "../components/header";

const BlankPage = () => {
  return (
    <>
      <MyHeader></MyHeader>
      <MyAsideBar></MyAsideBar>
      
      <MyFooter></MyFooter>
    </>
  );
};

export default BlankPage;
