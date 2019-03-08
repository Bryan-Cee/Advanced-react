import React, { Component } from "react";
import ArticleList from "./ArticleList";
import DataApi from "../DataApi";
import { data } from "../testData";

const api = new DataApi(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        actions={this.articleActions}
      />
    );
  }
}

export default App;
