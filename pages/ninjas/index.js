import { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/Jobs.module.css";

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// };

const Ninjas = (props) => {
  const [data, setData] = useState();
  useEffect(async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    console.log("data: ", data);
    setData(data.name);
  }, []);

  return <div>{data}</div>;
};

export default Ninjas;
