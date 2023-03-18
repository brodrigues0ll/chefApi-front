import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <Box
      sx={{
        gap: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "5rem",
        backgroundColor: "#dbdbdb",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >

      <ActiveLink href="/">
        Cadastrar
      </ActiveLink>

      <ActiveLink href="/cadastrados">
        Cadastrados
      </ActiveLink>

    </Box>
  );
};

export default Navbar;
