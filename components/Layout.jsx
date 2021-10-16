import Head from "next/head";
import NavBar from "./navbar/NavBar";

const Layout = ({ title, children }) => {
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <main className="container mx-auto">{children}</main>
  </>;
};
export default Layout;
