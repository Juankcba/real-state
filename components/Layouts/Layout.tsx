import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import {
  Container,
  Link,
  Navbar,
  Text,
  Button,
  useTheme,
  Image,
} from "@nextui-org/react";

import NextLink from "next/link";
import { Box } from "../ui/Box";

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
        <meta property="og:image" content={`${origin}/assets/img/banner.png`} />
      </Head>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <Image src="/logo.svg" alt="Logo" />
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

      <main
        style={{
          padding: "0px",
          minHeight: "84vh",
          width: "100%",
        }}
      >
        {children}
      </main>

      <footer
        style={{
          marginTop: "30px",
          height: "100px",
          display: "flex",
          width: "100%",
          backgroundColor: theme?.colors.gray200.value,
        }}
      >
        <div className="footer-container">
          <NextLink href="https://bladelink.company" passHref legacyBehavior>
            <Link target="_blank">
              Powered by
              <Image
                src="/assets/img/bladelink.svg"
                alt="bl-logo"
                width={150}
                height={100}
                objectFit={"contain"}
              />
            </Link>
          </NextLink>
        </div>
      </footer>
    </Box>
  );
};
