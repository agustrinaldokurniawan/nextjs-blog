export async function getStaticProps() {
  const blog = await fetcher("https://jsonplaceholder.typicode.com/posts");

  return { props: { blog } };
}
