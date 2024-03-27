import dynamic from "next/dynamic";

const BaseComponent = dynamic(() => import("./BaseComponent/BaseComponent"));
const FormStepHandler = dynamic(
  () => import("./FormStepHandler/FormStepHandler")
);

export { BaseComponent, FormStepHandler };
