import { Box, Button, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoxImg from "../../components/styleComponents/BoxImg";
import ButtonBlueBack from "../../components/styleComponents/buttons/ButtonBlueBack";
import PaperRounding from "../../components/styleComponents/containers/PaperRounding";
import TableHeadTheme from "../../components/styleComponents/containers/TableHeadTheme";
import TableRowTheme from "../../components/styleComponents/containers/TableRowTheme";
import FlexBetween from "../../components/styleComponents/FlexBetween";
import useFetchDocument from "../../customHooks/useFetchDocument";
import { ShowOnMobile } from "../../hook/useMenuDisply";
import { ICard } from "../../models/models";
import { BASE_URL } from "../../URL";
import OrderMinText from "./OrderMinText";

const OrderDetails = () => {
  const [order, setOrder] = useState<any>(null);
  const { id } = useParams();
  const { document } = useFetchDocument("orders", id);

  const navigate = useNavigate()

  useEffect(() => {
    setOrder(document);
  }, [document]);

  if (order === null) {
    return (
      <Typography>Null</Typography>
    )
  }

  const orderTable = order.cartItems.map(
    (cart: ICard, index: number): JSX.Element => {
      const { id, name, price, imageURL, cartQuantity } = cart;
      return (
        <TableRowTheme key={id} sx={{ cursor: "inherit !important" }}>
          <TableCell>
            <b>{index + 1}</b>
          </TableCell>
          <TableCell>
            <Typography>
              <b>{name}</b>
            </Typography>
            <img
              src={imageURL}
              alt={name}
              style={{ width: "100px" }}
            />
          </TableCell>
          <TableCell>{price}$</TableCell>
          <TableCell>{cartQuantity}</TableCell>
          <TableCell>
            <Typography>{(price * cartQuantity).toFixed(2)}$</Typography>
          </TableCell>
          <TableCell>
            <ButtonBlueBack
              onClick={() =>
                navigate(`${BASE_URL}/review-product/${id}`)
              }
            >
              Review Product
            </ButtonBlueBack>
          </TableCell>
        </TableRowTheme>
      );
    }
  );

  const orderCart = order.cartItems.map((cart: ICard, index: number) => {
    const { id, name, price, imageURL, cartQuantity } = cart;
    return (
      <PaperRounding key={id} sx={{ overflow: 'hidden' }}>
        <Box sx={{ minHeight: '200px', position: 'relative', }}>
          <BoxImg padding={2} >
            <img src={imageURL} alt={name} />
          </BoxImg>
        </Box>
        <Stack spacing={2} sx={{ padding: 2 }}>
          <Typography variant="h4"><b>{name}</b></Typography>
          <FlexBetween>
            <Typography>price:</Typography>
            <Typography>{price}$</Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography>Quantity:</Typography>
            <Typography>{cartQuantity}</Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography>Total price:</Typography>
            <Typography>{(price * cartQuantity).toFixed(2)}$</Typography>
          </FlexBetween>
          <ButtonBlueBack onClick={() => navigate(`${BASE_URL}/review-product/${id}`)}>
            Review Product
          </ButtonBlueBack>
        </Stack>
      </PaperRounding>
    );
  })


  return (
    <Container>
      <Typography variant="h2">
        Order Details
      </Typography>
      <PaperRounding
        sx={{ padding: 2, maxWidth: '400px', marginBottom: 2 }}>
        <OrderMinText order={order} />
      </PaperRounding>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHeadTheme>
            <TableRow>
              <TableCell>s/n</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHeadTheme>
          <TableBody>
            {orderTable}
          </TableBody>
        </Table>
      </TableContainer>
      <ShowOnMobile>
        <Box sx={{ paddingTop: 2 }}>
          <Stack spacing={2}>
            {orderCart}
          </Stack>
        </Box>
      </ShowOnMobile>
      <Button
        color="info"
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{ marginBottom: 2, marginTop: 2 }}
      >
        Back To Orders
      </Button>
    </Container>
  );
};

export default OrderDetails;
