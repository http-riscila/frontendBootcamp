import SectionOneHome from "../components/section-one-home";
import SectionTwoHome from "../components/section-two-home";
import SectionThreeHome from "../components/section-three-home";
import SectionFourHome from "../components/section-four-home";
import SectionFiveHome from "../components/section-five-home";
import { useEffect, useState } from "react";
import { homeApi } from "../services/home-api";

const Home = () => {
  const [homeData, setHomeData] = useState({
    communities: [],
    items: [],
    userStats: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHomeData();
  }, []);

  async function loadHomeData() {
    try {
      setLoading(true);
      const data = await homeApi.getHomeData();
      setHomeData(data);
    } catch (error) {
      console.error("Erro ao carregar dados da home:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="w-full space-y-18">
      <SectionOneHome />
      <SectionTwoHome />
      <SectionThreeHome communities={homeData.communities} />
      <SectionFourHome items={homeData.items} />
      <SectionFiveHome />
    </div>
  );
};

export default Home;
