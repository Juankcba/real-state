import { Container, Image, Row, Text } from "@nextui-org/react";
import React from "react";

const BannerHome = () => {
  return (
    <Container
      css={{
        maxWidth: "100%",
        backgroundImage: "url(/assets/img/banner.png)",
        backgroundSize: "cover",
        h: "775px",
        width: "100%",
      }}
    >
      <Row
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          h: "100%",
          w: "100%",
        }}
      >
        <Text h1 size={"$5xl"} className="banner-home-title">
          Encuentra tu {""}
          <span className="banner-home-span">Propiedad de ensueño</span>
        </Text>
        <Text h1 size={"$5xl"} className="banner-home-title">
          en Puerto Rico
        </Text>
      </Row>
    </Container>
  );
};

export default BannerHome;
