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
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function EditarReceita() {
  const { id } = useParams();
  const [receita, setReceita] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:1337/api/receitas/${id}`)
      .then((res) => res.json())
      .then((data) => setReceita(data.data));
  }, []);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const json = Object.fromEntries(formData.entries());
    // You can pass formData as a fetch body directly:

    fetch(`http://localhost:1337/api/receitas/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        Titulo: json.Titulo,
        Ingredientes: json.Ingredientes,
        ModoDePreparo: json.ModoDePreparo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        navigate(`/receita/${id}`);
      });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography variant="h5" component="div" my={3}>
          Editar Receita
        </Typography>
        <Card sx={{ minWidth: 350 }}>
          <CardContent>
            <form method="post" id="cadastrar-post" onSubmit={handleSubmit}>
              <TextField
                gutterBottom
                component="div"
                type="text"
                label="titulo"
                variant="outlined"
                value={receita.attributes.Titulo}
              />
              <Typography gutterBottom variant="h6" component="div">
                Ingredientes
              </Typography>
              <TextField
                gutterBottom
                component="div"
                type="text"
                label="ingredientes"
                variant="outlined"
                value={receita.attributes.Ingredientes}
              />
              <Typography gutterBottom variant="h6" component="div">
                Modo de Preparo
              </Typography>
              <TextField
                gutterBottom
                component="div"
                type="text"
                label="ModoDePreparo"
                variant="outlined"
                value={receita.attributes.ModoDePreparo}
              />
            </form>
          </CardContent>
          <CardActions>
            <Button size="small" type="submit">
              Salvar
            </Button>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
}
