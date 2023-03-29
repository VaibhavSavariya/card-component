import { useState } from "react";
import "./App.css";
import ResultData from "./Components/ResultData/ResultData";
import ThankYouData from "./Components/ThankYouData/ThankYouData";
import UserData from "./Components/UserData/UserData";
import { motion } from "framer-motion";

const App = () => {
  const [step, setStep] = useState(1);
  const [scoreData, setScoreData] = useState([]);
  const git = 100;

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  switch (step) {
    case 1:
      return (
        <>
          <motion.div
            className="container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ResultData scoreData={scoreData} />
            <UserData setScoreData={setScoreData} nextStep={nextStep} />
          </motion.div>
        </>
      );
    case 2:
      return (
        <>
          <div className="container">
            <ThankYouData prevStep={prevStep} />
          </div>
        </>
      );
    default:
      return <div className="App"></div>;
  }
};

export default App;
