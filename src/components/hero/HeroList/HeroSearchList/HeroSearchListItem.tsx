import { Hero } from "@typings/Hero";

interface HeroSearchListItemProps {
  hero: Hero;
}

const HeroSearchListItem = ({ hero }: HeroSearchListItemProps) => {
  return (
    <div className={"flex flex-row my-2 p-2 rounded-lg bg-main"}>
      <div className={"w-16 h-16 mr-2"}>
        <img src={`/image/Sprites/${hero.englishName}.png`} />
      </div>

      <div className={"flex flex-col flex-1"}>
        <div className={"flex flex-row flex-1 h-8 pt-1"}>
          <div className={"flex-1"}>{hero.name}</div>
          <div className={"w-28 text-center"}>{hero.stage}</div>
          <div className={"w-28 text-center"}>{hero.element}</div>
          <div className={"w-28 text-center"}>{hero.role}</div>
          <div className={"w-28 text-center"}>{hero.chainSkillStartType}</div>
          <div className={"w-28 text-center"}>{hero.chainSkillEndType}</div>
        </div>

        <div className={"flex flex-row flex-1 h-8 pt-1"}>
          <div className={"flex-1"}>{hero.partyBuff}</div>
          <button className={"w-28 text-center"}>1번 파티</button>
          <button className={"w-28 text-center"}>2번 파티</button>
          <button className={"w-28 text-center"}>3번 파티</button>
          <button className={"w-28 text-center"}>상세정보</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchListItem;
