import { Card, Col } from "react-bootstrap";
import { Article } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
interface newProps {
  article: Article;
}
const SingleArticle = ({ article }: newProps) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate("/details/" + article.id)}>
      <Card.Img variant="top" src={article.image_url} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title className="text-truncate">{article.title}</Card.Title>
        <Card.Text className="text-truncate">{article.summary} </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SingleArticle;
