import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";

interface MyTodoProps {
  data?: any;
}

const MyTodo = ({ data }: MyTodoProps) => {
  return (
    <>
      <p className="fw-bold">MYTODO</p>
      {/* {console.log(data[0])} */}
      <Container>
        <InputGroup className="mb-3 d-flex justify-content-center">
          <Form.Control
            placeholder="Add ToDo"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            id = "activity"
          />
          <Button variant="info text-white" onClick={()=> console.log("activity")}>Add ToDo</Button>
        </InputGroup>
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="col-auto">Activity To-Do List</th>
                  <th className="col-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item: any, index: number) => {
                  return item.completed === false ? (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>
                        <Button variant="primary" size="sm" onClick={()=> console.log(item.completed)}>
                          Done
                        </Button>
                      </td>
                    </tr>
                  ) : null;
                })}
              </tbody>
            </Table>
          </Col>
          <Col>
            <Table bordered hover size="sm">
              <thead>
                <tr>
                  <th className="col-auto">Activity Completed</th>
                  <th className="col-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item: any, index: number) => {
                  return item.completed === true ? (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>
                        <Button variant="danger" size="sm" onClick={()=>console.log(item.completed)}>
                          Finish
                        </Button>
                      </td>
                    </tr>
                  ) : null;
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyTodo;
