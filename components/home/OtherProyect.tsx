import React from "react";
import { Container, Text } from "@nextui-org/react";
import { SwipperCards } from "../ui/SwipperCards";

const OtherProyect = () => {
  return (
    <Container css={{ m: "32px auto" }}>
      <Text h2 css={{ textAlign: "center" }}>
        Other Projects
      </Text>
      <Text css={{ textAlign: "center" }}>
        Other projects by us in different locations
      </Text>
      <SwipperCards />
    </Container>
  );
};

export default OtherProyect;
