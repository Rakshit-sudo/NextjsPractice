export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};
