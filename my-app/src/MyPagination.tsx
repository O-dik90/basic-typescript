import { useEffect, useState } from "react";
import { Card, Row, Image, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import useFetch from "./useFetch";

export default function MyPagination() {
  const [ newData ] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=9"
  );
  const [CurrentItem, setCurrentItem] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItem(newData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(newData.length / itemsPerPage));
  }, [setCurrentItem, setPageCount, newData, itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % newData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Row>
        <h2>React pagination</h2>
      </Row>
      <Col className="d-flex justify-content-center">
        {CurrentItem?.map((item: any, index: number) => {
          // console.log(item.id);
          return (
            <Col xs="auto" className="mb-1" key={index}>
              <Card className="mx-1">
                <Card.Header>
                  <span>{`${item.title.substring(0, 5)}`}</span>
                </Card.Header>
                <Image src={item.url} alt={item.title} width="100px" />
              </Card>
            </Col>
          );
        })}
      </Col>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName="page-num"
        // renderOnZeroPageCount={null}
      />
    </>
  );
}
