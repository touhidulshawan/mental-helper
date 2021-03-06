import Layout from "../components/Layout";
import Bio from "../components/bio/Bio";
import HeroImage from "../components/images/HeroImage";
import Link from "next/link";
import { withPublic } from "../utils/routes";

const Home = () => {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-2 gap-5 items-center ">
        <div className="p-4">
          <Bio />
          <Link href="/signup">
            <a className="m-4 inline-block border-2 border-fuchsia-700 py-4 px-8 text-lg uppercase tracking-wide leading-6 bg-gradient-to-tr bg-fuchsia-700 text-fuchsia-100 rounded-lg hover:bg-teal-700 hover:border-teal-700 hover:text-teal-100 transition-all duration-500 ease-in-out">
              Get Started
            </a>
          </Link>
        </div>
        <div className="p-10  rounded-lg">
          <HeroImage />
        </div>
      </div>
    </Layout>
  );
};
export default withPublic(Home);
