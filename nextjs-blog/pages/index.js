import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Save The Date</p>
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
      </section>
    </Layout>
  );
}