import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ListIndicator = () => {
  const navigate = useNavigate()
  const content = useSelector((state) => {
    return state.list.content
  })

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/favourites')}
        className="d-flex align-items-center"
      >
        <h3>Lista preferiti</h3>
        <span className="ms-2">{content.length}</span>
      </Button>
    </div>
  )
}

export default ListIndicator