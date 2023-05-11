import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import { Container, Link, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

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
    <>
      <Head>
        <title>{title || "RealState App"}</title>
        <meta name="author" content="Blade Link Company" />
        <meta name="description" content={pageDescription || `| ${title}`} />
        <meta name="keywords" content={`${title}, real state, pokedex`} />

        <meta property="og:title" content={`${title}`} />
        <meta
          property="og:description"
          content={pageDescription || `Encuentra tu casa soñada |  ${title}`}
        />
        <meta property="og:image" content={`${origin}/assets/img/banner.png`} />
      </Head>

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
                objectPosition={"center"}
                objectFit={"contain"}
              />
            </Link>
          </NextLink>
        </div>
      </footer>
    </>
  );
};
