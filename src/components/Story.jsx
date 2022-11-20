import { ListGroup } from "react-bootstrap";
import { decode } from "html-entities";
import { useNavigate } from "react-router-dom";
import { actions as openedStoryActions } from "../slices/openedStorySlice";
import { useDispatch } from "react-redux";

const Story = ({ storyData }) => {
  const { id, title, date, image } = storyData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const visitStory = () => {
    navigate(`/${id}`);
    dispatch(openedStoryActions.setOpenedStory(storyData));
  };
  return (
    <ListGroup.Item>
      <button className="py-3 list-item" onClick={visitStory}>
        {image && (
          <div className="img-container mb-3">
            <img className="img" src={image} alt=""></img>
          </div>
        )}
        <h4>{decode(title)}</h4>
        <small className="text-muted">{date}</small>
      </button>
    </ListGroup.Item>
  );
};

export default Story;
