import { useParams } from "react-router-dom";
import MainTemplate from "@components/Base/MainTemplate";
import HeroDetailInfo from "@components/Hero/HeroDetail/HeroDetailInfo";

const HeroDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <MainTemplate>
      <div className={"flex flex-row flex-1"}>
        <div className={"flex-1"}>이미지</div>
        <HeroDetailInfo />
      </div>
    </MainTemplate>
  );
};

export default HeroDetailPage;
