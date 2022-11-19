import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StoryPage = () => {
  const navigate = useNavigate();
  const goBackHandler = () => navigate("/");

  return (
    <>
      <h1>PAGE</h1>
      <Button onClick={goBackHandler}>GO BACK</Button>
    </>
  );
};

export default StoryPage;
