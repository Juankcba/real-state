import { Container, Image, Row, Text } from "@nextui-org/react";
import React from "react";

const BannerHome = () => {
  return (
    <Container
      css={{
        maxWidth: "100%",
        m: 0,
        p: 0,
        position: "relative",
        top: 0,
        left: 0,
      }}
    >
      <Image
        src="/assets/img/banner.png"
        alt="Banner-Home"
        width={"100%"}
        height={776}
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Row
        css={{
          position: "absolute",
          top: "299px",
          left: "135px",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text h1>
          Find Your <span className="banner-home-span">Dream Home</span>
        </Text>
        <Text h1> in Puerto Rico </Text>
      </Row>
    </Container>
  );
};

export default BannerHome;
