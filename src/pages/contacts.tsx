import React from "react";
import Button from "@/components/Button";
import { Page } from "@/components/Page";

function Contacts() {
  return (
    <Page>
      <div>
        A list of contacts including colleagues and local hospitals can be
        stored here
      </div>
      <Button label="Add contact" />
    </Page>
  );
}

export default Contacts;
