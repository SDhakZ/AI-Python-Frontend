import { Routes, Navigate, Route } from "react-router-dom";
import BmiPerceptron from "./projects/bmiPerceptron";
import PerceptronGate from "./projects/perceptronGate";

const AIRoutes = () => {
  return (
    <Routes>
      <Route path="bmi-perceptron" element={<BmiPerceptron />} />
      <Route path="perceptron-gate" element={<PerceptronGate />} />
    </Routes>
  );
};

export default AIRoutes;
