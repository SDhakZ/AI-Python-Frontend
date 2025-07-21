import { Routes, Navigate, Route } from "react-router-dom";
import BmiPerceptron from "./projects/bmiPerceptron";
import PerceptronGate from "./projects/perceptronGate";
import BmiMLP from "./projects/bmiMLP";

const AIRoutes = () => {
  return (
    <Routes>
      <Route path="bmi-perceptron" element={<BmiPerceptron />} />
      <Route path="perceptron-gate" element={<PerceptronGate />} />
      <Route path="bmi-multi-layer-perceptron" element={<BmiMLP />} />
    </Routes>
  );
};

export default AIRoutes;
