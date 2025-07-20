import SectionOneHome from "../components/section-one-home";
import SectionTwoHome from "../components/section-two-home";
import SectionThreeHome from "../components/section-three-home";
import SectionFourHome from "../components/section-four-home";
import SectionFiveHome from "../components/section-five-home";

const Home = () => {
  return (
    <div className="w-full space-y-18">
      <SectionOneHome />
      <SectionTwoHome />
      <SectionThreeHome />
      <SectionFourHome />
      <SectionFiveHome />
    </div>
  );
};

export default Home;
