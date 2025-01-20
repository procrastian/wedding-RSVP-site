import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import CountdownToSpecificDate from "../components/countdown.js";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  const targetDate = "2025-06-14T12:30:00Z";
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=Dancing+Script&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className="countdownTimer">
          <CountdownToSpecificDate date={targetDate} />
        </div>
        <div className="saveDate">
          <h2>Save The Date:</h2>
          <p>
            Saturday 14th June
            <br></br>
            2025
          </p>
          <p>
            Roodlea Barn, Ayr
            <br></br>
            KA6 6EP
          </p>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>More Info:</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, tagline, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <p>{tagline}</p>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
