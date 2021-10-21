import Layout from "../components/Layout";
import Bio from "../components/bio/Bio";
import HeroImage from "../components/images/HeroImage";

const Home = () => {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-2 gap-5 items-center mt-24">
        <div className="p-4">
          <Bio />
          <button className="m-4 border-2 border-fuchsia-700 py-4 px-8 text-lg uppercase tracking-wide leading-6 bg-gradient-to-tr bg-fuchsia-700 text-fuchsia-100 rounded-lg hover:bg-teal-700 hover:border-teal-700 hover:text-teal-100 transition-all duration-500 ease-in-out">
            Get Started
          </button>
        </div>
        <div className="p-10  rounded-lg">
          <HeroImage />
        </div>
      </div>
    </Layout>
  );
};
export default Home;
