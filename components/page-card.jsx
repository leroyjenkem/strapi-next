import React from "react";
import Link from "next/link";
import Markdown from 'markdown-to-jsx';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import rehypeRaw from 'rehype-raw';

const PageCard = ({page}) => {
  const MarkdownOptions = {
    overrides: {
        h5: Tab,
        h4: Tabs,
        h6: TabList,
        h3: TabPanel,
    },
};
  return (
    <Markdown options={MarkdownOptions}>
      {page.attributes.Content}
    </Markdown>
  )
};

export default PageCard;
