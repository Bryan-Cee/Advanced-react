class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});
  }

  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }
}

export default DataApi;
