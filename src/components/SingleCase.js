import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { apiUrl } from "../config.json";
const SingleCase = ({ value }) => {
  console.log("values", value);
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`${apiUrl}/api/v1/cases/${value.id}`}>
        <Card.Title as="div">
          <strong>Value{value.Value}</strong>
        </Card.Title>
      </Link>
      <Card.Body>
        <Link to={`${apiUrl}/api/v1/cases/${value.id}`}>
          <Card.Title as="div">
            <strong>Region:{value.region}</strong>
          </Card.Title>
          <Card.Title as="div">
            <strong>Country:{value.country}</strong>
          </Card.Title>
        </Link>
      </Card.Body>

      {/* <Card.Text as="h3">Country:{value.country}</Card.Text> */}
    </Card>
  );
};
export default SingleCase;
