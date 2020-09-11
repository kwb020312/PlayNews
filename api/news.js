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
    return articles.data.articles;
  } catch (error) {
    throw error;
  }
};

export const getHealth = async () => {
  try {
    const articles = await axios.get(
      `${article_url}?country=${country_code}&category=health&apiKey=${__api_key}`
    );
    return articles.data.articles;
  } catch (error) {
    throw error;
  }
};

export const getEntertainment = async () => {
  try {
    const articles = await axios.get(
      `${article_url}?country=${country_code}&category=entertainment&apiKey=${__api_key}`
    );
    return articles.data.articles;
  } catch (error) {
    throw error;
  }
};
