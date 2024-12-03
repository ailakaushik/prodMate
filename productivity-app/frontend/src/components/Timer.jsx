import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";

const red = '#FF0032';
const green = '#4AEC8C'; 
const white = '#FFFFFD'

// /* Color Theme Swatches in Hex */
// .Pomodoro-Timer-1-hex { color: #FFFFFD; } white
// .Pomodoro-Timer-2-hex { color: #FFD039; } yellow
// .Pomodoro-Timer-3-hex { color: #FF0032; } red
// .Pomodoro-Timer-4-hex { color: #7D7D7A; } light grey
// .Pomodoro-Timer-5-hex { color: #525252; } dark grey




function Timer() {
  return (
    <>
      <div>
        <h2>Pomodoro Timer</h2>
        <CircularProgressbar value={50} text={'50%'} styles={buildStyles({
            textColor:'#fff', 
            pathColor:red, 
            trailColor:white,})} />;

            <div>
                
            </div>
      </div>
    </>
  );
}

export default Timer;
