import React from "react";

// convert date to dateString
const dateToString = date => {
  return new Date(date).toDateString();
};

const Article = ({ article, actions}) => {
  const author = actions.lookupAuthor(article.authorId)
  return (
    <div
      style={{
        borderBottom: "solid 2px gainsboro",
        marginBottom: "1em"
      }}
    >
      <div
        style={{
          fontSize: "x-large",
          fontWeight: 600
        }}
      >
        {article.title}
      </div>
      <div
        style={{
          fontSize: "small"
        }}
      >
        {dateToString(article.date)}
      </div>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div
        style={{
          margin: "1em"
        }}
      >
        {article.body}
      </div>
    </div>
  );
};

export default Article;
