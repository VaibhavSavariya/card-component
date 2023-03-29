import React from "react";
import "./ResultData.css";
const ResultData = ({ scoreData }) => {
  const users = 1000;
  let lessUser = (265 / users) * 100;
  // let percentageData = (scoreData.score / 400) * 100;
  return (
    <>
      <div className="result-container">
        <h3>Your Result</h3>
        <div className="circle"></div>
        <h1>{scoreData.score ? scoreData.score : "?"}</h1>
        <p>OF 100</p>
        <h2>
          {scoreData?.score >= 90
            ? "Amazing!"
            : scoreData?.score >= 70
            ? "Great!"
            : scoreData?.score <= 70
            ? "Good!"
            : "No Comment!"}
        </h2>
        <div className="result-des">
          you scored higher than {lessUser.toFixed(2)}% of the people who have
          taken these tests.
        </div>
      </div>
    </>
  );
};

export default ResultData;
