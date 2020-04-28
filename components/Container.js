import Navigation from "./Navigation";
import Head from "next/head";

const Container = (props) => (
  <div>
    <Head>
      <title>Next.js</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
      />
    </Head>
    <Navigation />
    <div className="container p-4">{props.children}</div>
  </div>
);

export default Container;
