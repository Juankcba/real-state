import React from "react";
import { Container, Text } from "@nextui-org/react";
import { SwipperCards } from "../ui/SwipperCards";

const OtherProyect = () => {
  return (
    <Container css={{ m: "32px auto" }}>
      <Text h2 css={{ textAlign: "center" }}>
        Proyectos
      </Text>

      <SwipperCards />
    </Container>
  );
};

export default OtherProyect;
