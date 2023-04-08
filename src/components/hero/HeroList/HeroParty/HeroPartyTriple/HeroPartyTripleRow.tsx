import HeroPartyTripleItem from "@components/Hero/HeroList/HeroParty/HeroPartyTriple/HeroPartyTripleItem";
import HeroPartyTripleEmptyItem from "@components/Hero/HeroList/HeroParty/HeroPartyTriple/HeroPartyTripleEmptyItem";

const HeroPartyTripleRow = () => {
  const heroParty = [
    {
      name: "베스",
      englishName: "Beth",
      element: "암",
      role: "전사",
      chainStartType: "다운",
      chainEndType: "부상",
    },
    {
      name: "칸나",
      englishName: "Kanna",
      element: "무",
      role: "지원가",
      chainStartType: "다운",
      chainEndType: "부상",
    },
    {
      name: "엘비라",
      englishName: "Elvira",
      element: "화",
      role: "원거리 딜러",
      chainStartType: "다운",
      chainEndType: "부상",
    },
    {
      name: "",
      englishName: "Carol",
      element: "광",
      role: "전사",
      chainStartType: "다운",
      chainEndType: "부상",
    },
  ];

  return (
    <div className={"flex flex-col flex-1 m-4 my-2 p-4 rounded-lg bg-sub-5"}>
      <div className={"flex flex-row flex-1 mb-4 p-4 rounded-lg bg-sub-3"}>
        {heroParty.map((hero) => {
          if (hero.name !== "") {
            return <HeroPartyTripleItem hero={hero} />;
          } else {
            return <HeroPartyTripleEmptyItem />;
          }
        })}
      </div>

      <div
        className={
          "flex flex-col px-4 py-3 rounded-lg sub-title-2 text-sub-1 bg-sub-3"
        }
      >
        <div className={"flex flex-row flex-1"}>
          <div className={"flex-1 my-1"}>근접 피해량 50%</div>
          <div className={"flex-1 my-1"}>기술 피해량 90%</div>
        </div>
        <div className={"flex flex-row flex-1"}>
          <div className={"flex-1 my-1"}>암속성 공격력 50%</div>
          <div className={"flex-1 my-1"}>치명타 확률 40%</div>
        </div>
      </div>
    </div>
  );
};

export default HeroPartyTripleRow;