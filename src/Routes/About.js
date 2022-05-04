import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <Container>
      <br />
      <Row>
        <Col sm={10}>
          <h2>About</h2>
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
