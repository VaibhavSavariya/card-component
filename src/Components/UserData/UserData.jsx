import React, { useState } from "react";
import "./UserData.css";
import { ReactComponent as ReactionIcon } from "../../assets/images/icon-reaction.svg";
import { ReactComponent as MemoryIcon } from "../../assets/images/icon-memory.svg";
import { ReactComponent as VerbalIcon } from "../../assets/images/icon-verbal.svg";
import { ReactComponent as VisualIcon } from "../../assets/images/icon-visual.svg";

const UserData = ({ setScoreData, nextStep }) => {
  const [userData] = useState([
    {
      category: "Reaction",
      score: 80,
      icon: <ReactionIcon />,
    },
    {
      category: "Memory",
      score: 92,
      icon: <MemoryIcon />,
    },
    {
      category: "Verbal",
      score: 61,
      icon: <VerbalIcon />,
    },
    {
      category: "Visual",
      score: 72,
      icon: <VisualIcon />,
    },
  ]);
  const [active, setActive] = useState(false);
  const [activeData, setActiveData] = useState("");

  const onDataClick = (e, item) => {
    setActiveData(e);
    setActive(true);
    setScoreData(item);
  };

  return (
    <>
      <div className="user-container">
        <h4>Summary</h4>
        <div className="temp-div">
          {userData.map((item, index) => (
            <div
              key={index}
              className={`"user-data" ${
                activeData === item.category && active
                  ? "user-data-active"
                  : "user-data"
              }`}
              onClick={() => {
                onDataClick(item.category, item);
              }}
            >
              <div className="user-cat">
                <span>{item.icon}</span>
                <p>{item.category}</p>
              </div>

              <p>{item.score}/100</p>
            </div>
          ))}
        </div>
        <button className="btn" onClick={nextStep}>
          Continue
        </button>
      </div>
    </>
  );
};

export default UserData;
