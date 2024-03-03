import Banner from "../components/Banner";
import Connect from "../components/Connect";
import Feature from "../components/Feature";
import HybridWork from "../components/HybridWork";
import Navbar from "../components/Navbar";
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
        </>
    );
};

export default Home;