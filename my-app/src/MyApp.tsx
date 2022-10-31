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
import MyTable, { ColumnInfo } from "./MyTable";
import MyTodo from "./MyTodo";
import useFetch from "./useFetch";

interface MyAppProps {
  title?: string;
  children?: ReactNode;
  input?: any;
}

export function MyApp({ title, input }: MyAppProps) {
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
  const Input = useRef(input || null);
  const handleButton = () => {
    console.log(Input.current.value);
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
  const [data] = useFetch(
    "https://jsonplaceholder.typicode.com/todos?userId=9"
  );

  const columns = useMemo<ColumnInfo<any>[]>(() => [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Director",
      selector: (row) => row.director,
    },
    {
      name: "Years",
      selector: (row) => row.year,
    },
    {
      name: "Genre",
      selector: (row) => row.genres,
    },
  ], []);
  return (
    <>
      {/* {console.log(data)} */}
      <Container>
        <p>{title}</p>
        <Row className="justify-content-center my-3">
          <Col>
            <p>useState</p>
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
            <p>useRef</p>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Entry"
                    aria-describedby="basic-addon1"
                    id="input"
                    ref={Input}
                  />
                  <Button onClick={handleButton}>Input</Button>
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col>
            <p>useContext</p>
            <Card
              style={{
                width: "100%",
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
          <Col>
            <p>useMemo</p>
            <Col>
              <InputGroup className="my-1">
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
          </Col>
        </Row>
        <Col>
          <MyTable columns={columns} />
        </Col>
      </Container>
      <MyTodo data={data}></MyTodo>
    </>
  );
}
