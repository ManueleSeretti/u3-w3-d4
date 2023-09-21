import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Article } from "../interfaces/interfaces";
import SingleArticle from "./SingleArticle";

const Home = () => {
  const endPoint = "https://api.spaceflightnewsapi.net/v4/articles";
  const [news, setNews] = useState<Article[]>([]);
  const [load, setLoad] = useState(false);

  const fetchAllArticle = async () => {
    setLoad(true);
    try {
      const resp = await fetch(endPoint);
      if (resp.ok) {
        const data = await resp.json();
        const articoli = data.results;
        setNews(articoli);
        setLoad(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllArticle();
  }, []);

  return (
    <Container fluid className="bg-warning bg-opacity-25 ">
      <h1 className="text-danger">Latest Spaceflight news</h1>
      {load ? (
        <Spinner className="mt-5" animation="border" role="status" variant="success">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row className="gy-3 mt-5">
          {news.map((n) => (
            <Col xs={3} key={`id-${n.id}`}>
              <SingleArticle article={n} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
export default Home;
