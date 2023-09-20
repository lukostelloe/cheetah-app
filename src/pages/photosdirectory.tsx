import React from "react";
import { PageHeader } from "@/components/PageHeader";
import Button from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { Page } from "@/components/Page";

function Photosdirectory() {
  return (
    <Page>
      <PageHeader>Photos</PageHeader>
      <SectionHeader>Sort By:</SectionHeader>
      <Button label="Priority" />
      <Button label="Patient alphabetical" />
      <Button label="Date uploaded" />
    </Page>
  );
}

export default Photosdirectory;
