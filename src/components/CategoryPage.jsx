import { Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Story from "./Story";

const CategoryPage = () => {
  const { id, name } = useSelector(
    (state) => state.openedCategoryInfo.openedCategory
  );

  const newsData = useSelector((state) => state.newsInfo.news);
  const newsForCurrentCategory = Object.values(newsData).filter((story) =>
    story.categories.includes(id)
  );

  return (
    <Container className="m-5 px-5">
      <h1>{name}</h1>
      <ListGroup variant="flush" className="justify-content-between my-5">
        {newsForCurrentCategory.map((story) => (
          <Story storyData={story} key={story.id} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default CategoryPage;
