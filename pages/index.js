import React from "react";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";
import Pages from "../components/pages"
import dynamic from "next/dynamic";

const LinkScripts = dynamic(() => {
    return import("../components/link-scripts.js");
  },
  { ssr: false }
);

const Home = ({ pages }) => {
  return (
    <Layout pages={pages}>
        <div className="">
          <Pages pages={pages} />
        </div>
        <LinkScripts />
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [pagesRes] = await Promise.all([
    fetchAPI("/pages", { sort: ['id:asc'], populate: ["image"], encodeValuesOnly: true }),
  ]);
  return {
    props: {
      pages: pagesRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
