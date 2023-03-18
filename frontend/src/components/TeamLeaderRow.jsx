import React from "react";
import h2 from "../images/h2.jfif";
import h3 from "../images/h3.jfif";
import h4 from "../images/h4.jfif";
import h5 from "../images/h5.jfif";
import h6 from "../images/h5.jfif";
import h7 from "../images/h5.jfif";
import h8 from "../images/h8.jfif";
import h9 from "../images/h9.jfif";
import h10 from "../images/h10.jfif";

import human from "../images/human.jfif";
function Leader({ color, imgUrl,name,employeeId,contact,member}) {
  return (
    <div id="leader">
      <img src={imgUrl} alt="" style={{ border: `5px solid ${color}` }} />
      <h3>{name}</h3>
      <h4>{employeeId}</h4>
      <h4>{contact}</h4>
      <h4>{member}</h4>
    </div>
  );
}
function TeamLeaderRow() {
  return (
    <>
      <div className="teamLeaders">
        <Leader color={"red"} imgUrl={h2} name={"Naman"} member={"12"} employeeId={"TM3004"} contact={4567891234}/>
        <Leader color={"orange"} imgUrl={human} name={"Harshit"} member={"14"} employeeId={"TP3006"} contact={757891234}/>
        <Leader color={"green"} imgUrl={h3} name={"Ayush"} member={"18"} employeeId={"TK30075"} contact={9997891234}/>
        <Leader color={"green"} imgUrl={h4} name={"Preti"} member={"10"} employeeId={"S30065"} contact={7897891234}/>
        <Leader color={"orange"} imgUrl={h5} name={"Divyansh"} member={"11"} employeeId={"TK30065"} contact={6547891234}/>
      </div>
      <br />
      <div className="teamLeaders">
        <Leader color={"orange"} imgUrl={h6} name={"Kartik"} member={"14"} employeeId={"TO3004"} contact={12347891234}/>
        <Leader color={"green"} imgUrl={h7} name={"Kamal"} member={"17"} employeeId={"M3004"} contact={4577891234}/>
        <Leader color={"red"} imgUrl={h8} name={"Karan"} member={"11"} employeeId={"TM30"} contact={78967891234}/>
        <Leader color={"orange"} imgUrl={h9} name={"Deep"} member={"14"} employeeId={"T3004"} contact={9897891234}/>
        <Leader color={"green"} imgUrl={h10} name={"Naina"} member={"17"} employeeId={"T3004"}contact={9787891234}/>
      </div>
    </>
  );
}

export default TeamLeaderRow;
