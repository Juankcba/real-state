import React from "react";
import {
  Col,
  Grid,
  Row,
  Text,
  Button,
  Link,
  Avatar,
  Image,
} from "@nextui-org/react";

const AboutUs = () => {
  return (
    <Grid.Container
      css={{
        h: "726px",
        bg: "red",
        p: "100px ",
        backgroundImage: 'url("/assets/img/banner-about-us.png")',
        "@mdMax": {
          p: "24px",
        },
      }}
      id="about-us"
    >
      <Grid xs={12} sm={7}>
        <Row
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            w: "654px",
          }}
        >
          <Text h2 className="title-about-us" css={{ mb: "16px" }}>
            Sobre Nosotros
          </Text>
          <Text h3 className="subtitle-about-us" css={{ mb: "16px" }}>
            GMAC INVESTMENT, comprometidos con la prosperidad en las comunidades
            puertorriqueñas, apoya a los dueño con propiedades de alquiler, a
            corto y largo plazo, que desean delegar la selección de inquilinos,
            el mantenimiento y la administración de la propiedad. En el mismo
            compromiso, compra y remodela propiedades para que el valor de las
            residencias y, por ende, las comunidades incremente.
          </Text>
          {/* <Button as={Link} color="warning" auto href="/about-us">
            Read More
          </Button> */}
        </Row>
      </Grid>
      <Grid xs={12} sm={5}>
        <Row
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Col
            css={{ display: "flex", justifyContent: "flex-start", mb: "24px" }}
          >
            <Image
              src="/assets/img/melvinyjaneska.png"
              alt="Melvin y Janeska"
              width={450}
              css={{
                borderRadius: "24px",
                "@mdMax": {
                  width: "auto",
                  height: "150px",
                  margin: "0 auto",
                },
              }}
            />
          </Col>

          <Col
            css={{
              display: "flex",
              justifyContent: "center",
              w: "72%",
              "@mdMax": { w: "100%" },
            }}
          >
            <Row css={{ display: "flex", flexDirection: "column", ml: "8px" }}>
              <Text
                h3
                css={{
                  textAlign: "center",
                  mb: "0px",
                  "@mdMax": { fontSize: "$md" },
                }}
              >
                Melvin, Barrientos
              </Text>
              <Text
                h4
                css={{
                  textAlign: "center",
                  mb: "0px",
                  color: "#ff9505",
                  "@mdMax": { fontSize: "$md" },
                }}
              >
                Property Manager
              </Text>
              <Link
                href="+1 787 387 9213"
                css={{
                  textAlign: "center",
                  mb: "0px",
                  color: "#fff",
                  "@mdMax": { fontSize: "$md" },
                }}
              >
                +1 787 387 9213
              </Link>
            </Row>
            <Row css={{ display: "flex", flexDirection: "column", ml: "24px" }}>
              <Text
                h3
                css={{
                  textAlign: "center",
                  mb: "0px",
                  "@mdMax": { fontSize: "$md" },
                }}
              >
                Janeska, Maldonado
              </Text>
              <Text
                h4
                css={{
                  textAlign: "center",
                  mb: "0px",
                  color: "#ff9505",
                  "@mdMax": { fontSize: "$md" },
                }}
              >
                Property Manager
              </Text>
              <Link
                href="tel:+1 787 362 6268"
                css={{
                  textAlign: "center",
                  mb: "0px",
                  color: "#fff",
                  "@mdMax": { fontSize: "$md" },
                }}
              >
                +1 787 362 6268
              </Link>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Grid.Container>
  );
};

export default AboutUs;
