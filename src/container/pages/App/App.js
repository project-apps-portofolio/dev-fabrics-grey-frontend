// import './App.css';
import { Link, Route, Switch, Router } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../App/App.css';

import IndexList from '../Fabric/indexList';
import Index from '../Fabric/index';
import CreateIndex from '../Fabric/createIndex';
import Home from '../Home/Home';
import Login from '../Auth/Login';
import DownloadXls from '../Csv/downloadXls';
import IndexMachine from '../Machine/Index';
import CreateMachine from '../Machine/Create';
import ExampleComponent from '../Schedules/Schedules';
import ScheduleIndex from '../Schedules/ScheduleIndex';
import ScheduleShow from '../Schedules/Show';
import history from '../../../services/history'
import ScheduleCreate from '../Schedules/Create';
import JobIndex from '../Job/Index';
import JobCreate from '../Job/Create';
import CustomerCreate from '../Customer/Create';
import CustomerIndex from '../Customer/Index';
import LearningIndex from '../Learning/learning';
import PropsIndex from '../Learning/ComponentProps/page1';
import PropsTwoIndex from '../Learning/ComponentProps/page2';

function App() {
  return (
    <div>
        <div id="navbar" className="navbar navbar-default navbar-collapse h-navbar ace-save-state">
          <div className="navbar-container ace-save-state" id="navbar-container">
            <div className="navbar-header pull-left">
              <a href="index.html" className="navbar-brand">
                <small>
                  <i className="fa fa-leaf" />
                  Ace Admin
                </small>
              </a>
            </div>
          </div>
        </div>
        
        {/* Menu */}
        <div className="main-container ace-save-state" id="main-container">
          <div id="sidebar" className="sidebar      h-sidebar                navbar-collapse collapse          ace-save-state">
            <div className="sidebar-shortcuts" id="sidebar-shortcuts">
            </div>{/* /.sidebar-shortcuts */}
            <ul className="nav nav-list">
              <li className="hover">
                {/* <a href="/">
                  <i className="menu-icon fa fa-tachometer" />
                  <span className="menu-text"> Dashboard </span>
                </a> */}
                 <Link to="/">
                      <i className="menu-icon fa fa-tachometer" />
                      <span className="menu-text"> Dashboard </span>
                    </Link>
                <b className="arrow" />
              </li>

              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-users" />
                  <span className="menu-text">Customers</span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    <Link to="/customers">
                      <i className="menu-icon fa fa-caret-right" />
                      Pelanggan Fabric Grey
                  </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className="hover">
                <a href="#tidakada" className="dropdown-toggle">
                  <i className="menu-icon fa fa-list" />
                  <span className="menu-text"> Fabric </span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    <Link to="/fabric/create">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric
                    </Link>
                    {/* <a href="/fabric/create">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric
                    </a> */}
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                  <Link to="/fabric/list">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric List
                  </Link>
                    {/* <a href="/fabric/list">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric List
                    </a> */}
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-calendar" />
                  <span className="menu-text">Schedules</span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    <Link to="/schedules/timeline">
                      <i className="menu-icon fa fa-caret-right" />
                      Schdules Timeline
                  </Link>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <Link to="/schedules">
                      <i className="menu-icon fa fa-caret-right" />
                      Jadwal Grey
                  </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-industry" />
                  <span className="menu-text">
                   Machine
                  </span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                   <Link to="/machine/index">
                   <i className="menu-icon fa fa-caret-right" />
                      Management
                   </Link>
                   </li>
                </ul>
              </li>
              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-tasks" />
                  <span className="menu-text">Jobs</span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    <Link to="/jobs">
                      <i className="menu-icon fa fa-caret-right" />
                      Kartu Kain Grey
                  </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>

              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-bar-chart" />
                  <span className="menu-text"> Report </span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    {/* <a href="tables.html">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric Report
                    </a> */}
                    <Link to="/fabric/list">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric List
                  </Link>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    {/* <a href="/">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric Report
                    </a> */}
                                      <Link to="/fabric/list">
                      <i className="menu-icon fa fa-caret-right" />
                      Fabric List
                  </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-cog" />
                  <span className="menu-text">Setting</span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    <Link to="/fabric/list">
                      <i className="menu-icon fa fa-caret-right" />
                     Profile
                  </Link>
                    <b className="arrow" />
                  </li>
                  <li className="hover">
                    <Link to="/fabric/list">
                      <i className="menu-icon fa fa-caret-right" />
                      Logout
                  </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
              <li className="hover">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-cog" />
                  <span className="menu-text">Learning</span>
                  <b className="arrow fa fa-angle-down" />
                </a>
                <b className="arrow" />
                <ul className="submenu">
                  <li className="hover">
                    <Link to="/learning">
                      <i className="menu-icon fa fa-caret-right" />
                     Learning
                  </Link>
                    <b className="arrow" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="main-content">
            <div className="main-content-inner">
              <Switch>
                {/* Login */}
                <Route exact path={["/", "/login"]} component={Login} />
                {/* Dashboard */}
                <Route exact path={"/home"} component={Home} />
                {/* Fabric */}
                <Route exact path={"/fabric/create"} component={CreateIndex} />
                  <Route path={"/fabric/list"} component={IndexList} />
                  <Route path={"/fabric/index/"} component={Index} />
                  <Route path={"/xsl"} component={DownloadXls} />
                {/* Machine */}
                <Route exact path={"/machine/index"} component={IndexMachine} />
                  <Route path={"/machine/create"} component={CreateMachine} />
                {/* Schdules */}
                <Route exact path={"/schedules"} component={ScheduleIndex} />
                <Route path={"/schedules/timeline"} component={ExampleComponent} />
                <Route path={"/schedules/create"} component={ScheduleCreate} />
                <Route exact path={"/schedules/show/:id"} component={ScheduleShow} />
                {/* <Route exact path={"/calender"} component={Calender} /> */}
                {/* Jobs */}

                <Route exact path={"/jobs"} component={JobIndex} />
                <Route path={"/jobs/create"} component={JobCreate} />

                {/* Customer */}

                <Route exact path={"/customers"} component={CustomerIndex} />
                <Route path={"/customers/create"} component={CustomerCreate} />

                {/* Learning */}

                <Route exact path={"/learning"} component={LearningIndex} />
                <Route path={"/learning/props"} component={PropsIndex} />
                <Route path={"/learning/test"} component={PropsTwoIndex} />
              </Switch>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
