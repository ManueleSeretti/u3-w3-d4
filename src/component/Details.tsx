import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article, SingleNew } from "../interfaces/interfaces";
import { Card, Col, Container, Row } from "react-bootstrap";

const Details = () => {
  const params = useParams();
  const URL = "https://api.spaceflightnewsapi.net/v4/articles/";
  const [singleNew, setSingleNew] = useState<SingleNew>();

  const fetchSingleArticle = async () => {
    try {
      const resp = await fetch(URL + params.id);
      const data = await resp.json();
      setSingleNew(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleArticle();
  }, []);

  return (
    <Container>
      {singleNew && (
        <Row className="justify-content-center">
          <Col xs={6}>
            <Card>
              <Card.Img variant="top" src={singleNew?.image_url} />
              <Card.Body>
                <Card.Title>{singleNew.title}</Card.Title>
                <Card.Text>{singleNew.summary} </Card.Text>
                {/* <Card.Text> {singleNew.published_at}</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default Details;
