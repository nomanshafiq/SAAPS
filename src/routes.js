/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import DvrIcon from '@material-ui/icons/Dvr';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Login from "./Login/login";
import JobApplicants from "views/JobApplicants/JobApplicants.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/news",
    name: "News",
    rtlName: "???????? ??????????????",
    icon:  AnnouncementIcon ,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/webiners",
    name: "Webinar",
    rtlName: "?????? ???????????? ????????????????",
    icon: DesktopMacIcon,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/subscribers",
    name: "Subscriber List",
    rtlName: "?????????? ????????????",
    icon:ListAltIcon,
    component: JobApplicants,
    layout: "/admin"
  },
  {
    path: "/action_center",
    name: "Action Center",
    rtlName: "????????????",
    icon: DvrIcon,
    component: Icons,
    layout: "/admin"
  },

  {
    path: "/contact_table",
    name: "Contact List",
    rtlName: "?????????? ????????????",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },


  
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "??????????",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "??????????????",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "???????????????? ???? ???????? ???? ????",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "???????????? ????????????????????",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
