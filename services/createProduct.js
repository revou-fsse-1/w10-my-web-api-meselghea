import axios from "axios";

import { API_ENDPOINT } from "../lib/constants";

export const createProduct = async (newProductData) => {
  try {
    await axios.post(`${API_ENDPOINT}/product`, {
      title: newProductData.title,
      message: newProductData.message,
    });
  } catch (err) {
    console.log(err);
  }
};
