import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import apiService from "../api/apiService";
import FilterApplier from "./FilterApplier";

export default function ProductListing() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.filterProducts.category
  );
  console.log(selectedCategory);
  const fetchProducts = async () => {
    try {
      const products = await apiService.fetchProducts(selectedCategory);
      dispatch(setProducts(products));
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  return (
    <>
      <FilterApplier />
      <ProductComponent />
    </>
  );
}
