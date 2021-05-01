import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"
import dotaV2 from "../videos/dotav2.mp4"
import dotaAd from "../audio/airport-bell.mp3"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <Row>
        <Col lg={6}> <p><strong>Denpasar Open Data</strong></p>
        <video className="embed-responsive embed-responsive-16by9" controls>
          <source className="embed-responsive-item" src={dotaV2} type="video/mp4" />
        </video>
        </Col>
        <Col lg={6}><p><strong>Youtube Embeded</strong></p>
          <div className="embed-responsive embed-responsive-16by9" controls>
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/CmfC7OQSvEU"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}> <p><strong>Denpasar Open Data</strong></p>
          <video className="embed-responsive embed-responsive-16by9" controls>
            <source className="embed-responsive-item" src={dotaV2} type="video/mp4" />
          </video>
        </Col>
        <Col lg={6}><p><strong>Youtube Embeded</strong></p>
          <audio className="embed-responsive embed-responsive-16by9" controls>
            <source className="embed-responsive-item" src={dotaAd} type="audio/mp3" />
          </audio>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
