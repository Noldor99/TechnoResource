import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_TO_CART, CALCULATE_TOTAL_QUANTITY } from "../../../store/slice/cartSlice";
import CardThema from "../../styleComponents/CardThema";



const ProductItem = ({ product, grid, id, name, price, desc, imageURL }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const shortenText = (text: any, n: any) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const addToCart = (product: any) => {
    dispatch(ADD_TO_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY({}));
  };

  return (
    <CardThema

      sx={{ maxWidth: 345, margin: '0 auto', display: 'flex', flexDirection: 'column', height: '100%' }}
    // cardClass={grid ? `${styles.grid}` : `${styles.list}`}
    >
      <Box sx={{ background: 'white', paddingTop: '12px' }}>

        <CardMedia
          component="img"
          alt={name}
          height="250"

          sx={{ width: 'inherit', margin: '0 auto' }}
          image={imageURL}
        />
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {shortenText(name, 18)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortenText(desc, 200)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`$${price}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='outlined' color="success"

            onClick={() => addToCart(product)}
          >Add To Cart</Button>
          <Button
            variant='outlined' color="success"

            onClick={() => navigate(`/product-details/${id}`)}
          >Learn More</Button>
        </CardActions>
      </Box>

      {/* {!grid && <p  >{shortenText(desc, 200)}</p>} */}


    </CardThema>
  );
};

export default ProductItem;
