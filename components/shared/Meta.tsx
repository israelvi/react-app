import Head from "next/head";

export interface IMeta {
  title: string;
  keyword: string;
  desc: string;
}

const Meta = ({ title, keyword, desc}: IMeta) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Isolux Aparcamientos | Parking",
  keyword:
    "parking, aparacamientos Isolux, Spain, España",
  desc: "Isolux Aparcamientos",
};

export default Meta;
