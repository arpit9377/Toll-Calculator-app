// LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";



// Styles for the card images
const cardImageStyle = {
  width: "100%",
  height: "500px", // Adjust the height as needed
  objectFit: "cover",
};

const LandingPage = () => {
  return (
    <>

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          className="video-background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: -1,
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={process.env.PUBLIC_URL + "/video-thumbnail.jpg"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            {/* Update the src attribute with your video file */}
            <source
              src={process.env.PUBLIC_URL + "/Assets/bg.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Text Content */}
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 1,
            color: "#B6BBC4",
            padding: "15% 5%",
          }}
        >
          <h1>Welcome to Toll Calculator</h1>
          <p style={{ marginBottom: "40px", marginTop: "20px", fontSize: "20px" }}>
            Looking to calculate toll costs between cities? Use the Toll Calculator App! <br />
            See trip cost breakdown - tolls, fuel, and other applicable charges, toll plazas, discounts, etc.<br />
            Travel on the cheapest or the fastest routes to your destination.
          </p>
          <Link to="/TollDetails">
            <Button variant="primary" style={{ backgroundColor: "#31304D", border: "none" }}>Calculate Now!</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" style={{ backgroundColor: "#161A30", padding: "20px 0" }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#B6BBC4" }}>Features</h2>
          <Row>
            {/* Feature Card 1 */}
            <Col md={6} lg={4} xl={4}>
              <Link to="/TollDetails" className="text-decoration-none">
                <Card className="feature-card" style={{ cursor: "pointer", marginBottom: "20px" }}>
                  <Image src="/Assets/card-1.jpg" alt="Card 1" style={cardImageStyle} />
                  <Card.Body>
                    <Card.Title style={{ color: "#B6BBC4" }}>Toll Calculation</Card.Title>
                    <Card.Text style={{ color: "#B6BBC4" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            {/* Feature Card 2 */}
            <Col md={6} lg={4} xl={4}>
              <Link to="/RouteVisu" className="text-decoration-none">
                <Card className="feature-card" style={{ cursor: "pointer", marginBottom: "20px" }}>
                  <Image src="/Assets/card-2.jpg" alt="Card 2" style={cardImageStyle} />
                  <Card.Body>
                    <Card.Title style={{ color: "#B6BBC4" }}>Route Visualization</Card.Title>
                    <Card.Text style={{ color: "#B6BBC4" }}>
                      Route Visualization kasndfamsp;fmponfak sclCLSNvikasd
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            {/* Feature Card 3 */}
            <Col md={6} lg={4} xl={4}>
              <Link to="/UserEdu" className="text-decoration-none">
                <Card className="feature-card" style={{ cursor: "pointer", marginBottom: "20px" }}>
                  <Image src="/Assets/card-3.jpg" alt="Card 4" style={cardImageStyle} />
                  <Card.Body>
                    <Card.Title style={{ color: "#B6BBC4" }}>How it Works</Card.Title>
                    <Card.Text style={{ color: "#B6BBC4" }}>
                      Workkkkkkk !!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section" style={{ backgroundColor: "#31304D", padding: "10px " }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#B6BBC4" }}>About Us</h2>
          <Row>
            <Col>
              <p style={{ color: "#B6BBC4" }}>
              Looking to calculate toll costs between cities across Jamaica? Use the Jamaica Toll Calculator App! See trip cost breakdown
               - tolls, fuel and other applicable charges, toll plazas, discounts, etc. Travel on the cheapest or the fastest routes to your 
               destination. For all vehicles - car, truck (2 axle to 9 axle), EV, RV, bus, motorcycle - across all Latin American and North 
               American countries. Business? Integrate Toll API for pre-trip, on-trip and post-trip toll and route information.
             Still not convinced? Just enter your origin, destination, and Submit to see tolls in seconds. 
             Fill the optional fields - mileage, toll tags etc. - to get more accurate results.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  );
};

export default LandingPage;
