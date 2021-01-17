import { Card, Col, Container, Row } from 'react-bootstrap';
// import styles from '../styles/Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <Container fluid>
      <Row>
        <Col className="utils-padding-none">
          <Card>
            <Card.Img src="couple_north_see.jpg" />
            <Card.ImgOverlay>
              <Card.Title>We are getting married!</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
