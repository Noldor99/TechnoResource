import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import ListItemButtonStyled from '../styleComponents/ListItemButtonStyled';

export default function UploadButtons({ handleImageChange }: any) {
  const [fileName, setFileName] = React.useState('File name');

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    setFileName(file.name);
    handleImageChange(event);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
      <label htmlFor="file-upload">
        <input
          accept="image/*"
          id="file-upload"
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
        <ListItemButtonStyled color="primary" aria-label="upload picture"  >
          <PhotoCamera />
        </ListItemButtonStyled>
      </label>
      <span>{fileName}</span>
    </Box>
  );
}
