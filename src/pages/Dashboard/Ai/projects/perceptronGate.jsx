import { useSelector, useDispatch } from "react-redux";
import { predictAndOr } from "../../../../thunks/aiThunk";
import { useEffect } from "react";
import { setNavbarTitle } from "../../../../features/navbarSlice";

export default function PerceptronGate() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavbarTitle("And Or gate Perceptron"));
  }, []);

  const result = useSelector((state) => state.ai.gateResult);
  const loading = useSelector((state) => state.ai.loading);
  const onClick = (e) => {
    e.preventDefault();
    const a = e.target.a.value;
    const b = e.target.b.value;
    const gate = e.target.gate.value;
    if (a && b && gate) {
      dispatch(predictAndOr({ values: { a, b }, gate }));
    } else {
      alert("Please enter both a and b.");
    }
  };

  return (
    <div className="px-12 -mt-10 bg-[#F4F6FA] h-screen">
      <div className="flex flex-col items-center justify-center h-full gap-2 ">
        <h1 className="mb-4 text-2xl font-semibold">
          Perceptron model BMI calculator
        </h1>
        <form className="flex w-full max-w-md" onSubmit={onClick}>
          <div className="flex flex-col items-center justify-center w-full px-10 py-10 bg-white rounded-md">
            <div className="flex flex-col w-full">
              <label className="mb-2 text-lg font-semibold">Gate</label>
              <select
                className="w-full px-4 py-2 mb-4 border rounded"
                name="gate"
                id="gate"
                required
              >
                <option value="" disabled selected>
                  Select gate type
                </option>
                <option value="and">AND Gate</option>
                <option value="or">OR Gate</option>
              </select>
              <label className="mb-2 text-lg font-semibold">First value</label>
              <input
                type="number"
                className="w-full px-4 py-2 mb-4 border rounded"
                placeholder="Enter your value"
                name="a"
                step="1"
                required
                min="0"
                max="1"
                id="a"
                autoComplete="off"
                autoFocus
              />
            </div>{" "}
            <div className="flex flex-col w-full">
              <label className="mb-2 text-lg font-semibold">Second value</label>

              <input
                type="number"
                step="1"
                className="w-full px-4 py-2 mb-4 border rounded"
                placeholder="Enter your value"
                name="b"
                required
                min="0"
                max="1"
                id="b"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              {loading ? "Calculating..." : "Calculate Output"}
            </button>
          </div>
        </form>
        <div className="w-full max-w-md py-2 mt-4 text-lg font-semibold text-center rounded-md text-slate-900 bg-slate-200">
          {result !== null
            ? `The output is: ${result}`
            : "Enter your details to calculate BMI"}
        </div>
      </div>
    </div>
  );
}
