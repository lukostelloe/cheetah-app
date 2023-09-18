import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "components/NavBar";
import { styled } from "@stitches/react";

const AppLayout = styled("div", {
  display: "flex",
  flexDirection: "row", // Arrange items horizontally
  minHeight: "100vh", // Ensure the layout takes at least the full viewport height
});

const NavBarWrapper = styled("div", {
  flex: "0 0 auto", // Keep the NavBar fixed to its size
  width: "250px", // Set a fixed width for the NavBar
  backgroundColor: "#333", // Optional: Styling for the NavBar
});

const ContentWrapper = styled("div", {
  flex: 1, // Allow the content to expand and fill available space
  padding: "20px", // Optional: Add padding to the content area
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <NavBarWrapper>
        <NavBar />
      </NavBarWrapper>
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
    </AppLayout>
  );
}
