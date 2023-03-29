import React from "react";
import { motion } from "framer-motion";

import "./ThankYouData.css";
const ThankYouData = ({ prevStep }) => {
  return (
    <>
      <motion.div
        className="result-container-thank"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Congratulations!</h3>
        <div className="emoji">🏆</div>
        <p className="result">You Have Successfully Passed The Exam!</p>
        <button className="btn-back" onClick={prevStep}>
          Go Back!
        </button>
      </motion.div>
    </>
  );
};

export default ThankYouData;
