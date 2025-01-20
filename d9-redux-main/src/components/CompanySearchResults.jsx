import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
        </Col>
      </Row>
      {jobs.map((jobData) => (
        <Row key={jobData._id} className="align-items-center my-2">
          <Col>
            <Job data={jobData} />
          </Col>
          <Col xs="3">
            <Button
              variant="success"
              className="d-flex align-items-center"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: jobData,
                });
              }}
            >
              <span className="me-2">AGGIUNGI AI PREFERITI</span>
            </Button>
          </Col>
        </Row>
      ))}
      <Row>
        <Col className="text-end my-5">
          <Button variant="primary" onClick={() => navigate("/")}>
            Torna alla pagina principale
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

