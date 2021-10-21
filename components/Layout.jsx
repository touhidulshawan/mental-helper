import Head from "next/head";
import NavBar from "./navbar/NavBar";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-bluegray-900  text-bluegray-100 font-roboto">
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </div>
    </>
  );
};
export default Layout;
