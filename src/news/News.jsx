import React, { Component } from "react";
import axios from "axios";
// Custom components
import ListNews from "./ListNews";
import Navigation from "../navigation/Navigation";

// News API
const apiKey = "44687f6f58184f6385947cb55a41ac62";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

class News extends Component {
  state = {
    listNews: [],
    isLoading: true,
    search: "",
  };

  componentDidMount = () => {
    // get params from url
    const paramCategory = this.props.match.params.category;

    // set url request by category
    const endpoint = urlHeadline + "&category=" + paramCategory;

    // get news from api
    this.getNews(endpoint);
  };

  // function get list news from api
  getNews = async (endpoint) => {
    // set condition if params url undefined
    let url;
    if (url) {
      url = endpoint;
    } else {
      url = urlHeadline;
    }

    // activate loading
    await this.setState({ isLoading: true });

    // request data from api
    axios
      .get(url)
      .then((response) => {
        this.setState({ listNews: response.data.articles, isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
      });
  };

  // function to handle input user when change value on field search
  handleInputChange = async (event) => {
    let value = event.target.value;
    await this.setState({ search: value });
    this.searchNews(value);
  };

  // function to do search news when keyword more than 2 digit
  searchNews = async (keyword) => {
    if (keyword.length > 2) {
      // activate loading
      await this.setState({ isLoading: true });
      try {
        const response = await axios.get(
          baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
        );
        this.setState({ listNews: response.data.articles, isLoading: false });
      } catch (error) {
        console.error(error);
      }
    }
  };

  // function to change router and request news by category
  handleRequestCategoryNews = async (categoryName) => {
    // redirect pages to endpoint news-category
    await this.props.history.replace("/news-category/" + categoryName);

    // activate loading
    await this.setState({ isLoading: true });

    // get params from url
    const paramCategory = await this.props.match.params.category;

    // request news by category
    await axios
      .get(urlHeadline + "&category=" + paramCategory)
      .then((response) => {
        this.setState({ listNews: response.data.articles, isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    // console.warn("cek props pada news", this.props);
    const { listNews, isLoading } = this.state;
    const topHeadlines = listNews.filter((item) => {
      if (item.content !== null && item.image !== null) {
        return item;
      }
      return false;
    });

    return (
      <React.Fragment>
        <Navigation
          doSearch={(event) => this.handleInputChange(event)}
          handleRouter={(e) => this.handleRequestCategoryNews(e)}
          getNews={this.getNews}
          keyword={this.state.search}
          placeholder="ketik sesuatu"
          {...this.props}
        />
        <div className="headlineNews">
          {isLoading ? (
            <div style={{ textAlign: "center" }}>Masih Loading ya...</div>
          ) : (
            <div>
              {topHeadlines.map((item, key) => (
                <ListNews
                  key={key}
                  title={item.title}
                  img={item.urlToImage}
                  content={item.description}
                  url={item.url}
                />
              ))}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default News;
