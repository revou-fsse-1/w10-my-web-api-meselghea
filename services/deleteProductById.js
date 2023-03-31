import axios from "axios";

export const deleteProductById = async (id) => {
  try {
    const response = await axios.delete(
      `https://64263f33d24d7e0de46c68c3.mockapi.io/skincarelist${id}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
