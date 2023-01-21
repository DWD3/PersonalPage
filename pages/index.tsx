import Head from "next/head";
import { Home } from "views/home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Jingcheng Wang</title>
        <meta name="description" content="main page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Home></Home>
    </>
  );
}
