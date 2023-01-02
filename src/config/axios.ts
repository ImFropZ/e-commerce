import axios from "axios";
import { Product } from "../contexts/ProductContext";

interface IFetchData {
  url: string;
  method?: "get" | "post" | "patch" | "delete";
  body?: string;
}

const BASE_URL = "https://fakestoreapi.com";

const fetchData = async (props: IFetchData) => {
  const { url, method = "get", body = "" } = props;
  return axios({
    method,
    url,
    baseURL: BASE_URL,
    data: body,
  });
};

export const fetchProducts = async (): Promise<Array<Product>> => {
  try {
    return fetchData({ url: "/products" }).then((res) => res.data);
  } catch (e) {
    throw new Error("Error");
  }
};

export const fetchProduct = async (id: number): Promise<Product> => {
  try {
    return fetchData({ url: "/products/" + id }).then((res) => res.data);
  } catch (e) {
    throw new Error("Error");
  }
};

export const fetchCategories = async (): Promise<Array<string>> => {
  try {
    return fetchData({ url: "/products/categories" }).then((res) => res.data);
  } catch (e) {
    throw new Error("Error");
  }
};

export const fetchProductInCategory = async (
  name: string
): Promise<Array<string>> => {
  try {
    return fetchData({ url: "/category/" + name }).then((res) => res.data);
  } catch (e) {
    throw new Error("Error");
  }
};
