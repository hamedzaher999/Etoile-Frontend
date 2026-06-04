import ControlPanel from "./ControlPanel";
import PlanetsNav from "./PlanetsNav";
import LoadingScreen from "../../shared/LoadingPage";
import { usePlanetsStore } from "../../../store/planet.store";
import { useEffect } from "react";
import { useSceneStore } from "../../../store/scene.store";
import Details from "./Details";
import NutritionInfoDialog from "./component/NutritionInfo";
const PlanetsPage = () => {
  const isPageLoaded = usePlanetsStore((state) => state.isPageLoaded);
  const setField = usePlanetsStore((state) => state.setField);
  const setScene = useSceneStore((s) => s.setScene);
  useEffect(() => {
    setScene("planetPage");
    return () => {
      setField("isPageLoaded", false);
    };
  }, []);
  return (
    <section className="pointer-events-none relative z-[1000] h-full w-screen overflow-hidden p-5 md:p-8">
      {!isPageLoaded && <LoadingScreen />}
      <PlanetsNav />
      <ControlPanel />
      <Details />
      <NutritionInfoDialog />
    </section>
  );
};

export default PlanetsPage;
