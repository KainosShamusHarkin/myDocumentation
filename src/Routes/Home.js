import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <Container>
      <br />
      <Row>
        <Col sm={10}>
          <h2>Home</h2>
        </Col>
        <Col sm={2}>
          <ul>On this page</ul>
          <ul>First Section</ul>
          <ul>Second Section</ul>
        </Col>
      </Row>
    </Container>
  );
}
