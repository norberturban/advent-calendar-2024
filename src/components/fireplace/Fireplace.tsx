import "./Fireplace.scss";

const Fireplace = () => (
  <div className="wrapper">
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
      </div>
      <div className="candle">
        <div className="fire"></div>
      </div>
      <div className="candle" id="candle-2">
        <div className="fire"></div>
      </div>
      <div className="candle" id="candle-3">
        <div className="fire"></div>
      </div>
    </div>
  </div>
);

export default Fireplace;
