import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "components/NavBar";
import { styled } from "@stitches/react";

const AppLayout = styled("div", {
  display: "flex",
  flexDirection: "row",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <NavBar />
      <Component {...pageProps} />
    </AppLayout>
  );
}
