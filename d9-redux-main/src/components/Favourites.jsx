import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";

const Favourites = () => {
  const list = useSelector((state) => state.list.content); // Ottieni la lista dei preferiti
  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {list.map((job) => (
            <li key={job._id} className="my-4 d-flex align-items-center">
              <Button
                variant="danger"
                className="me-3"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: job._id,
                  });
                }}
              >
                Rimuovi
              </Button>
              <Job data={job} />
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favourites;
