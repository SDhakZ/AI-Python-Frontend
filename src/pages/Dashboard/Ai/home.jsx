import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setNavbarTitle } from "../../../features/navbarSlice";

export default function AIHome() {
  const projects = [
    {
      id: 1,
      name: "BMI Perceptron",
      description:
        "A simple perceptron model to predict BMI based on input features with 1 layer perceptron in python.",
      href: "/dashboard/ai/bmi-perceptron",
    },
    {
      id: 2,
      name: "Gate Perceptron",
      description:
        "Perceptron model to predict AND, OR, and XOR gate outputs based on input features with 1 layer and 3 layer perceptron for AND, OR and XOR respectively in python.",
      href: "/dashboard/ai/perceptron-gate",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavbarTitle("Artificial Intelligence"));
  }, [dispatch]);

  return (
    <div className="h-screen px-12 py-12 bg-[#F4F6FA]">
      <div className="grid grid-cols-3 gap-8 text-lg text-slate-600">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-700">
              {project.name}
            </h2>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.href}
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
