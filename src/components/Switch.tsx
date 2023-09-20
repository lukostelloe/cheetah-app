import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

const SwitchDemo = () => (
  <form>
    <Flex css={{ alignItems: "center" }}>
      <SwitchRoot id="airplane-mode">
        <SwitchThumb />
      </SwitchRoot>
    </Flex>
  </form>
);

const SwitchRoot = styled(Switch.Root, {
  all: "unset",
  width: 37,
  height: 20,
  backgroundColor: blackA.blackA9,
  borderRadius: "9999px",
  position: "relative",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "&:focus": { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: "black" },
  "&:hover": {
    cursor: "pointer",
    /* Add any additional hover styles you want here */
  },
});

const SwitchThumb = styled(Switch.Thumb, {
  display: "block",
  width: 16,
  height: 16,
  backgroundColor: "white",
  borderRadius: "9999px",
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(19px)" },
});

const Flex = styled("div", { display: "flex" });

export default SwitchDemo;
