import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color='inherit' href='/'>
            Receitas
          </Button>
          <Button color="inherit" href='/adicionar-receita/'>Adicionar Receita</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}