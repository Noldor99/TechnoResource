import React, { useEffect, useState } from "react";

import ProductItem from "../productItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, FormControl, Grid, IconButton, InputLabel, ListItemIcon, MenuItem, Pagination, Select, Typography } from "@mui/material";
import SearchBarComponent from "../../SearchBarComponent";
import { selectFilteredProducts, SORT_PRODUCTS, FILTER_BY_SEARCH } from "../../../store/slice/filterSlice";
import MuiListAltIcon from '@mui/icons-material/ListAlt';
import WindowIcon from '@mui/icons-material/Window';
import BoxBackgroundThema from "../../styleComponents/BoxBackgroundThema";
import FlexBetween from "../../styleComponents/FlexBetween";

const ProductList = ({ products }: any) => {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<any>("latest");
  const filteredProducts = useSelector(selectFilteredProducts);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  // Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SORT_PRODUCTS({ products, sort }));
  }, [dispatch, products, sort]);

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ products, search }));
  }, [dispatch, products, search]);

  return (
    <BoxBackgroundThema sx={{ padding: 3 }}>
      <Grid container spacing={2} sx={{ paddingBottom: 2 }}>
        <Grid item sm={12} md={4}>
          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>

            <IconButton>
              {grid ?
                <MuiListAltIcon onClick={() => setGrid(false)} /> :
                <WindowIcon onClick={() => setGrid(true)} />
              }
            </IconButton>
            <Typography>
              <b>{filteredProducts.length}</b> Products found.
            </Typography>
          </Box>
        </Grid>


        <Grid item sm={6} md={4}>

          <SearchBarComponent value={search} onChange={(e: any) => setSearch(e.target.value)} />
        </Grid>
        <Grid item sm={6} md={4}
          display="flex"
          justifyContent="end"
        >

          <FormControl>
            <InputLabel>Sort by:</InputLabel>
            <Select
              sx={{ minWidth: '140px' }}
              value={sort}
              label="Sort by:"
              onChange={(e) => setSort(e.target.value)}
            >
              <MenuItem value="latest">Latest</MenuItem>
              <MenuItem value="lowest-price">Lowest Price</MenuItem>
              <MenuItem value="highest-price">Highest Price</MenuItem>
              <MenuItem value="a-z">A - Z</MenuItem>
              <MenuItem value="z-a">Z - A</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <div
      // className={grid ? `${styles.grid}` : `${styles.list}`}
      >
        {products.lenght === 0 ? (
          <p>No product found.</p>
        ) : (
          <>
            <Grid container spacing={3}>
              {currentProducts.map((product: any) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <ProductItem {...product} grid={grid} product={product} />
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
        <Pagination
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          count={Math.ceil(filteredProducts.length / productsPerPage)}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
        />
      </div>
    </BoxBackgroundThema>
  );
};

export default ProductList;
