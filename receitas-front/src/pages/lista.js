import { useEffect, useState } from "react";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function Lista() {
  const [receitas, setReceitas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1337/api/receitas")
      .then((res) => res.json())
      .then((data) => setReceitas(data.data));
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography variant="h5" component="div" my={3}>
          Lista de receitas
        </Typography>
        {receitas.map((receita) => {
          return (
            <Card sx={{ minWidth: 275, mb: 1.5 }} key={receita.id}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {receita.attributes.Titulo}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={`/receita/${receita.id}`}>
                  Receita Completa
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </React.Fragment>
  );
}
