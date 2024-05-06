import React from "react";
import MyAsideBar from "../../components/aside";
import MyFooter from "../../components/footer";
import MyHeader from "../../components/header";

const EditAnimal = () => {
  return (
    <>
      <MyHeader></MyHeader>
      <MyAsideBar></MyAsideBar>
      {/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit <%= animal.name %></title>
</head>
<body>
    <h1>Edit <%= animal.name %></h1>
    <form action="/animals/<%= animal._id %>?_method=PUT" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="<%= animal.name %>"><br>
        <label for="type">Type:</label>
        <input type="text" id="type" name="type" value="<%= animal.type %>"><br>
        <label for="diseases">Diseases:</label>
        <input type="text" id="diseases" name="diseases" value="<%= animal.diseases.join(", ") %>"><br>
        <button type="submit">Save Changes</button>
    </form>
    <a href="/animals/<%= animal._id %>">Cancel</a>
</body>
</html> */}

<MyFooter></MyFooter>

    </>
  );
};

export default EditAnimal;
