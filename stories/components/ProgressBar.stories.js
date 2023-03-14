import React from "react";
import {
  ProgressBar,
  ProgressBar2,
  ProgressBar3,
} from "../../components/ProgressBar";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
    className: { control: "text" },
  },
};

const Template = (args) => <ProgressBar {...args} />;
const Template2 = (args) => <ProgressBar2 {...args} />;
const Template3 = (args) => <ProgressBar3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
  className: "",
};
export const Default2 = Template2.bind({});
Default2.args = {
  value: 50,
  max: 100,
};
export const Default3 = Template3.bind({});
Default3.args = {
  value: 0,
  max: 2,
};
