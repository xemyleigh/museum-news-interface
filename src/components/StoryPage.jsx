import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { fetchCategories } from "../fetchApi";
import { useEffect } from "react";

const StoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categoriesInfo.categories);
  const {
    openedStory: { title, date, categories, content },
  } = useSelector((state) => state.openedStoryInfo);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  let categoriesForCurrentStory = categories.map((id) => allCategories[id]);

  return (
    <Container className="m-5 px-5">
      <div className="text-muted">{date}</div>

      <div className="d-flex gap-3 text-white my-3">
        {categoriesForCurrentStory &&
          categoriesForCurrentStory.map(({ name, id }) => (
            <div className="rounded bg-secondary px-3 py-1 d-inline" key={id}>
              {name}
            </div>
          ))}
      </div>

      <h1>{title}</h1>
      <div className="d-flex gap-3 my-4">
        <Button onClick={() => navigate(-1)}>Обратно</Button>
        <Button onClick={() => navigate("/")}>На главную</Button>
      </div>

      <div>{content && parse(content)}</div>
    </Container>
  );
};

export default StoryPage;
