// ImageGallery.js
import Image from "next/image";
import styles from "../styles/ImageGallery.module.css";
import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";



export default function ImageGallery() {
  // Example usage
  let images = [
    {
      id: 12,
      src: "/images/profile.jpg",
      alt: "Louise & Greg",
      label: "Bride & Groom: Louise & Greg",
    },
    {
      id: 1,
      src: "/images/party/Carrie.jpg",
      alt: "Carrie Blackwood",
      label: "Maid of Honour: Carrie Blackwood",
    },
    {
      id: 2,
      src: "/images/party/Suzanne.jpg",
      alt: "Suzanne Wilson",
      label: "Bridesmaid: Suzanne Wilson",
    },
    {
      id: 3,
      src: "/images/party/Stephanie.jpg",
      alt: "Stephanie Leckie",
      label: "Bridesmaid: Stephanie Leckie",
    },
    {
      id: 4,
      src: "/images/party/Lindsay.jpg",
      alt: "Lindsay Gardiner",
      label: "Bridesmaid: Lindsay Gardiner",
    },
    {
      id: 5,
      src: "/images/party/Rebekah.jpg",
      alt: "Rebekah Allardyce",
      label: "Bridesmaid: Rebekah Allardyce",
    },
    {
      id: 6,
      src: "/images/party/Ian.jpg",
      alt: "Ian Gibb",
      label: "Best Man: Ian Gibb",
    },
    {
      id: 7,
      src: "/images/party/Daniel.jpg",
      alt: "Daniel McCulloch",
      label: "Best Man: Daniel McCulloch",
    },
    {
      id: 8,
      src: "/images/party/Fraser.jpg",
      alt: "Fraser Rankin",
      label: "Best Man: Fraser Rankin",
    },
    {
      id: 9,
      src: "/images/party/Richard.jpg",
      alt: "Richard Downie",
      label: "Groomsman: Richard Downie",
    },
    {
      id: 10,
      src: "/images/party/Ryan.jpg",
      alt: "Ryan Blackwood",
      label: "Groomsman: Ryan Blackwood",
    },
    {
      id: 11,
      src: "/images/party/Cora.jpg",
      alt: "Cora Gardiner",
      label: "Flowergirl: Cora Gardiner",
    },
  ];

  return (
    <Layout party>
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
    <h1 className={utilStyles.headingXl}>Meet the Wedding Party</h1>
    <div className={styles.gallery}>
        {images.map((img) => (
          <div key={img.id} className={styles.galleryItem}>
            <Image
              src={img.src}
              alt={img.alt}
              width={250}
              height={250}
              layout="responsive"
              loading="lazy"
            />
            <div className="label">{img.label}</div>
          </div>
        ))}
      </div>
  </Layout>
  );
}
