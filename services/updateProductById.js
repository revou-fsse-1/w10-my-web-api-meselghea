import axios from "axios";
import { API_ENDPOINT } from "../lib/constants";

export const updateProductById = async (productData) => {
  try {
    await axios.put(`${API_ENDPOINT}/products/${productData.id}`, {
      title: productData.title,
      message: productData.message,
    });
  } catch (err) {
    console.log(err);
  }
};
