import * as React from 'react';
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled, Typography } from '@mui/joy';
import { CloudUploadOutlined } from '@mui/icons-material';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function InputFileUpload() {
  return (
    <Button
      component="label"
      role={undefined}
      tabIndex={-1}
      variant="outlined"
      color="neutral"
      sx={(theme) => ({ 
        width: '49%', 
        height: '100%', 
        borderStyle: 'dashed', 
        display: 'flex', 
        flexDirection: 'column', 
        textAlign: 'center', 
        gap: '0.5rem',
        borderRadius: '10px',
        [theme.getColorSchemeSelector('dark')]: {
            background: '#0B0D0E',
            ":hover":{
                background: '#131618'
            }
        },
        
    
    })}
      startDecorator={
        <CloudUploadOutlined sx={{fontSize: '2rem'}}/>
      }
    >
      Upload a Skin Photo for Instant Analysis
      <Typography sx={{fontSize: '.9rem', fontWeight: '300', opacity: '0.7'}}>Upload a photo to detect skin conditions and get personalized skincare advice</Typography>
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}