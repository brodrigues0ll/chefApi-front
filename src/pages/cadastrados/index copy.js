import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { fontSize } from "@mui/system";


function Index() {

  const [lanches, setLanches] = useState([]);
  const [clicks, setClicks] = useState(0);


  const handleDelete = (lanche) => {
    axios.delete(`https://chef-api.vercel.app/lanches/${lanche._id}`)
      .then((response) => {
        console.log(response);

      });

  };

  useEffect(() => {
    const url = "https://chef-api.vercel.app/lanches";
    axios.get(url).then((response) => {
      setLanches(response.data);
      console.log(lanches);
    });
  }, []);

  return (
    <>
      <Navbar />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: "1rem",

            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "1rem",
              lg: "1rem",
              xl: "1rem",
            }
          }}
        >
          Produtos Cadastrados
        </Typography>

        <Box>
          {
            lanches.map((lanche) => {
              return (
                <Box
                  key={lanche.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "1rem",
                    border: "1px solid #000",
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Typography sx={{ marginBottom: "1rem" }} variant="h4">
                    {lanche.name}
                  </Typography>
                  <Typography sx={{ marginBottom: "1rem" }} variant="h5">
                    {lanche.price}
                  </Typography>
                  <Typography sx={{ marginBottom: "1rem" }} variant="h5">
                    {lanche.description}
                  </Typography>

                  <Button
                    variant="contained"

                    onDoubleClick={() => {
                      handleDelete(lanche);
                    }}

                  >
                    Delete
                  </Button>


                </Box>
              );
            })
          }
        </Box>

      </Box>

    </>
  );
};

export default Index;
