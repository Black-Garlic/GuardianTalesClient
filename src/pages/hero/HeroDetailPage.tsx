import { useParams } from "react-router-dom";
import MainTemplate from "@components/Base/MainTemplate";
import HeroDetailInfo from "@components/Hero/HeroDetail/HeroDetailInfo";
import HeroDetailImage from "@components/Hero/HeroDetail/HeroDetailImage";
import { useGetHeroQuery } from "@services/hero/HeroApi";

const HeroDetailPage = () => {
  const { id } = useParams();

  const { data: hero } = useGetHeroQuery(String(id), {
    refetchOnMountOrArgChange: 2,
  });

  return (
    <MainTemplate>
      <div
        className={
          "flex flex-row flex-1 m-4 p-4 rounded-lg sub-title-1 bg-sub-5"
        }
      >
        <HeroDetailImage heroEnglishName={hero?.englishName || ""} />

        <div className={"mx-4"} />

        <HeroDetailInfo hero={hero} />
      </div>
    </MainTemplate>
  );
};

export default HeroDetailPage;
