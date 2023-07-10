import AboutUs from "@/components/home/AboutUs";
import BannerHome from "@/components/home/BannerHome";
import ListHouse from "@/components/home/ListHouse";
import NeighborhoodPage from "@/components/home/Neighborhood";
import { Button, Container, Grid, Row, Text, Image } from "@nextui-org/react";
import Head from "next/head";

import { Layout } from "../components/Layouts/Layout";
import { FilterIcons } from "../components/ui/icons/FilterIcons";
import OtherProyect from "../components/home/OtherProyect";
import ContactUs from "@/components/home/ContactUs";

export default function Home() {
  return (
    <Layout title="Home - GMAC INVESTMENT">
      <Container
        css={{
          w: "100%",
          maxWidth: "100%",
          p: 0,
          m: "0 auto",
        }}
      >
        <BannerHome />
        <Text h1 css={{ w: "100%", textAlign: "center", m: "48px auto" }}>
          Hogares que edifican, comunidades que prosperan
        </Text>
        {/* <ListHouse /> */}
        {/* <NeighborhoodPage /> */}
        <AboutUs />
        <Text h2 css={{ w: "100%", textAlign: "center", m: "48px auto" }}>
          Nuestros principos y valores
        </Text>
        <Container>
          <ul>
            <li>
              <Text>
                <strong>D</strong>isponibilidad- Acceso a los servicios (24/7)
              </Text>
            </li>
            <li>
              <Text>
                <strong>E</strong>quidad- Tratamos a cada propietario,
                inquilino, cliente o suplidor con la misma deferencia
              </Text>
            </li>
            <li>
              <Text>
                <strong>C</strong>ompromiso- Genuino interés de que todas las
                partes en una transacción salgan Ganando (Win-Win Commitment){" "}
              </Text>
            </li>
            <li>
              <Text>
                <strong>I</strong>
                ntegridad- Cumplimos todas las leyes o regulaciones aplicables y
                nos aseguramos que cada transacción sea transparente, legal,
                moral y éticamente correcta
              </Text>
            </li>
            <li>
              <Text>
                <strong>D</strong>
                isciplina- Hacemos valer lo que es correcto de hacer, aun cuando
                nadie nos mira
              </Text>
            </li>
            <li>
              <Text>
                <strong>E</strong>
                xcelencia- Nuestra pasión es servir y apoyar residentes y
                comunidades, así que constantemente estamos en la búsqueda de
                una mejor forma de crear Comunidades de Excelencia
              </Text>
            </li>
          </ul>
        </Container>
        <OtherProyect />
        <ContactUs />
      </Container>
    </Layout>
  );
}
