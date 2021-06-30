import React from 'react';
import {
  Container,
  Typography,
  Box,
  Link
} from '@material-ui/core';
import ColorTextField from './ColorTextField';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Hello, World!
        </Typography>
        <ColorTextField label="ベースカラー"/>
        <input type="color"></input>
        <Copyright />
      </Box>
    </Container>
  );
}