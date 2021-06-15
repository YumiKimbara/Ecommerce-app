import React from "react";

const ColorFilter = () => {
  return (
    <>
      <div className="fillterContainer">
        <div className="sizeButton">
          <input type="checkbox" name="red" id="red"></input>
          <label className="checkbox checkboxRed" htmlFor="red">
            Red
          </label>
        </div>
        <div className="sizeButton">
          <input type="checkbox" name="blue" id="blue"></input>
          <label className="checkbox checkboxBlue" htmlFor="blue">
            Blue
          </label>
        </div>
        <div className="sizeButton">
          <input type="checkbox" name="yellow" id="yellow"></input>
          <label className="checkbox checkboxYellow" htmlFor="yellow">
            Yellow
          </label>
        </div>
        <div className="sizeButton">
          <input type="checkbox" name="black" id="black"></input>
          <label className="checkbox checkboxBlack" htmlFor="black">
            Black
          </label>
        </div>
        <div className="sizeButton">
          <input type="checkbox" name="white" id="white"></input>
          <label className="checkbox checkboxWhite" htmlFor="white">
            White
          </label>
        </div>
        <div className="sizeButton">
          <input type="checkbox" name="green" id="green"></input>
          <label className="checkbox checkboxGreen" htmlFor="green">
            Green
          </label>
        </div>
        <div className="sizeButton">
          <input type="checkbox" name="purple" id="purple"></input>
          <label className="checkbox checkboxPurple" htmlFor="purple">
            Purple
          </label>
        </div>
      </div>
    </>
  );
};

export default ColorFilter;
