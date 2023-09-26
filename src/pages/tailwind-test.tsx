import React from "react";
import { Page } from "@/components/Page";

function TailwindTest() {
  return (
    <Page>
      <div>tailwind-test</div>
      <h1 className="text-red-500 font-bold underline">Hello world!</h1>
      <button className="bg-gray-500 rounded text-white px-2 py-3">Back</button>
      <p className="text-lg text-red-500">Red text</p>
      <button className="bg-blue-500 text-white">Button</button>
      <h1 className="text-red font-bold underline">Hello world!</h1>
    </Page>
  );
}

export default TailwindTest;
