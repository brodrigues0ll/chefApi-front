import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import { FormControl, Input, Button, Typography, FormLabel } from "@mui/material";
import axios from "axios";

const Index = () => {

  const [lanche, setLanche] = useState({
    number: 0,
    name: "",
    price: 0,
    description: "",
  });

  const [response, setResponse] = useState({});


  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

        }}
      >
        <Typography
          sx={{
            margin: "3rem 0",


            fontSize: {
              xs: "2rem",
              sm: "2rem",
              md: "2rem",
              lg: "3rem",
              xl: "5rem",

            }
          }}
          variant="h3"
        >
          Cadastro de Produtos
        </Typography>

        <FormControl
          sx={{
            gap: 1,
            width: {
              xs: "60%",
              sm: "60%",
              md: "50%",
              lg: "40%",
              xl: "30%",
            },
            fontSize: "1.5rem"
          }}
        >
          <FormLabel sx={{ color: 'black' }} for="numero">Número:</FormLabel>
          <Input
            style={{
              fontSize: "1.3rem"
            }}
            autoComplete="off"
            type="number"
            id="numero"
            name="numero"
            onChange={(e) => {
              setLanche({ ...lanche, number: parseInt(e.target.value) });
            }}
          />

          <FormLabel sx={{ color: 'black' }} for="nome">Nome:</FormLabel>
          <Input autoComplete="off" onChange={(e) => {
            setLanche({ ...lanche, name: e.target.value });
          }} type="text" id="nome" name="nome" />

          <FormLabel sx={{ color: 'black' }} for="preco">Preço:</FormLabel>
          <Input autoComplete="off" onChange={(e) => {
            setLanche({ ...lanche, price: parseFloat(e.target.value) });
          }} style={{ fontSize: "1.3rem" }} type="number" id="preco" name="preco" step="0.01" />

          <FormLabel sx={{ color: 'black' }} for="descricao">Descrição:</FormLabel>
          <textarea autoComplete="off" onChange={(e) => {
            setLanche({ ...lanche, description: (e.target.value) });
          }} style={{ fontSize: "1.3rem", padding: '10px' }} id="descricao" name="descricao" rows="10"></textarea>

          {/* <FormLabel for="imagem">Imagem:</FormLabel>
        <Input type="file" id="imagem" name="imagem" /> */}

          <Button
            sx={{

              marginTop: "1rem",

              border: "2px solid #000",
              color: "#000",
              fontSize: "1.5rem",
              bgcolor: "#999999",

              "&:hover": {
                bgcolor: "#808080",
              },

              boxShadow: 5,

            }}

            onClick={() => {

              axios.post("https://chef-api.vercel.app/lanches", lanche)
                .then((response) => {
                  setResponse(response.data);
                });


            }}
          >
            Enviar requisição
          </Button>

        </FormControl>

      </Box>
    </>
  );
};

export default Index;
