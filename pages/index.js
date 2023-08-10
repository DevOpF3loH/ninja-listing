import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorum
          fugit architecto, maiores rem quod nisi illum sunt minus quo aut
          laudantium reiciendis ab voluptatibus quidem aspernatur nulla enim
          modi?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis
          architecto, deleniti quos repellat, vel atque sint ducimus mollitia
          dolor, aut ad. Laudantium, cumque sequi officiis autem amet at
          impedit.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
