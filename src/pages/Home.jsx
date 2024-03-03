import Banner from "../components/Banner";
import BuiltTeams from "../components/BuiltTeams";
import BuiltWork from "../components/BuiltWork";
import Connect from "../components/Connect";
import Feature from "../components/Feature";
import HybridWork from "../components/HybridWork";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Trusted from "../components/Trusted";
import WorkWays from "../components/WorkWays";

const Home = () => {
    return (
        <>
        <Navbar/>
        <Banner/>
        <Trusted/>
        <Feature/>
        <HybridWork/>
        <Connect/>
        <WorkWays/>
        <BuiltWork/>
        <BuiltTeams/>
        <Testimonials/>
        </>
    );
};

export default Home;