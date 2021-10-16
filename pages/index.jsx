import Layout from "../components/Layout";
import Bio from "../components/bio/Bio";
import HeroImage from "../components/images/HeroImage";

const Home = () => {
  return (
    <Layout title="Home">
      <div>
        <div>
          <Bio />
          <button>Get Started</button>
        </div>
        <HeroImage />
      </div>
    </Layout>
  );
};
export default Home;
