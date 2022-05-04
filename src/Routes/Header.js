import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <Container fluid>
      <NavBar />
    </Container>
  );
}
