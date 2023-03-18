import React from "react";
import { Link } from "react-router-dom";
import tasksquare from "../images/tasksquare.png";
import dashboard from "../images/dashboard.png";
import profile from "../images/profile2user.png";
import clientDetails from "../images/clipboardtext.png";
function LeftSection() {
  return (
    <div id="left">
      <div>
        <button id="dashboardButton">
          <img src={dashboard} alt="" id="dashboard" />
          <Link id="dashBoardLink">Dashboard</Link>
        </button>
        <button>
          <img src={tasksquare} alt="" />
          <Link>Lead Assignment</Link>
        </button>
        <button>
          <img src={profile} alt="" />
          <Link>Employees Details</Link>
        </button>
        <button>
          <img src={clientDetails} alt="" />
          <Link>Client Details</Link>
        </button>
      </div>
    </div>
  );
}

export default LeftSection;
