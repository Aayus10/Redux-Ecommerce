import { Box, Radio } from "@mantine/core";
import React from "react";
import { setFilterCategory } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import "../styles/FilterApplier.css";

export default function FilterApplier() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filterProducts.category);
  return (
    <>
      <Box className="flex flex-col xl:flex-row items-center justify-center md:justify-between bg-blue-950 xl:pt-3 text-white">
        <Box className="font-bold text-xl text-center font-serif mb-3 md:text-2xl xl:text-2xl xl:w-3/12 ">
          Filter By Category:
        </Box>
        <Box className="xl:w-9/12 flex flex-col md:flex-row w-[55%] mx-[22.5%] md:w-full md:justify-evenly md:mx-0 gap-y-2 pb-4 md:text-3xl ">
          <Radio
            label={<span className="filter-label">All Products</span>}
            color="teal"
            size="md"
            checked={category === ""}
            value=""
            onChange={() => {
              dispatch(setFilterCategory(""));
            }}
          />
          <Radio
            size="md"
            label={<span className="filter-label">Men's Clothing</span>}
            color="teal"
            checked={category === "category/men's clothing"}
            onChange={() => {
              dispatch(setFilterCategory("category/men's clothing"));
            }}
          />
          <Radio
            size="md"
            label={<span className="filter-label">Women's Clothing</span>}
            color="teal"
            checked={category === "category/women's clothing"}
            onChange={() => {
              dispatch(setFilterCategory("category/women's clothing"));
            }}
          />
          <Radio
            size="md"
            label={<span className="filter-label">Electronics</span>}
            color="teal"
            checked={category === "category/electronics"}
            onChange={() => {
              dispatch(setFilterCategory("category/electronics"));
            }}
          />
          <Radio
            size="md"
            label={<span className="filter-label">Jewelery</span>}
            value="category/jewelery "
            checked={category === "category/jewelery"}
            onChange={() => {
              dispatch(setFilterCategory("category/jewelery"));
            }}
            color="teal"
          />
        </Box>
      </Box>
    </>
  );
}
