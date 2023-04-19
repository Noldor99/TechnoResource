import { Box, Button, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_TO_CART, CALCULATE_TOTAL_QUANTITY } from "../../store/slice/cartSlice";
import { BASE_URL } from "../../URL";
import BoxImg from "../styleComponents/BoxImg";
import PaperRounding from "../styleComponents/containers/PaperRounding";
import TypographyTitle from "../styleComponents/TypographyTitle";
import ProductCalculator from "./ProductCalculator";


const ProductItem = ({ product, grid, id, name, price, desc, imageURL }: any) => {

  const navigate = useNavigate()


  const shortenText = (text: any, n: any) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  return (
    <PaperRounding sx={{ overflow: 'hidden', height: '100%' }}>
      <Grid container sx={{ height: '100%', alignContent: 'space-between' }}  >
        <Grid item xs={12} sm={grid ? 12 : 3} sx={{ background: 'white' }}>
          <Box sx={{ minHeight: '200px', position: 'relative' }}>
            <BoxImg padding={2}>
              <img src={product.imageURL} alt={product.name} />
            </BoxImg>
          </Box>
        </Grid>
        <Grid item xs={12} sm={grid ? 12 : 8} container spacing={3} sx={{ padding: 2 }}>
          <Grid item >
            <Typography gutterBottom variant="h5" component="div">
              {grid ? shortenText(name, 18) : name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {grid ? shortenText(desc, 200) : desc}
            </Typography>

          </Grid>
          <Grid item >
            <TypographyTitle color="text.secondary">
              Prise:  {`$${product.price}`}
            </TypographyTitle>
          </Grid>
        </Grid>
        <Grid item container sx={{ padding: 2 }} spacing={2}>
          <Grid item xs={12} sm={12} >
            <ProductCalculator id={product.id} product={product} />
          </Grid>
          <Grid xs={12} sm={12} item display='flex' justifyContent='flex-end'>
            <Button
              variant='outlined' color="success" sx={{ width: '100%' }}
              onClick={() => navigate(`${BASE_URL}/product-details/${id}`)}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PaperRounding>

  );
};

export default ProductItem;