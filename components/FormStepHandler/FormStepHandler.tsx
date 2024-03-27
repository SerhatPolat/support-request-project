import React from "react";
import { FaCheck, FaQuestion } from "react-icons/fa";

export interface IFormStepHandler {
  step: 1 | 2 | 3;
  step1Text: string | null;
  step2Text: string | null;
}

const FormStepHandler: React.FC<IFormStepHandler> = ({
  step,
  step1Text,
  step2Text,
}) => {
  let stepCircleStyles =
    "flex items-center justify-center w-20 h-20 rounded-full text-white";

  let seperatorBarStyles = "h-2 w-full mt-9";

  return (
    <div className="flex">
      <div className="text-center">
        <div
          className={`${stepCircleStyles} ${
            step >= 2 ? "bg-primary" : "bg-gray-400"
          }`}
        >
          {step >= 2 ? <FaCheck size={20} /> : <FaQuestion size={20} />}
        </div>

        <p className="mt-2 text-xs font-semibold">
          {step1Text ? step1Text : ""}
        </p>
      </div>
      <div
        className={`${seperatorBarStyles} ${
          step >= 3 ? "bg-primary" : "bg-gray-400"
        }`}
      ></div>
      <div className="text-center">
        <div
          className={`${stepCircleStyles} ${
            step >= 3 ? "bg-primary" : "bg-gray-400"
          }`}
        >
          {step >= 3 ? <FaCheck size={20} /> : <FaQuestion size={20} />}
        </div>

        <p className="mt-2 text-xs font-semibold">{step2Text}</p>
      </div>
    </div>
  );
};

export default FormStepHandler;
