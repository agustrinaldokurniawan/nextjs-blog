import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export async function getStaticProps() {
  const blog = await fetcher("https://jsonplaceholder.typicode.com/posts");

  return { props: { blog } };
}

export default function AllPost({ blog }) {
  const [totalShow, setTotalShow] = useState(5);

  return (
    <Layout>
      <Head>
        <title>All Post</title>
        <link rel="icon" href="/blog.ico" />
      </Head>
      <h1>All Post</h1>

      {blog.slice(0, totalShow).map(({ title, body, id }) => (
        <div key={id}>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
      ))}

      <button
        onClick={() => {
          setTotalShow(totalShow + 5);
        }}
      >
        Show More
      </button>

      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  );
}
