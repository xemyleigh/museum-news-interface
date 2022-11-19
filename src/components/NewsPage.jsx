import { fetchNews, fetchCategories, fetchMedia } from "../fetchApi";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Col,
  ListGroup,
  Button,
} from "react-bootstrap";
import { useEffect } from "react";
import Story from "./Story";

function NewsPage() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.newsInfo.news);
  const newsIds = useSelector((state) => state.newsInfo.ids);
  const news = newsIds.map((id) => newsData[id]);
  const newsFirstPart = news.slice(0, 10);
  const newsSecondPart = news.slice(10);

  const categoriesData = useSelector(
    (state) => state.categoriesInfo.categories
  );
  const categoriesIds = useSelector((state) => state.categoriesInfo.ids);
  const categories = categoriesIds.map((id) => categoriesData[id]);

  useEffect(() => {
    dispatch(fetchNews(20));
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg" className="p-3">
        <Container className="gap-5">
          <Navbar.Brand href="#home">Новости музея</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Главная</Nav.Link>
              <NavDropdown
                title="Категории"
                id="basic-nav-dropdown"
                className="m-0 p-0"
              >
                {categories.map(({ id, name }, index) => (
                  <div key={id}>
                    <NavDropdown.Item href="#action/3.1">
                      {name}
                    </NavDropdown.Item>
                    {index !== categories.length - 1 && <NavDropdown.Divider />}
                  </div>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-5">
        <Row>
          <Col className="d-flex justify-content-between">
            <ListGroup variant="flush" className="list justify-content-between">
              {newsFirstPart.map(({ id, title, date, image }) => (
                <Story
                  key={id}
                  id={id}
                  title={title}
                  date={date}
                  image={image}
                />
              ))}
            </ListGroup>
            <ListGroup variant="flush" className="list justify-content-between">
              {newsSecondPart.map(({ id, title, date, image }) => (
                <Story
                  key={id}
                  id={id}
                  title={title}
                  date={date}
                  image={image}
                />
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewsPage;
