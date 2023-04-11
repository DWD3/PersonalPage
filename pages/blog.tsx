import Head from "next/head";
import BlogPage from "views/blog";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <BlogPage></BlogPage>
    </>
  );
}
