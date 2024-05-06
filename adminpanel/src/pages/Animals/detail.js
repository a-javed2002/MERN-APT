import React from "react";
import MyAsideBar from "../../components/aside";
import MyFooter from "../../components/footer";
import MyHeader from "../../components/header";

const DetailAnimal = () => {
  return (
    <>
      <MyHeader></MyHeader>
      <MyAsideBar></MyAsideBar>
   <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>&lt;%= animal.name %&gt;</title>
  <h1>&lt;%= animal.name %&gt;</h1>
  <p>Type: &lt;%= animal.type %&gt;</p>
  <p>Diseases: &lt;%= animal.diseases.join(", ") %&gt;</p>
  <a href="/animals/<%= animal._id %>/edit">Edit</a>
  <form action="/animals/<%= animal._id %>?_method=DELETE" method="POST">
    <button type="submit">Delete</button>
  </form>
  <a href="/animals">Back to All Animals</a>
</div>

<MyFooter></MyFooter>

    </>
  );
};

export default DetailAnimal;
