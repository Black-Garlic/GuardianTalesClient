import HeroPartyItem from "@components/Hero/HeroList/HeroParty/HeroPartyItem";
import HeroPartyEmptyItem from "@components/Hero/HeroList/HeroParty/HeroPartyEmptyItem";

const HeroPartySingle = () => {
  return (
    <div>
      <div className={"flex flex-row"}>
        <HeroPartyItem />
        <HeroPartyItem />
        <HeroPartyItem />
        <HeroPartyEmptyItem />
      </div>
      <div className={"flex flex-col"}>
        <div className={"flex-1"}>파티버프 1</div>
        <div className={"flex-1"}>파티버프 2</div>
        <div className={"flex-1"}>파티버프 3</div>
        <div className={"flex-1"}>파티버프 4</div>
      </div>
    </div>
  );
};

export default HeroPartySingle;
