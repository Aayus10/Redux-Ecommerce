import { Box, TextInput } from "@mantine/core";
import React from "react";
import { setSearchQuery } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <Box className="flex flex-col lg:flex-row py-3 ">
        <Box className="text-center lg:w-8/12 font-bold text-2xl text-green-950 md:text-3xl lg:text-3xl xl:text-4xl">
          Online Shopping Store
        </Box>
        <Box className="lg:w-4/12">
          <TextInput
            className="border-2 border-slate-400 mx-[15%] mt-3 sm:w-[40%] sm:mx-[30%] lg:mt-0 lg:ml-[30%] lg:w-[60%] lg:mr-[10%]"
            size="md"
            placeholder="Search your product here"
            onChange={(e) => {
              dispatch(setSearchQuery(e.target.value));
            }}
          />
        </Box>
      </Box>
    </>
  );
}
