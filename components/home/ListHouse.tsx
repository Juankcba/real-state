import React, { useState } from "react";
import { Grid, Image, Text } from "@nextui-org/react";
import { Row } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FilterIcons } from "../ui/icons/FilterIcons";
import HomeCard from "../ui/cards/HomeCard";

const ListHouse = () => {
  const [indexOfProducts, setIndex] = useState(0);
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

  const handleMore = () => {
    let indexData = indexOfProducts + 1;
    setIndex(indexData);
  };
  return (
    <Grid.Container css={{ m: "64px auto", maxWidth: "1170px" }}>
      <Grid
        xs={12}
        sm={8}
        css={{
          w: "100%",
        }}
      >
        <Row css={{ gap: "0.75rem", display: "flex", flexWrap: "wrap" }}>
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
      </Grid>
      <Grid
        xs={12}
        sm={4}
        css={{ m: "24px auto", "@smMin": { m: "0 ", w: "100%" } }}
      >
        <Button
          className="btn-filled-primary"
          css={{ m: "0 auto", "@smMin": { ml: "auto" } }}
        >
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
      <Grid xs={12} css={{ mt: "24px" }}></Grid>
      {houses.slice(0, 4 * (indexOfProducts + 1)).map((house) => (
        <Grid xs={12} sm={6} key={house.id} css={{ p: "8px" }}>
          <HomeCard house={house} />
        </Grid>
      ))}
      {(indexOfProducts + 1) * 4 < houses.length && (
        <Grid xs={12}>
          <Row
            css={{
              margin: "32px auto",
              width: "75px",
              height: "72px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "centers",
              cursor: "pointer",
            }}
            onClick={handleMore}
          >
            <Image
              src={"/assets/icons/arrow-drown.svg"}
              alt="arrow-down"
              objectFit="contain"
            />

            <Text>View More</Text>
          </Row>
        </Grid>
      )}
    </Grid.Container>
  );
};

export default ListHouse;
