import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "LOUISE AND GREG";
export const siteTitle = "Louise & Greg Wedding";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Louise and Greg are getting married!"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Image
      //top left
        className="flower"
        id="flower_1"
        src="/images/flower_1.png"
        height={2000 / 4}
        width={1414 / 4}
      />
      <Image
      //top right
        className="flower"
        id="flower_2"
        src="/images/flower_2.png"
        height={2000 / 4}
        width={1414 / 4}
      />
      <Image
      //bottom right
        className="flower"
        id="flower_3"
        src="/images/flower_1.png"
        height={2000 / 4}
        width={1414 / 4}
      />
      <Image
      //bottom left
        className="flower"
        id="flower_4"
        src="/images/flower_2.png"
        height={2000 / 4}
        width={1414 / 4}
      />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={1109 / 3}
              width={1109 / 3}
              className={utilStyles.borderCircle}
              alt="Louise and Greg are engaged!"
              z-index="2"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
