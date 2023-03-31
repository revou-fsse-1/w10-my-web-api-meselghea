import axios from "axios";
import { API_ENDPOINT } from "../lib/constants";

export const getAllProducts = async (keyword) => {
  try {
    const response = await axioproducts.get(
      `${API_ENDPOINT}/products?q=${keyword}`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
