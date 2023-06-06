import type { AppProps } from "next/app";
import { NextUIProvider, CssBaseline } from "@nextui-org/react";
import { darkTheme, materialTheme } from "../themes";
import { ThemeProvider } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.scss";
export default function App({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={darkTheme}>
      <ThemeProvider theme={materialTheme}>
        <CssBaseline />
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </NextUIProvider>
  );
}
