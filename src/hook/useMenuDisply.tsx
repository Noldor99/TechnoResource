import { useMediaQuery } from "@mui/material";


export const ShowOnDesktop = ({ children }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isNonMobile = useMediaQuery('(min-width:960px)')

  if (isNonMobile) {
    return children;
  }
  return null;
};

export const ShowOnMobile = ({ children }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isNonMobile = useMediaQuery('(min-width:960px)')

  if (!isNonMobile) {
    return children;
  }
  return null;
};


