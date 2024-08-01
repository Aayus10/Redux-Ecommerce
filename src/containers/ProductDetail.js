import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiService from "../api/apiService";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { Badge, Box, Button, Image, Rating } from "@mantine/core";

export default function ProductDetail() {
  const product = useSelector((state) => state.selectedProduct);
  const { title, category, description, rating, price, image } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchSelectedProduct = async () => {
    try {
      const selectedProduct = await apiService.fetchSelectedProduct(productId);
      dispatch(setSelectedProduct(selectedProduct));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchSelectedProduct();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  return (
    <>
      <Box className="flex flex-col lg:flex-row px-10 bg-slate-200 lg:h-screen pt-24">
        <Box className="border-slate-400 border-2 w-full h-[200px] md:h-[250px] lg:h-[550px] lg:mb-[10%] lg:w-5/12  bg-white flex items-center justify-center overflow-hidden ">
          <Image className="max-w-full max-h-full " src={image} alt="Hello" />
        </Box>
        <Box className=" mt-5 lg:mt-0 lg:w-7/12">
          <Box className="text-center text-3xl font-bold text-blue-950 xl:text-4xl">
            {title}
          </Box>
          <Box className="flex justify-center">
            <Badge className="mt-4" color="red" size="xl">
              <span className="text-md lg:text-xl text-center text-white">
                {category}
              </span>
            </Badge>
          </Box>
          <Box className="mt-4 text-xl lg:text-3xl font-semibold md:text-wxl xl:text-3xl text-center font-mono">
            ${price}
          </Box>
          <Box className="flex items-center justify-center">
            <Rating
              size="lg"
              className="mt-2 justify-center items-center"
              color="teal"
              value={rating?.rate}
              readOnly
              fractions={2}
            />
          </Box>
          <Box className="px-2 text-md justify-normal text-center mt-8 font-semibold md:text-lg lg:text-3xl">
            {description}
          </Box>
          <Box className="flex justify-center mt-5 pb-10">
            <Button variant="filled" color="teal" size="lg" radius="md">
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
