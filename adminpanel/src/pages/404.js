import React from "react";
import MyAsideBar from "../components/aside";
import MyFooter from "../components/footer";
import MyHeader from "../components/header";

const NotFoundPage = () => {
  return (
    <>
      <div className="container">
  <div className="row">
    <div className="col-lg-6 col-lg-offset-3 p404 centered">
      <img src="img/404.png" alt />
      <h1>DON'T PANIC!!</h1>
      <h3>The page you are looking for doesn't exist.</h3>
      <br />
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <input type="text" className="form-control" id="form1Name" name="form1Name" />
          <button className="btn btn-theme mt">Search</button>
        </div>
      </div>
      <h5 className="mt">Hey, maybe you will be interested in these pages:</h5>
      <p><a href="index.html">Index</a> | <a href="#">Sitemap</a> | <a href="contact.html"> Contact</a></p>
    </div>
  </div>
</div>
{/* js placed at the end of the document so the pages load faster 

<script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
*/}

    </>
  );
};

export default NotFoundPage;
