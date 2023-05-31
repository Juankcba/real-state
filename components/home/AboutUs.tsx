import React from "react";
import { Col, Grid, Row, Text, Button, Link } from "@nextui-org/react";

const AboutUs = () => {
  return (
    <Grid.Container css={{ h: "726px", bg: "red", p: "10%" }}>
      <Grid xs={12} sm={9}>
        <Row
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            w: "654px",
          }}
        >
          <Text h2 css={{ mb: "16px" }}>
            About Us
          </Text>
          <Text h3 css={{ mb: "16px" }}>
            Dream Home is a gated community with a great location. Located
            downtown, you’re within walking distance of Parks, and the best
            shopping, dining and entertainment Getting around is a breeze, with
            easy access to freeways, buses and trolleys. . Laundry is available
            on premises.
          </Text>
          <Button as={Link} color="warning" auto href="/about-us">
            Read More
          </Button>
        </Row>
      </Grid>
      <Grid xs={12} sm={3}>
        <Row
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col>
            <Text h2 css={{ textAlign: "center" }}>
              500+
            </Text>
            <Text h3 css={{ textAlign: "center" }}>
              Projects
            </Text>
            <Text h4 css={{ textAlign: "center" }}>
              Over 500 lexury villas for“Home Away From Home” experience
            </Text>
          </Col>

          <Col>
            <Text h2 css={{ textAlign: "center" }}>
              40+
            </Text>
            <Text h3 css={{ textAlign: "center" }}>
              Locations
            </Text>
            <Text h4 css={{ textAlign: "center" }}>
              luxury villas and private holiday homes, from all across
            </Text>
          </Col>

          <Col>
            <Text h2 css={{ textAlign: "center" }}>
              24/7
            </Text>
            <Text h3 css={{ textAlign: "center" }}>
              Help
            </Text>
            <Text h4 css={{ textAlign: "center" }}>
              24/7 Help service for all customers to guide and support
            </Text>
          </Col>
        </Row>
      </Grid>
    </Grid.Container>
  );
};

export default AboutUs;
