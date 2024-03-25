import Hero from "../components/Hero";
import wabe from '../assets/wave.svg'

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-136px)]">
        <Hero />
        <img className="bottom-0 absolute w-full" src={wabe} alt="" />
    </div>
  );
};

export default Home;
