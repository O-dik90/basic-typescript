import {
  ReactNode,
  // useCallback,
  useContext,
  useMemo,
  useEffect,
  useRef,
  useState,
} from "react";
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
import useFetch from "./useFetch";

interface MyAppProps {
  title?: string;
  children?:ReactNode;
  
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

  // usememo
  function squareNum(numb: number) {
    console.log("Squaring will be done!");
    return Math.pow(numb, 2);
  }
  const [numb, setNumb] = useState(0);
  // tanpa usememo
  // const square = squareNum(numb);
  // dengan usememo
  const square = useMemo(() => {
    return squareNum(numb);
  }, [numb]);
  //set counter
  const [counter, setCounter] = useState(0);
  // Change the state to the input
  const onChangeHandler = (e: any) => {
    setNumb(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  };

  //custom Hooks
  //create custom hooks from other
  //masalahnya adalah:
  // akan terpanggil ketikaa rendering-ulang
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/")

  return (
    <>
    {console.log(data)}
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
      <Row className="justify-content-center my-3">
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

      <Row className="justify-content-center">
        <Col xs={4}>
          <InputGroup className="my-3">
            <Form.Control
              placeholder="Entry"
              type="number"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={numb}
              onChange={onChangeHandler}
            />
            <Button onClick={counterHander}>Counter ++</Button>
          </InputGroup>
        </Col>
        <p>Output: {square}</p>
        <p>Counter: {counter}</p>
      </Row>
    </>
  );
}
