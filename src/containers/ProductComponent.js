import { Box, Card, Grid, Image, Pagination, Rating } from "@mantine/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const searchQuery = useSelector((state) => state.filterProducts.searchQuery);
  const [activePage, setPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (activePage - 1) * itemsPerPage;

  const transformProducts = () => {
    let filteredProducts = products;
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((x) =>
        x.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredProducts;
  };

  const displayedProducts = transformProducts().slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Box className="w-full overflow-x-hidden  mx-0 bg-slate-200 h-max lg:min-h-screen xl:px-7">
      <Grid className="mt-10">
        {products &&
          displayedProducts.map((val) => {
            const { id, title, category, rating, price, image } = val;
            return (
              <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 4 }} key={id}>
                <Link to={`product/${id}`}>
                  <Box className="mt-8 mx-8 lg:mx-4 xl:mx-10">
                    <Card
                      shadow="sm"
                      padding="sm"
                      radius="md"
                      size="xs"
                      className="border-2"
                      withBorder
                    >
                      <Card.Section>
                        <Box className="border-slate-400 border-2 w-full h-[200px] xl:h-[250px] bg-white flex items-center justify-center overflow-hidden ">
                          <Image
                            className="max-w-full max-h-full "
                            src={image}
                            alt={title}
                          />
                        </Box>
                      </Card.Section>

                      <Box
                        className="text-lg md:text-xl xl:text-2xl md:min-h-28 lg:min-h-32 xl:min-h-24 mt-3 text-center mb-auto"
                        fw={500}
                      >
                        {title}
                      </Box>
                      <Box className="flex items-center justify-center">
                        <Rating
                          size="lg"
                          className="mt-2 justify-center items-center"
                          value={rating.rate}
                          fractions={10}
                          color="teal"
                          readOnly
                        />
                      </Box>
                      <Box
                        className="text-blue-950 font-serif md:text-lg xl:text-2xl font-bold text-center mt-1"
                        size="md"
                      >
                        " {category} "
                      </Box>
                      <Box className="text-xl font-semibold md:text-wxl xl:text-3xl text-center font-mono">
                        ${price}
                      </Box>
                    </Card>
                  </Box>
                </Link>
              </Grid.Col>
            );
          })}
      </Grid>
      <Box className="flex justify-center pb-5 mt-3">
        <Pagination
          size="lg"
          color="teal"
          total={Math.ceil(products.length / itemsPerPage)}
          value={activePage}
          onChange={setPage}
          mt="sm"
        />
      </Box>
    </Box>
  );
}
