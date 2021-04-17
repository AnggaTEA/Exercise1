import React from "react";
import { Col, Card } from "react-bootstrap";

const Produks = ({ produk }) => {
  return (
    <Col xs={6} md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={produk.image} />
        <Card.Body>
          <Card.Title>
            {produk.id}. {produk.title}
          </Card.Title>
          <Card.Text>{produk.description}</Card.Text>
          <Card.Text>$. {produk.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Produks;
