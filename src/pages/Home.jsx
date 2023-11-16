import Hero from "../components/navigation/home/Hero";
import About from "../components/navigation/home/About";
import Activities from "../components/navigation/home/Activities";

function Home() {
  return (
    <div>
      <Hero />
      <div style={{background:'linear-gradient(180deg, rgba(10,14,22,0) 2%, rgba(10,14,22,0.8030397217480743) 64%, rgba(10,14,22,0.9683058281906513) 92%, rgba(10,14,22,1) 100%)'}} className="h-52 w-full"></div>
      <About/>
      <Activities/>
    </div>
  );
}

export default Home;
