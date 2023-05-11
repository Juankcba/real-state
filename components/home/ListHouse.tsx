import React, { useState } from "react";
import { Grid } from "@nextui-org/react";
import { Row } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FilterIcons } from "../ui/icons/FilterIcons";
import HomeCard from "../ui/cards/HomeCard";

const ListHouse = () => {
  const [houses, setHouses] = useState([
    {
      id: 0,
      name: "",
      images: ["img-1.png"],
      price: 100000,
      details: "",
      metas: [
        {
          name: "Bedrooms",
          value: 1,
          icon: "bedrooms",
          med: "",
        },
        {
          name: "Bath",
          value: 1,
          icon: "bath",
          med: "",
        },
        {
          name: "",
          value: 535,
          med: "sq ft",
          icon: "",
        },
      ],
    },
    {
      id: 1,
      name: "",
      images: ["img-2.png"],
      price: 390000,
      details: "",
      metas: [
        {
          name: "Bedrooms",
          value: 1,
          icon: "bedrooms",
          med: "",
        },
        {
          name: "Bath",
          value: 1,
          icon: "bath",
          med: "",
        },
        {
          name: "",
          value: 535,
          med: "sq ft",
          icon: "",
        },
      ],
    },
    {
      id: 2,
      name: "",
      images: ["img-3.png"],
      price: 143000,
      details: "",
      metas: [
        {
          name: "Bedrooms",
          value: 1,
          icon: "bedrooms",
          med: "",
        },
        {
          name: "Bath",
          value: 1,
          icon: "bath",
          med: "",
        },
        {
          name: "",
          value: 535,
          med: "sq ft",
          icon: "",
        },
      ],
    },
    {
      id: 3,
      name: "",
      images: ["img-4.png"],
      price: 211200,
      details: "",
      metas: [
        {
          name: "Bedrooms",
          value: 1,
          icon: "bedrooms",
          med: "",
        },
        {
          name: "Bath",
          value: 1,
          icon: "bath",
          med: "",
        },
        {
          name: "",
          value: 535,
          med: "sq ft",
          icon: "",
        },
      ],
    },
    {
      id: 4,
      name: "",
      images: ["img-5.png"],
      price: 132000,
      details: "",
      metas: [
        {
          name: "Bedrooms",
          value: 1,
          icon: "bedrooms",
          med: "",
        },
        {
          name: "Bath",
          value: 1,
          icon: "bath",
          med: "",
        },
        {
          name: "",
          value: 535,
          med: "sq ft",
          icon: "",
        },
      ],
    },
    {
      id: 5,
      name: "",
      images: ["img-6.png"],
      price: 190400,
      details: "",
      metas: [
        {
          name: "Bedrooms",
          value: 1,
          icon: "bedrooms",
          med: "",
        },
        {
          name: "Bath",
          value: 1,
          icon: "bath",
          med: "",
        },
        {
          name: "",
          value: 535,
          med: "sq ft",
          icon: "",
        },
      ],
    },
  ]);
  return (
    <Grid.Container css={{ m: "64px auto", maxWidth: "1170px" }}>
      <Grid
        xs={12}
        css={{
          mb: "32px",
          d: "flex",
          flexDirection: "row",
          w: "100%",
          justifyContent: "space-between",
        }}
      >
        <Row css={{ gap: "24px" }}>
          <Button auto flat bordered className="btn-outline-primary">
            All
          </Button>
          <Button auto flat bordered className="btn-outline-secondary">
            Studio
          </Button>
          <Button auto flat bordered className="btn-outline-secondary">
            1 Bed Room
          </Button>
          <Button auto flat bordered className="btn-outline-secondary">
            2 Bed Room
          </Button>
        </Row>

        <Button className="btn-filled-primary">
          Filters
          <FilterIcons
            size={20}
            fill="#1B1B1B"
            filled="#1B1B1B"
            height={20}
            width={20}
          />
        </Button>
      </Grid>
      {houses.map((house) => (
        <Grid xs={12} sm={6} key={house.id} css={{ p: "8px" }}>
          <HomeCard house={house} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default ListHouse;
