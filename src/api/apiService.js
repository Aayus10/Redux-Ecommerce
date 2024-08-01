import axios from "axios";

const apiService = {
  fetchProducts: async (category) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${category}`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  },

  fetchSelectedProduct: async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  },
};

export default apiService;
