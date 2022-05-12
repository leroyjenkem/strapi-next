import React from "react";
import PageCard from "./page-card.jsx"

const Pages = ({ pages }) => {
  return (
        <div>
          {pages.map((page) => {
            return (
              <PageCard
                page={page}
                key={`${page.attributes.Slug}`}
              />
            );
          })}
        </div>
  );
};

export default Pages;
