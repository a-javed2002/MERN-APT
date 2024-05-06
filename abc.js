import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Show() {
  const url = "https://65c9bbb93b05d29307deded0.mockapi.io/Students";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };


  const del = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Data deleted successfully");
        return fetchInfo();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        alert("Error deleting user. Please try again.");
      });
  };


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <h1>Fetching Data From Api</h1>
      <Link to={`/insert`}>Insert A new Student</Link>
      <table className="table">
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {data.map((dataObj, index) => (
            <tr key={index}>
              <td>{dataObj.id}</td>
              <td>{dataObj.username}</td>
              <td>{dataObj.email}</td>
              <td>
                <img src={dataObj.avatar} alt="Avatar" height={100} />
              </td>
              <td>  <Link to={`/detail/${dataObj.id}`}>View</Link></td>
               <td> <Link to={`/edit/${dataObj.id}`}> Edit</Link></td>
              <td> <button onClick={() => del(dataObj.id)}> Delete  </button></td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Show;
