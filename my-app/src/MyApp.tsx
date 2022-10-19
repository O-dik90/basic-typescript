import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { UserContext } from ".";

interface MyAppProps {
  title?: string;
  children?: ReactNode;
}

export function MyApp({ title }: MyAppProps) {
  //useState
  const [state, setState] = useState("Code");
  const handleClick = () => {
    setState("React Typescript");
  };
  //useEffect
  useEffect(() => {
    console.log("useEffect run");
    console.log(state);
  }, [state]);
  // comsum useContect from Provider
  const res = useContext(UserContext);
  // console.log(res);

  // useRef
  // belum full understanding, maksud dari mereferensikannya
  const Input = useRef(null);

  const Click = () => {
    console.log(Input);
    console.log(Input.current);
  };
  return (
    <>
      <p className="fs-4">{title}</p>
      <p>{state}</p>
      <ButtonGroup>
        <Button className="btn" variant="primary" onClick={handleClick}>
          State
        </Button>
        <Button
          className="btn"
          variant="primary"
          onClick={() => setState("Code")}
        >
          Diff State
        </Button>
      </ButtonGroup>
      <Row className="justify-content-center mt-3">
        <Col sm={5}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Entry"
              aria-label="Username"
              aria-describedby="basic-addon1"
              ref={Input}
            />
            <Button onClick={Click}>Focus the input</Button>
          </InputGroup>
        </Col>
      </Row>
      <Container className="mt-3">
        <Row>
          <Col>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "#282c34",
                color: "white",
              }}
            >
              <Card.Body>
                <p>{res?.title}</p>
                <p>{res?.id}</p>
                <p>{res?.description}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
