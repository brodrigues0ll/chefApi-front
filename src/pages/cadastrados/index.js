import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import placeBurguer from '../../assets/burger-placeholder.jpg';


function Index() {

  const [lanches, setLanches] = useState([]);
  const [clicks, setClicks] = useState(0);


  const handleDelete = (lanche) => {
    axios.delete(`https://chef-api.vercel.app/lanches/${lanche._id}`)
      .then((response) => {
        console.log(response);
        // window.location.reload();

        const url = "https://chef-api.vercel.app/lanches";
        axios.get(url).then((response) => {
          setLanches(response.data);
        });
      });

  };

  useEffect(() => {

    const url = "https://chef-api.vercel.app/lanches";
    axios.get(url).then((response) => {
      setLanches(response.data);
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
          Produtos Cadastrados
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",

          }}
        >
          {
            lanches.map((lanche) => {
              return (
                <Box
                  key={lanche.id}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: "1rem",
                    border: "1px solid #000",
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Image style={{ borderRadius: '100%', margin: "2rem" }} src={placeBurguer} width={200} height={200} />

                  <Box>
                    <Typography sx={{ marginBottom: "1rem" }} variant="h4">
                      {lanche.name}
                    </Typography>
                    <Typography sx={{ marginBottom: "1rem" }} variant="h5">
                      {lanche.price}
                    </Typography>
                    <Typography sx={{ marginBottom: "1rem" }} variant="h5">
                      {lanche.description}
                    </Typography>





                    <Stack>
                      <Button
                        variant="contained"

                        onClick={() => {
                          handleDelete(lanche);
                        }}

                      >
                        Delete
                      </Button>
                    </Stack>

                  </Box>

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
