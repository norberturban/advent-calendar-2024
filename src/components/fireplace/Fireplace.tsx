import { useContext } from "react";
import classNames from "classnames";

import AdventCalendarContext from "src/context/AdventCalendarContext";

import "./Fireplace.scss";

const Fireplace = () => {
  const { isDarkMode } = useContext(AdventCalendarContext);

  return (
    <div className={classNames("wrapper", { "wrapper--dark": isDarkMode })}>
      <div className="fireplace">
        <div className="bottom"></div>
        <ul className="top">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="bricks">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="chimney"></div>
        <div className="chimney-shadow"></div>
        <div className="chimney-fire-wrapper">
          {isDarkMode ? (
            <>
              <ul className="wood">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className="fire"></div>
              <ul className="embers">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </>
          ) : null}
        </div>
        {isDarkMode ? (
          <>
            <div className="candle">
              <div className="fire" />
            </div>
            <div className="candle" id="candle-2">
              <div className="fire" />
            </div>
            <div className="candle" id="candle-3">
              <div className="fire" />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Fireplace;
