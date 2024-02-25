import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../common/Navbar"

function FinishScreen(): JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();

    // Parse query parameters
    const queryParams = new URLSearchParams(location.search);
    const duration = Number(queryParams.get('dur'));
    const courseName = queryParams.get('course');

    let minutes =0;
    let time ="";
    let seconds =0;

    // duration is time in seconds, convert it to mins and seconds
    if (duration != null) {
      minutes = Math.floor(duration / 60);
      seconds = duration % 60;
      if (minutes > 0){
        time = minutes + "m " + seconds + "s"
      } else {
        time = seconds + "s"

      }
    }

    // Now you can use duration and courseName in your component
    return (
      <div>
        <Navbar />
        <div className="flex flex-col justify-center items-center m-8 p-8 gap-4 text-2xl">
            <h1 className="font-bold">You rock! </h1>
            <h1>You finished course: "{courseName}" in just : <span className="font-3xl text-emerald-500 font-extrabold">{time}</span> </h1>
        </div>
        <button onClick={() => navigate("/profile")}>Return Home</button>
      </div>
    );
}

export default FinishScreen;