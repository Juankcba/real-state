import BannerHome from "@/components/home/BannerHome";
import ListHouse from "@/components/home/ListHouse";
import NeighborhoodPage from "@/components/home/Neighborhood";
import { Button, Container, Grid, Row, Text } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/Layouts/Layout";
import { FilterIcons } from "../components/ui/icons/FilterIcons";

export default function Home() {
  return (
    <>
      <Layout title="Home - RealState">
        <Container
          css={{
            w: "100%",
            maxWidth: "1440px",
            p: 0,
            m: "0 auto",
          }}
        >
          <BannerHome />
          <ListHouse />
          <NeighborhoodPage />
        </Container>
      </Layout>
    </>
  );
}
