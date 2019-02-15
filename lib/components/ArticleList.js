import React from "react";
import Article from "./Article";

const ArticleList = ({ articles, actions }) => {
  return (
    <div
      style={{
        margin: "2rem auto",
        width: "80%"
      }}
    >
      {Object.values(articles).map(article => {
        return <Article key={article.id} article={article} actions={actions} />;
      })}
    </div>
  );
};

export default ArticleList;
