import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import {
  Container,
  Link,
  Navbar,
  Grid,
  Text,
  Button,
  Row,
  useTheme,
  Image,
} from "@nextui-org/react";

import NextLink from "next/link";
import { Box } from "../ui/Box";
import { useRouter } from "next/router";

interface Props {
  title?: string;
  pageDescription?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  pageDescription,
}) => {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <Box
      css={{
        maxW: "100%",
      }}
    >
      <Head>
        <title>{title || "GMAC INVESTMENT PUERTO RICO LLC"}</title>
        <meta name="author" content="Blade Link Company" />
        <meta name="description" content={pageDescription || `| ${title}`} />
        <meta name="keywords" content={`${title}, real state, Puerto Rico`} />

        <meta property="og:title" content={`${title}`} />
        <meta
          property="og:description"
          content={pageDescription || `Encuentra tu casa soñada |  ${title}`}
        />
        <meta property="og:image" content={`${origin}/logo.svg`} />
      </Head>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <Image
            src="/logo-horizontal.svg"
            alt="Logo"
            onClick={() => router.push("/")}
            css={{ cursor: "pointer", height: "60px", objectFit: "contain" }}
          />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#home">Home</Navbar.Link>
          <Navbar.Link href="#about-us">About Us</Navbar.Link>
          <Navbar.Link href="#other-proyects">Other Proyects</Navbar.Link>
          <Button as={Link} href="#enquire-now" auto color="warning">
            Enquire Now
          </Button>
        </Navbar.Content>
      </Navbar>

      <main>{children}</main>

      <footer
        style={{
          margin: "32px 0px",
          height: "311px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: theme?.colors.gray200.value,
        }}
      >
        <Grid.Container gap={1} css={{ p: "32px 32px 0" }}>
          <Grid xs={12} sm={4} css={{ mb: "32px" }}>
            <Row
              css={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
                width: "313px",
              }}
            >
              <div>
                <Image src={"/logo-gmac.svg"} alt="logo" />
              </div>
              <Text className="text-footer-description">
                GMAC Investment is a gated community with a great location.
                Located downtown, you’re within walking distance of Parks...{" "}
              </Text>
            </Row>
          </Grid>
          <Grid xs={12} sm={4}>
            <Row css={{ d: "flex", flexDirection: "column" }}>
              <Text
                css={{
                  mb: "18px",
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "29px",
                  letterSpacing: "0.02em",
                  color: "#FFFFFF",
                  p: "0px 20px",
                }}
              >
                Contact Us
              </Text>
              <Text className="text-footer">GMAC Investment</Text>
              <Text className="text-footer" css={{ mb: "12px" }}>
                Ciudad Jardín III, 278 Eucalipto PR, USA
              </Text>
              <Link
                href="tel:7873626268"
                css={{
                  display: "flex",
                  justifyContent: "flex-start",
                  p: "0px",
                  mr: "auto",
                  width: "200px",
                  gap: "8px",
                  mb: "12px",
                }}
              >
                <Image
                  src="/assets/icons/call-calling.svg"
                  alt="Call calling"
                  css={{ w: "20px" }}
                />
                <Text className="text-footer">+1 (787) 362-6268</Text>
              </Link>
              <Link
                href="mailto:info@gmacinvestment.com"
                css={{
                  display: "flex",
                  justifyContent: "flex-start",
                  p: "0px",
                  mr: "auto",
                  width: "350px",
                  gap: "8px",
                }}
              >
                <Image
                  src={"/assets/icons/sms.svg"}
                  alt="instagram"
                  css={{ mr: "auto" }}
                />
                <Text className="text-footer">info@gmacinvestment.com</Text>
              </Link>
            </Row>
          </Grid>
          <Grid xs={12} sm={4}>
            <Row
              css={{
                d: "flex",
                flexDirection: "column",
                maxW: "205px",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Text
                css={{
                  mb: "18px",
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "29px",
                  letterSpacing: "0.02em",
                  color: "#FFFFFF",
                  p: "0px 20px",
                }}
              >
                Follow Us
              </Text>
              <Container
                css={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "18px",
                  p: 0,
                }}
              >
                <Button
                  flat
                  auto
                  as={Link}
                  href="https://www.instagram.com/gmacinvestment/"
                >
                  <Image
                    src={"/assets/icons/instagram.svg"}
                    alt="instagram"
                    css={{ mr: "auto" }}
                  />
                </Button>
                <Button flat auto as={Link} href="">
                  <Image src={"/assets/icons/youtube.svg"} alt="youtube" />
                </Button>
                <Button flat auto as={Link} href="">
                  <Image src={"/assets/icons/twitter.svg"} alt="facebook" />
                </Button>
              </Container>
            </Row>
          </Grid>
          <Grid
            xs={12}
            css={{
              d: "flex",
              justifyContent: "center",
              borderTop: "1px solid #fff",
              p: "24px 12px",
            }}
          >
            <NextLink href="https://bladelink.company" passHref legacyBehavior>
              <Link target="_blank">Powered by Blade Link</Link>
            </NextLink>
          </Grid>
        </Grid.Container>
      </footer>
    </Box>
  );
};
