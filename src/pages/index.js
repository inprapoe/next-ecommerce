import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import ProductFeed from "../components/ProductFeed/ProductFeed";
import data from '../data/data'

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Rubox</title>
      </Head>
    
      <Header data={data}/>

      <main className="mx-auto max-w-screen-2xl">
        <Banner/>
        <ProductFeed products={products}/>
        
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("http://fakestoreapi.com/products").then(
    (res) => res.json()
  )

  return { props: {
    products
  }}
}

// http://fakestoreapi.com/products