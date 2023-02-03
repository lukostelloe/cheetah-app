import React from "react";
import { PageHeader } from "components/PageHeader";
import Button from "components/Button";
import { SectionHeader } from "components/SectionHeader";

function Photosdirectory() {
  return (
    <>
      <PageHeader>Photos</PageHeader>
      <SectionHeader>Sort By:</SectionHeader>
      <Button label="Priority" />
      <Button label="Patient alphabetical" />
      <Button label="Date uploaded" />
    </>
  );
}

export default Photosdirectory;
