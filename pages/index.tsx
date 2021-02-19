import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <Container fluid>
      <Row>
        <Col className="utils-padding-none">
          <div className={styles['home-opening-image-container']}>
            <Image
              src="/couple_north_see.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              objectPosition="center right"
              quality={95}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
