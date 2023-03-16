import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Counter from "@/components/Counter/Counter";

const inter = Inter({ subsets: ["latin"] });

export default function Test() {
  return (
    <>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Test page, component below
        <Counter />
      </main>
    </>
  );
}
