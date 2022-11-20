import { fetchNews, fetchCategories } from "../fetchApi";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, ListGroup, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import Story from "./Story";

const NewsPage = () => {
  const dispatch = useDispatch();
  const { news, ids, isLoading } = useSelector((state) => state.newsInfo);
  const newsData = ids.map((id) => news[id]);
  const newsFirstPart = newsData.slice(0, 10);
  const newsSecondPart = newsData.slice(10, 20);
  const newsThirdPart = newsData.slice(20);

  useEffect(() => {
    dispatch(fetchNews([30, [2, 5, 6, 12, 13, 19]]));
    dispatch(fetchCategories());
  }, []);

  const contentWhileLoading = (
    <div className="display-block text-center my-4">
      <Spinner
        as="span"
        animation="border"
        size="lg"
        role="status"
        aria-hidden="true"
        className="me-2 p-3"
        variant="primary"
      />
    </div>
  );

  const contentWhenLoaded = (
    <Container className="my-5">
      <Row>
        <Col className="d-flex justify-content-between gap-4">
          <ListGroup variant="flush" className="list justify-content-between">
            {newsFirstPart.map((story) => (
              <Story storyData={story} key={story.id} />
            ))}
          </ListGroup>
          <ListGroup variant="flush" className="list justify-content-between">
            {newsSecondPart.map((story) => (
              <Story storyData={story} key={story.id} />
            ))}
          </ListGroup>
          <ListGroup variant="flush" className="list justify-content-between">
            {newsThirdPart.map((story) => (
              <Story storyData={story} key={story.id} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );

  return <>{isLoading ? contentWhileLoading : contentWhenLoaded}</>;
};

export default NewsPage;
