import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Container fluid>
        <Row>
            <h1>Documentation</h1>
        </Row>
        <Row>
        <Stack direction="horizontal" gap={3}>
            <div className="bg-light border"><Link to="/">Home</Link></div>
            <div className="bg-light border"> <Link to="/about">About</Link></div>
        </Stack>
        </Row>
      </Container>
    );
  }

