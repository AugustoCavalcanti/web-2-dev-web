import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";


function ExcluirReceita(id) {
    const navigate = useNavigate();
    fetch(`http://localhost:1337/api/receitas/${id}`, {
        method: 'DELETE',
    })
    .then((response) => response.json())
      .then((json) => {
        navigate("/");
      });
}

export default function Detalhes() {
  const { id } = useParams();
  const [receita, setReceita] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:1337/api/receitas/${id}`)
      .then((res) => res.json())
      .then((data) => setReceita(data.data));
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Card sx={{ minWidth: 350 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {receita.attributes.Titulo}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Ingredientes
            </Typography>
            <Typography variant="body" color="text.secondary">
              {receita.attributes.Ingredientes}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Modo de Preparo
            </Typography>
            <Typography variant="body" color="text.secondary">
              {receita.attributes.ModoDePreparo}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={`/receita-editar/${receita.id}`}>Editar</Button>
            <Button size="small" onClick={ExcluirReceita(receita.id)}>Excluir</Button>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
}
