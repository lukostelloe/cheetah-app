import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PersistentDrawerLeft from "@/components/mui-drawer";
import { styled } from "@stitches/react";
import { SessionProvider } from "next-auth/react";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const AppLayout = styled("div", {
  display: "flex",
  flexDirection: "row", // Arrange items horizontally
  minHeight: "100vh", // Ensure the layout takes at least the full viewport height
});

const NavBarWrapper = styled("div", {
  flex: "0 0 auto", // Keep the NavBar fixed to its size
  backgroundColor: "#333", // Optional: Styling for the NavBar
});

const ContentWrapper = styled("div", {
  flex: 1, // Allow the content to expand and fill available space
});

export default function App({ Component, ...pageProps }: AppProps) {
  return (
    <AppLayout>
      {/* <NavBarWrapper>
        <NavBar />
      </NavBarWrapper> */}
      <PersistentDrawerLeft />
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
    </AppLayout>
  );
}
