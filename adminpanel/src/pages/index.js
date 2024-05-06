import React from "react";
import MyAsideBar from "../components/aside";
import MyFooter from "../components/footer";
import MyHeader from "../components/header";
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [animalCount, setAnimalCount] = useState(null);
  const [orderCount, setOrderCount] = useState(null);
  const [userCount, setUserCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/dashboard/counts');
        const data = await response.json();
        setAnimalCount(data.animalCount);
        setOrderCount(data.orderCount);
        setUserCount(data.userCount);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <MyHeader></MyHeader>
      <MyAsideBar></MyAsideBar>
      <section id="main-content">
  <section className="wrapper">
    <div className="row">
      <div className="col-lg-9 main-chart">
        {/*CUSTOM CHART START */}
        <div className="border-head">
          <h3>USER VISITS</h3>
        </div>
        <div className="custom-bar-chart">
          <ul className="y-axis">
            <li><span>10.000</span></li>
            <li><span>8.000</span></li>
            <li><span>6.000</span></li>
            <li><span>4.000</span></li>
            <li><span>2.000</span></li>
            <li><span>0</span></li>
          </ul>
          <div className="bar">
            <div className="title">JAN</div>
            <div className="value tooltips" data-original-title="8.500" data-toggle="tooltip" data-placement="top">85%</div>
          </div>
          <div className="bar ">
            <div className="title">FEB</div>
            <div className="value tooltips" data-original-title={5.000} data-toggle="tooltip" data-placement="top">50%</div>
          </div>
          <div className="bar ">
            <div className="title">MAR</div>
            <div className="value tooltips" data-original-title={6.000} data-toggle="tooltip" data-placement="top">60%</div>
          </div>
          <div className="bar ">
            <div className="title">APR</div>
            <div className="value tooltips" data-original-title="4.500" data-toggle="tooltip" data-placement="top">45%</div>
          </div>
          <div className="bar">
            <div className="title">MAY</div>
            <div className="value tooltips" data-original-title="3.200" data-toggle="tooltip" data-placement="top">32%</div>
          </div>
          <div className="bar ">
            <div className="title">JUN</div>
            <div className="value tooltips" data-original-title="6.200" data-toggle="tooltip" data-placement="top">62%</div>
          </div>
          <div className="bar">
            <div className="title">JUL</div>
            <div className="value tooltips" data-original-title="7.500" data-toggle="tooltip" data-placement="top">75%</div>
          </div>
        </div>
        {/*custom chart end*/}
        <div className="row mt">
          {/* /col-md-4 */}
          <div className="col-md-4 col-sm-4 mb">
            {/* REVENUE PANEL */}
            <div className="green-panel pn">
              <div className="green-header">
                <h5>Users</h5>
              </div>
              <div className="chart mt">
                <div className="sparkline" data-type="line" data-resize="true" data-height={75} data-width="90%" data-line-width={1} data-line-color="#fff" data-spot-color="#fff" data-fill-color data-highlight-line-color="#fff" data-spot-radius={4} data-data="[200,135,667,333,526,996,564,123,890,464,655]" />
              </div>
              <p className="mt"><b>{userCount !== null ? userCount : 'Loading...'}</b></p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 mb">
            {/* REVENUE PANEL */}
            <div className="green-panel pn">
              <div className="green-header">
                <h5>Animals</h5>
              </div>
              <div className="chart mt">
                <div className="sparkline" data-type="line" data-resize="true" data-height={75} data-width="90%" data-line-width={1} data-line-color="#fff" data-spot-color="#fff" data-fill-color data-highlight-line-color="#fff" data-spot-radius={4} data-data="[200,135,667,333,526,996,564,123,890,464,655]" />
              </div>
              <p className="mt"><b>{animalCount !== null ? animalCount : 'Loading...'}</b></p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 mb">
            {/* REVENUE PANEL */}
            <div className="green-panel pn">
              <div className="green-header">
                <h5>Orders</h5>
              </div>
              <div className="chart mt">
                <div className="sparkline" data-type="line" data-resize="true" data-height={75} data-width="90%" data-line-width={1} data-line-color="#fff" data-spot-color="#fff" data-fill-color data-highlight-line-color="#fff" data-spot-radius={4} data-data="[200,135,667,333,526,996,564,123,890,464,655]" />
              </div>
              <p className="mt"><b>{orderCount !== null ? orderCount : 'Loading...'}</b></p>
            </div>
          </div>
          {/* /col-md-4 */}
        </div>
        <div className="row mt">
          {/* SERVER STATUS PANELS */}
          <div className="col-md-4 col-sm-4 mb">
            <div className="grey-panel pn donut-chart">
              <div className="grey-header">
                <h5>SERVER LOAD</h5>
              </div>
              <canvas id="serverstatus01" height={120} width={120} />
              <div className="row">
                <div className="col-sm-6 col-xs-6 goleft">
                  <p>Usage<br />Increase:</p>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <h2>21%</h2>
                </div>
              </div>
            </div>
            {/* /grey-panel */}
          </div>
          {/* /col-md-4*/}
          <div className="col-md-4 col-sm-4 mb">
            <div className="darkblue-panel pn">
              <div className="darkblue-header">
                <h5>DROPBOX STATICS</h5>
              </div>
              <canvas id="serverstatus02" height={120} width={120} />
              <p>April 17, 2014</p>
              <footer>
                <div className="pull-left">
                  <h5><i className="fa fa-hdd-o" /> 17 GB</h5>
                </div>
                <div className="pull-right">
                  <h5>60% Used</h5>
                </div>
              </footer>
            </div>
            {/*  /darkblue panel */}
          </div>
          {/* /col-md-4 */}
          <div className="col-md-4 col-sm-4 mb">
            {/* REVENUE PANEL */}
            <div className="green-panel pn">
              <div className="green-header">
                <h5>REVENUE</h5>
              </div>
              <div className="chart mt">
                <div className="sparkline" data-type="line" data-resize="true" data-height={75} data-width="90%" data-line-width={1} data-line-color="#fff" data-spot-color="#fff" data-fill-color data-highlight-line-color="#fff" data-spot-radius={4} data-data="[200,135,667,333,526,996,564,123,890,464,655]" />
              </div>
              <p className="mt"><b>$ 17,980</b><br />Month Income</p>
            </div>
          </div>
          {/* /col-md-4 */}
        </div>
        {/* /row */}
        <div className="row">
          {/* WEATHER PANEL */}
          <div className="col-md-4 mb">
            <div className="weather pn">
              <i className="fa fa-cloud fa-4x" />
              <h2>11º C</h2>
              <h4>BUDAPEST</h4>
            </div>
          </div>
          {/* /col-md-4*/}
          {/* DIRECT MESSAGE PANEL */}
          <div className="col-md-8 mb">
            <div className="message-p pn">
              <div className="message-header">
                <h5>DIRECT MESSAGE</h5>
              </div>
              <div className="row">
                <div className="col-md-3 centered hidden-sm hidden-xs">
                  <img src="img/ui-danro.jpg" className="img-circle" width={65} />
                </div>
                <div className="col-md-9">
                  <p>
                    <name>Dan Rogers</name>
                    sent you a message.
                  </p>
                  <p className="small">3 hours ago</p>
                  <p className="message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <form className="form-inline" role="form">
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputText" placeholder="Reply Dan" />
                    </div>
                    <button type="submit" className="btn btn-default">Send</button>
                  </form>
                </div>
              </div>
            </div>
            {/* /Message Panel*/}
          </div>
          {/* /col-md-8  */}
        </div>
        <div className="row">
          {/* TWITTER PANEL */}
          <div className="col-md-4 mb">
            <div className="twitter-panel pn">
              <i className="fa fa-twitter fa-4x" />
              <p>Dashio is here! Take a look and enjoy this new Bootstrap Dashboard theme.</p>
              <p className="user">@Alvrz_is</p>
            </div>
          </div>
          {/* /col-md-4 */}
          <div className="col-md-4 mb">
            {/* WHITE PANEL - TOP USER */}
            <div className="white-panel pn">
              <div className="white-header">
                <h5>TOP USER</h5>
              </div>
              <p><img src="img/ui-zac.jpg" className="img-circle" width={50} /></p>
              <p><b>Zac Snider</b></p>
              <div className="row">
                <div className="col-md-6">
                  <p className="small mt">MEMBER SINCE</p>
                  <p>2012</p>
                </div>
                <div className="col-md-6">
                  <p className="small mt">TOTAL SPEND</p>
                  <p>$ 47,60</p>
                </div>
              </div>
            </div>
          </div>
          {/* /col-md-4 */}
          <div className="col-md-4 mb">
            {/* INSTAGRAM PANEL */}
            <div className="instagram-panel pn">
              <i className="fa fa-instagram fa-4x" />
              <p>@THISISYOU<br /> 5 min. ago
              </p>
              <p><i className="fa fa-comment" /> 18 | <i className="fa fa-heart" /> 49</p>
            </div>
          </div>
          {/* /col-md-4 */}
        </div>
        {/* /row */}
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 mb">
            <div className="product-panel-2 pn">
              <div className="badge badge-hot">HOT</div>
              <img src="img/product.jpg" width={200} alt />
              <h5 className="mt">Flat Pack Heritage</h5>
              <h6>TOTAL SALES: 1388</h6>
              <button className="btn btn-small btn-theme04">FULL REPORT</button>
            </div>
          </div>
          {/* /col-md-4 */}
          {/*  PROFILE 02 PANEL */}
          <div className="col-lg-4 col-md-4 col-sm-4 mb">
            <div className="content-panel pn">
              <div id="profile-02">
                <div className="user">
                  <img src="img/friends/fr-06.jpg" className="img-circle" width={80} />
                  <h4>DJ SHERMAN</h4>
                </div>
              </div>
              <div className="pr2-social centered">
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-dribbble" /></a>
              </div>
            </div>
            {/* /panel */}
          </div>
          {/*/ col-md-4 */}
          <div className="col-md-4 col-sm-4 mb">
            <div className="green-panel pn">
              <div className="green-header">
                <h5>DISK SPACE</h5>
              </div>
              <canvas id="serverstatus03" height={120} width={120} />
              <h3>60% USED</h3>
            </div>
          </div>
          {/* /col-md-4 */}
        </div>
        {/* /row */}
      </div>
      {/* /col-lg-9 END SECTION MIDDLE */}
      {/* **********************************************************************************************************************************************************
          RIGHT SIDEBAR CONTENT
          *********************************************************************************************************************************************************** */}
      <div className="col-lg-3 ds">
        {/*COMPLETED ACTIONS DONUTS CHART*/}
        <div className="donut-main">
          <h4>COMPLETED ACTIONS &amp; PROGRESS</h4>
          <canvas id="newchart" height={130} width={130} />
        </div>
        {/*NEW EARNING STATS */}
        <div className="panel terques-chart">
          <div className="panel-body">
            <div className="chart">
              <div className="centered">
                <span>TODAY EARNINGS</span>
                <strong>$ 890,00 | 15%</strong>
              </div>
              <br />
              <div className="sparkline" data-type="line" data-resize="true" data-height={75} data-width="90%" data-line-width={1} data-line-color="#fff" data-spot-color="#fff" data-fill-color data-highlight-line-color="#fff" data-spot-radius={4} data-data="[200,135,667,333,526,996,564,123,890,564,455]" />
            </div>
          </div>
        </div>
        {/*new earning end*/}
        {/* RECENT ACTIVITIES SECTION */}
        <h4 className="centered mt">RECENT ACTIVITY</h4>
        {/* First Activity */}
        <div className="desc">
          <div className="thumb">
            <span className="badge bg-theme"><i className="fa fa-clock-o" /></span>
          </div>
          <div className="details">
            <p>
              <muted>Just Now</muted>
              <br />
              <a href="#">Paul Rudd</a> purchased an item.<br />
            </p>
          </div>
        </div>
        {/* Second Activity */}
        <div className="desc">
          <div className="thumb">
            <span className="badge bg-theme"><i className="fa fa-clock-o" /></span>
          </div>
          <div className="details">
            <p>
              <muted>2 Minutes Ago</muted>
              <br />
              <a href="#">James Brown</a> subscribed to your newsletter.<br />
            </p>
          </div>
        </div>
        {/* Third Activity */}
        <div className="desc">
          <div className="thumb">
            <span className="badge bg-theme"><i className="fa fa-clock-o" /></span>
          </div>
          <div className="details">
            <p>
              <muted>3 Hours Ago</muted>
              <br />
              <a href="#">Diana Kennedy</a> purchased a year subscription.<br />
            </p>
          </div>
        </div>
        {/* Fourth Activity */}
        <div className="desc">
          <div className="thumb">
            <span className="badge bg-theme"><i className="fa fa-clock-o" /></span>
          </div>
          <div className="details">
            <p>
              <muted>7 Hours Ago</muted>
              <br />
              <a href="#">Brando Page</a> purchased a year subscription.<br />
            </p>
          </div>
        </div>
        {/* USERS ONLINE SECTION */}
        <h4 className="centered mt">TEAM MEMBERS ONLINE</h4>
        {/* First Member */}
        <div className="desc">
          <div className="thumb">
            <img className="img-circle" src="img/ui-divya.jpg" width="35px" height="35px" align />
          </div>
          <div className="details">
            <p>
              <a href="#">DIVYA MANIAN</a><br />
              <muted>Available</muted>
            </p>
          </div>
        </div>
        {/* Second Member */}
        <div className="desc">
          <div className="thumb">
            <img className="img-circle" src="img/ui-sherman.jpg" width="35px" height="35px" align />
          </div>
          <div className="details">
            <p>
              <a href="#">DJ SHERMAN</a><br />
              <muted>I am Busy</muted>
            </p>
          </div>
        </div>
        {/* Third Member */}
        <div className="desc">
          <div className="thumb">
            <img className="img-circle" src="img/ui-danro.jpg" width="35px" height="35px" align />
          </div>
          <div className="details">
            <p>
              <a href="#">DAN ROGERS</a><br />
              <muted>Available</muted>
            </p>
          </div>
        </div>
        {/* Fourth Member */}
        <div className="desc">
          <div className="thumb">
            <img className="img-circle" src="img/ui-zac.jpg" width="35px" height="35px" align />
          </div>
          <div className="details">
            <p>
              <a href="#">Zac Sniders</a><br />
              <muted>Available</muted>
            </p>
          </div>
        </div>
        {/* CALENDAR*/}
        <div id="calendar" className="mb">
          <div className="panel green-panel no-margin">
            <div className="panel-body">
              <div id="date-popover" className="popover top" style={{cursor: 'pointer', disadding: 'block', marginLeft: '33%', marginTop: '-50px', width: 175}}>
                <div className="arrow" />
                <h3 className="popover-title" style={{disadding: 'none'}} />
                <div id="date-popover-content" className="popover-content" />
              </div>
              <div id="my-calendar" />
            </div>
          </div>
        </div>
        {/* / calendar */}
      </div>
      {/* /col-lg-3 */}
    </div>
    {/* /row */}
  </section>
</section>
<MyFooter></MyFooter>

    </>
  );
};

export default HomePage;
