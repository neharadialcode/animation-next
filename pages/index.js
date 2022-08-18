import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Animation from "../component/Animation";
import NewAnimation from "../component/NewAnimation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <TextOne /> */}
        {/* <Animation /> */}
        <NewAnimation />
      </div>
    </>
  );
}
