import { ListGroup } from "react-bootstrap";
import { decode } from "html-entities";
import parse from "html-react-parser";
import { Link, useNavigate } from "react-router-dom";

const Story = ({ id, title, date, image }) => {
  console.log(id);
  const navigate = useNavigate();
  const visitStory = () => {
    console.log(id);
    navigate(`/${id}`);
  };
  return (
    <ListGroup.Item>
      <button className="py-3 list-item" onClick={visitStory}>
        {image && (
          <div className="img-container mb-3">
            <img className="img" src={image}></img>
          </div>
        )}
        <h4>{decode(title)}</h4>
        <small className="text-muted">{date}</small>
      </button>
    </ListGroup.Item>
  );
};

export default Story;
