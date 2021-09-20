import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleCase = ({ value }) => {
  console.log("values", value);
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/p/${value.id}`}>
        <Card.Title as="div">
          <strong>Value{value.Value}</strong>
        </Card.Title>
      </Link>
      <Card.Body>
        <Link to={`/case/${value.name}`}>
          <Card.Title as="div">
            <strong>Region:{value.region}</strong>
          </Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as="h3">Country{value.country}</Card.Text>
    </Card>
  );
};
export default SingleCase;
