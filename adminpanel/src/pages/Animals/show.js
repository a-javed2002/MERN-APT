import React from "react";
import MyAsideBar from "../../components/aside";
import MyFooter from "../../components/footer";
import MyHeader from "../../components/header";

const ShowAnimal = () => {
  return (
    <>
      <MyHeader></MyHeader>
      <MyAsideBar></MyAsideBar>
      <section id="main-content">
  <section className="wrapper">
    <div className="row">
  <h1>All Animals</h1>
  <ul>
    &lt;% animals.forEach(animal =&gt; {'{'} %&gt;
    <li><a href="/animals/<%= animal._id %>">&lt;%= animal.name %&gt;</a></li>
    &lt;% {'}'}); %&gt;
  </ul>
  <a href="/animals/new">Add New Animal</a>
</div>
</section>
</section>

<MyFooter></MyFooter>

    </>
  );
};

export default ShowAnimal;
