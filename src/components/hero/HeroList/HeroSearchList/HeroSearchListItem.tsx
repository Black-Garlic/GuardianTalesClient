import { Hero } from "@typings/Hero";
import { Link } from "react-router-dom";

interface HeroSearchListItemProps {
  hero: Hero;
}

const HeroSearchListItem = ({ hero }: HeroSearchListItemProps) => {
  return (
    <div className={"flex flex-row my-2 p-2 pb-0 rounded-lg bg-main"}>
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

        <div className={"flex flex-row flex-1 pt-1 pb-2"}>
          <div className={"flex-1"}>
            {hero.partyBuff.split(",").map((line) => (
              <>
                {line}
                <br />
              </>
            ))}
          </div>
          <button className={"w-28 text-center"}>1번 파티</button>
          <button className={"w-28 text-center"}>2번 파티</button>
          <button className={"w-28 text-center"}>3번 파티</button>
          <Link
            className={"w-28 text-center"}
            to={`/detail/${hero.heroInfoId}`}
          >
            상세정보
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchListItem;
