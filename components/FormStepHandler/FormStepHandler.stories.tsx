import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormStepHandler, { IFormStepHandler } from "./FormStepHandler";
import { mockFormStepHandlerProps } from "./FormStepHandler.mocks";

export default {
  title: "example/FormStepHandler",
  component: FormStepHandler,
  argTypes: {},
} as ComponentMeta<typeof FormStepHandler>;

const Template: ComponentStory<typeof FormStepHandler> = (args) => (
  <FormStepHandler {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockFormStepHandlerProps.base,
} as IFormStepHandler;
