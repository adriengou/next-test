import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Counter from "@/components/Counter/Counter";
import Time from "../components/Time/Time";
import TimeSSR from "../components/TimeSSR/TimeSSR";
import { getTime } from "../services/timeService";

const inter = Inter({ subsets: ["latin"] });

export default function Test(props: any) {
  return (
    <>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>counter:</p>
        <Counter />
        <div>
          <Time />
        </div>
        <div>
          <TimeSSR datetime={props.datetime} />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const datetime = await getTime();

  // Pass data to the page via props
  return { props: { datetime } };
}
