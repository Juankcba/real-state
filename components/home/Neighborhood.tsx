import React, { useState } from "react";
import { Container, Grid, Row, Text } from "@nextui-org/react";
import dynamic from "next/dynamic";

const NeighborhoodPage = () => {
  const MapWithNoSSR = dynamic(() => import("../ui/Map.jsx"), {
    ssr: false,
  });
  const [marcadores, setMarcadores] = useState([]);
  return (
    <Grid.Container css={{ m: "64px auto", maxWidth: "1170px" }}>
      <Grid
        xs={12}
        sm={8}
        css={{
          w: "100%",
        }}
      >
        <Row css={{ flexDirection: "column" }}>
          <Text h2 css={{ color: "#FF9505", mb: "0" }}>
            Vecindario
          </Text>
          <Text css={{ color: "rgba(255, 255, 255, 0.5)" }}>
            Propiedad de ensueño en Puerto Rico, USA
          </Text>
        </Row>
      </Grid>
      <Grid xs={12}>
        <Container
          id="map"
          css={{ w: "100%", height: "556px", m: "24px auto", p: 0 }}
        >
          <MapWithNoSSR markers={marcadores} zoom={false} />
        </Container>
      </Grid>
    </Grid.Container>
  );
};

export default NeighborhoodPage;
