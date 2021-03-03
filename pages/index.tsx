import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <div>
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
                quality={100}
              />
              <p>#FR01 - Photo 1</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="utils-wip blue" style={{ height: '5vh' }}>
            #FR02 - Navigation
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="utils-wip bisque">
            <p>#FR03 - Basic info</p>
          </Col>
          <Col xs={12} lg={6} className="utils-wip grey">
            <p>#FR03 - Photo 2</p>
          </Col>
        </Row>
        <Row>
          <Col className="utils-wip blue">Accomodation info + foto</Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="utils-wip grey">
            <p>#FR04 - Parking info</p>
          </Col>
          <Col xs={12} lg={6} className="utils-wip bisque">
            <p>#FR04 - Photo 3</p>
          </Col>
        </Row>
        <Row>
          <Col className="utils-wip blue">#FR05 - detailed information</Col>
        </Row>
        <Row>
          <Col className="utils-wip bisque">#FR06 - Organization team - avatars with names</Col>
        </Row>
        <Row>
          <Col className="utils-wip grey">#FR07 - Gifts (QR code)</Col>
        </Row>
      </Container>
    </div>
  );
}
