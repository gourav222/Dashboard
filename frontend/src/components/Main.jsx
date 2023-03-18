import React from "react";
import piechart from "../images/pieChart.png";
import vector from "../images/Vector.png";
import documenttext from "../images/documenttext1.png";
import menuboard from "../images/menuboard.png";
import location from "../images/location.png";
import LeftSection from "./LeftSection";
import performance from "../images/performance.png";
import TeamLeaderRow from "./TeamLeaderRow";
function Main() {
  return (
    <div id="main">
      <LeftSection />

      <div id="right">
        <div>
          <div id="totalClients">
            <img src={piechart} alt="" id="pie-chart" />
          </div>

          <div id="notifications">
            <h3>Notifications:</h3>
            <div id="notification-box">
              <p>
                <img src={vector} alt="" />
                Today's follow up alerts: You've 398 clients int the follow up
                list.
              </p>
              <p>
                <img src={documenttext} alt="" />
                Your received a file from the Mamata Shinde.
              </p>
              <p>
                <img src={menuboard} alt="" />
                Congratulations! You complete your target yesterday.
              </p>
              <p>
                <img src={location} alt="" />
                Ravi Kulkarn on his to collect to collect documents from the
                client.
              </p>
            </div>
          </div>
        </div>

        <div id="right-mid">
          <h3>Team Leaders:</h3>
          <div>
            <h4>Team Performance:</h4>
            <img src={performance} alt="" />
          </div>
        </div>
        <TeamLeaderRow/>
      </div>
    </div>
  );
}

export default Main;
