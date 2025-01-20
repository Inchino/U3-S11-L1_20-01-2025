import { Col, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {
  const list = useSelector((state) => {
    return state.list.content
  })

  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {list.map((job, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: i,
                  })
                }}
              >
              </Button> 
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default List;