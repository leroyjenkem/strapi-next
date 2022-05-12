import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Markdown from 'markdown-to-jsx';
import rehypeRaw from 'rehype-raw';
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";

const Page = ({ page, pages }) => {
  const MarkdownOptions = {
    overrides: {
      h5: Tab,
      h4: Tabs,
      h6: TabList,
      h3: TabPanel,
    },
  };
  return (
    <Layout pages={pages}>
    <Markdown options={MarkdownOptions}>
      {page.attributes.Content}
    </Markdown>
    </Layout>
  );
};

export async function getStaticPaths() {
  const pathsRes = await fetchAPI("/pages", { fields: ["Slug"] });
  return {
    paths: pathsRes.data.map((page) => ({
      params: {
        slug: page.attributes.Slug,
      },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const pageRes = await fetchAPI("/pages", {
    filters: {
      slug: {
        $eq: params.slug,
      },
    },
    fields: ['Title', 'Content', 'Slug'],
    encodeValuesOnly: true
  });
  const pagesRes = await fetchAPI("/pages", {
    fields: ['Title', 'Content', 'Slug'],
    encodeValuesOnly: true
  });
  return {
    props: { page: pageRes.data[0], pages: pagesRes.data },
    revalidate: 1,
  };
}

export default Page;
