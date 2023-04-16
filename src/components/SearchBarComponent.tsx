import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    paddingLeft: theme.spacing(3),
  },
  '& .MuiInputAdornment-root': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: theme.spacing(1),
  },
}));

const SearchBarComponent = ({ value, onChange }: any) => {




  return (
    <SearchTextField
      size='small'
      placeholder="Search…"
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBarComponent;
