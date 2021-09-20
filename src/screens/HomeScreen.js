import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import SingleCase from "../components/SingleCase";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listCases } from "../redux/actions/casesAction";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const casesList = useSelector((state) => state.casesList);
  const { loading, error, cases } = casesList;
  useEffect(() => {
    dispatch(listCases());
  }, [dispatch]);

  return (
    <>
      <h1>
        {cases.length > 0 ? (
          <h3>Latest Cases {cases.length} </h3>
        ) : (
          "No cases found"
        )}
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {cases.map((value) => (
            <Col key={value._id} sm={12} md={6} lg={4} xl={3}>
              <SingleCase value={value} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
