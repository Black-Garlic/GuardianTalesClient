import { useParams } from "react-router-dom";
import MainTemplate from "@components/Base/MainTemplate";
import HeroDetailInfo from "@components/Hero/HeroDetail/HeroDetailInfo";
import HeroDetailImage from "@components/Hero/HeroDetail/HeroDetailImage";

const HeroDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <MainTemplate>
      <div
        className={
          "flex flex-row flex-1 m-4 p-4 rounded-lg sub-title-1 bg-sub-5"
        }
      >
        <HeroDetailImage />

        <div className={"mx-4"} />

        <HeroDetailInfo />
      </div>
    </MainTemplate>
  );
};

export default HeroDetailPage;
