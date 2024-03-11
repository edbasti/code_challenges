import { Meta, StoryFn } from "@storybook/react";

import LanguageSelect from "./LanguageSelect";

// Settings
export default {
  title: "Input/LanguageSelect",
  component: LanguageSelect,
  parameters: {
    layout: "centered",
  },
} as Meta;

// Main Story
const Template: StoryFn = () => <LanguageSelect />;

export const Default = Template.bind({});
Default.args = {};
