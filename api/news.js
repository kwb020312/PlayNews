import {
  article_url,
  category,
  country_code,
  __api_key,
} from "../config/rest_config";
import axios from "axios";

export const getArticles = async () => {
  try {
    const articles = await axios.get(
      `${article_url}?country=${country_code}&category=${category}&apiKey=${__api_key}`
    );
    alert(articles.data.articles);
    return articles.data.articles;
  } catch (error) {
    alert("오류");
    throw error;
  }
};
