import Head from "next/head";
import { toDoList } from "mockData/toDoList";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHeader } from "@/components/PageHeader";
import { Page } from "@/components/Page";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Cheetah</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageHeader>Cheetah</PageHeader>
        <SectionHeader>Prioritising Melanoma Detection</SectionHeader>
        <ul>
          {toDoList.map((todo) => (
            <li key={todo}>
              <>{todo}</>
              <input type="checkbox" />
            </li>
          ))}
        </ul>
        <SectionHeader>Links</SectionHeader>
      </main>
    </Page>
  );
}
