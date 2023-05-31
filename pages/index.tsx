import AboutUs from "@/components/home/AboutUs";
import BannerHome from "@/components/home/BannerHome";
import ListHouse from "@/components/home/ListHouse";
import NeighborhoodPage from "@/components/home/Neighborhood";
import { Button, Container, Grid, Row, Text } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
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
        <ListHouse />
        <NeighborhoodPage />
        <AboutUs />
        <OtherProyect />
        <ContactUs />
      </Container>
    </Layout>
  );
}
