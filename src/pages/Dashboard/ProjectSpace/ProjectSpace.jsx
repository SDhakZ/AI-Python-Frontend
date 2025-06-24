import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bmi } from "../../../thunks/thunk";

export default function ProjectSpace() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.bmi.result);
  const category = useSelector((state) => state.bmi.category);
  const onClick = (e) => {
    e.preventDefault();
    const weight = e.target.weight.value;
    const height = e.target.height.value;
    if (weight && height) {
      dispatch(bmi({ values: { weight, height } }));
    } else {
      alert("Please enter both weight and height.");
    }
  };

  return (
    <div className="px-10 bg-[#F4F6FA] h-screen">
      <div className="flex flex-col items-center justify-center h-full gap-2 ">
        <h1 className="text-xl ">BMI calculator</h1>
        <form className="flex w-full max-w-md" onSubmit={onClick}>
          <div className="flex flex-col items-center justify-center w-full px-10 py-10 bg-white">
            <div className="flex flex-col w-full">
              <label className="mb-2 text-lg font-semibold">Weight (kg):</label>
              <input
                type="number"
                className="w-full px-4 py-2 mb-4 border rounded"
                placeholder="Enter your weight"
                name="weight"
                required
                step="0.01"
                min="0"
                max="500"
                id="weight"
                autoComplete="off"
                autoFocus
              />
            </div>{" "}
            <div className="flex flex-col w-full">
              <label className="mb-2 text-lg font-semibold">Height (m):</label>

              <input
                type="number"
                step="0.01"
                className="w-full px-4 py-2 mb-4 border rounded"
                placeholder="Enter your height"
                name="height"
                required
                min="0"
                max="3"
                id="height"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Calculate BMI
            </button>
          </div>
        </form>
        <div className="max-w-md py-2 mt-4 text-lg font-semibold text-center rounded-md text-slate-900 bg-slate-200">
          {result !== null
            ? `Your BMI is: ${result} and you are classified as: ${category}`
            : "Enter your details to calculate BMI"}
        </div>
      </div>
    </div>
  );
}
