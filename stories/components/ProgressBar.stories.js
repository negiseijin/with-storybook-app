import React from "react";
import ProgressBar from "../../components/ProgressBar";

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
    backgroundColor: { control: "color" },
    color: { control: "color" },
    className: { control: "text" },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
  backgroundColor: "#eee",
  color: "#000",
  className: "",
};
export const With50PercentProgress = () => <ProgressBar value={50} />;
export const With25PercentProgress = () => <ProgressBar value={25} />;
export const With75PercentProgress = () => <ProgressBar value={75} />;
