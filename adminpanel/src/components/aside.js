import React from "react";
import { NavLink } from "react-router-dom";

const MyAsideBar = () => {
  return (
    <>
     {/*sidebar start*/}
<aside>
  <div id="sidebar" className="nav-collapse ">
    {/* sidebar menu start*/}
    <ul className="sidebar-menu" id="nav-accordion">
      <p className="centered"><a href="profile.html"><img src="img/ui-sam.jpg" className="img-circle" width={80} /></a></p>
      <h5 className="centered">Sam Soffes</h5>
      <li className="mt">
        <a className="active" href="index.html">
          <i className="fa fa-dashboard" />
          <span>Dashboard</span>
        </a>
      </li>
      <li className="mt">
        <NavLink to="/animal/create">
          <i className="fa fa-dashboard" />
          <span>Animal Create</span>
        </NavLink>
      </li>
      <li className="mt">
        <NavLink to="/animal/show">
          <i className="fa fa-dashboard" />
          <span>Animal Show</span>
        </NavLink>
      </li>
      <li className="sub-menu">
        <a href="javascript:;">
          <i className="fa fa-desktop" />
          <span>UI Elements</span>
        </a>
        <ul className="sub">
          <li><a href="general.html">General</a></li>
          <li><a href="buttons.html">Buttons</a></li>
          <li><a href="panels.html">Panels</a></li>
          <li><a href="font_awesome.html">Font Awesome</a></li>
        </ul>
      </li>
      <li className="sub-menu">
        <a href="javascript:;">
          <i className="fa fa-cogs" />
          <span>Components</span>
        </a>
        <ul className="sub">
          <li><a href="grids.html">Grids</a></li>
          <li><a href="calendar.html">Calendar</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="todo_list.html">Todo List</a></li>
          <li><a href="dropzone.html">Dropzone File Upload</a></li>
          <li><a href="inline_editor.html">Inline Editor</a></li>
          <li><a href="file_upload.html">Multiple File Upload</a></li>
        </ul>
      </li>
      <li className="sub-menu">
        <a href="javascript:;">
          <i className="fa fa-book" />
          <span>Extra Pages</span>
        </a>
        <ul className="sub">
          <li><a href="blank.html">Blank Page</a></li>
          <li><a href="login.html">Login</a></li>
          <li><a href="lock_screen.html">Lock Screen</a></li>
          <li><a href="profile.html">Profile</a></li>
          <li><a href="invoice.html">Invoice</a></li>
          <li><a href="pricing_table.html">Pricing Table</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="404.html">404 Error</a></li>
          <li><a href="500.html">500 Error</a></li>
        </ul>
      </li>
      <li className="sub-menu">
        <a href="javascript:;">
          <i className="fa fa-tasks" />
          <span>Forms</span>
        </a>
        <ul className="sub">
          <li><a href="form_component.html">Form Components</a></li>
          <li><a href="advanced_form_components.html">Advanced Components</a></li>
          <li><a href="form_validation.html">Form Validation</a></li>
          <li><a href="contactform.html">Contact Form</a></li>
        </ul>
      </li>
      <li className="sub-menu">
        <a href="javascript:;">
          <i className="fa fa-th" />
          <span>Data Tables</span>
        </a>
        <ul className="sub">
          <li><a href="basic_table.html">Basic Table</a></li>
          <li><a href="responsive_table.html">Responsive Table</a></li>
          <li><a href="advanced_table.html">Advanced Table</a></li>
        </ul>
      </li>
      <li>
        <a href="inbox.html">
          <i className="fa fa-envelope" />
          <span>Mail </span>
          <span className="label label-theme pull-right mail-info">2</span>
        </a>
      </li>
      <li className="sub-menu">
        <a href="javascript:;">
          <i className=" fa fa-bar-chart-o" />
          <span>Charts</span>
        </a>
        <ul className="sub">
          <li><a href="morris.html">Morris</a></li>
          <li><a href="chartjs.html">Chartjs</a></li>
          <li><a href="flot_chart.html">Flot Charts</a></li>
          <li><a href="xchart.html">xChart</a></li>
        </ul>
      </li>
      <li className="sub-menu">
        <a href="javascript:;">
          <i className="fa fa-comments-o" />
          <span>Chat Room</span>
        </a>
        <ul className="sub">
          <li><a href="lobby.html">Lobby</a></li>
          <li><a href="chat_room.html"> Chat Room</a></li>
        </ul>
      </li>
      <li>
        <a href="google_maps.html">
          <i className="fa fa-map-marker" />
          <span>Google Maps </span>
        </a>
      </li>
    </ul>
    {/* sidebar menu end*/}
  </div>
</aside>
{/*sidebar end*/}

    </>
  );
};
export default MyAsideBar;
