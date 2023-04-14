import HeroPartyTripleItem from "@components/Hero/HeroList/HeroParty/HeroPartyTriple/HeroPartyTripleItem";
import HeroPartyTripleEmptyItem from "@components/Hero/HeroList/HeroParty/HeroPartyTriple/HeroPartyTripleEmptyItem";
import { Hero } from "@typings/Hero";
import { useCallback } from "react";
import classNames from "classnames";
import { useAppDispatch } from "@store/store";

interface HeroPartyTripleRowProps {
  heroPartyList: Hero[];
  resetHeroPartyList: any;
  removeTriplePartyHero: any;
}

const HeroPartyTripleRow = ({
  heroPartyList,
  resetHeroPartyList,
  removeTriplePartyHero,
}: HeroPartyTripleRowProps) => {
  const dispatch = useAppDispatch();

  const generateEmptyItem = useCallback(() => {
    const result = [];

    for (let index = 0; index < 4 - heroPartyList.length; index++) {
      result.push(<HeroPartyTripleEmptyItem key={"Empty-" + index} />);
    }

    return result;
  }, [heroPartyList.length]);

  return (
    <div className={"flex flex-col flex-1 m-4 my-2 p-4 rounded-lg bg-sub-5"}>
      <div className={"flex flex-row mx-0 mb-4 sub-title-2"}>
        <button
          className={classNames("flex-1 py-4 rounded-xl text-sub-1 bg-main")}
          onClick={() => dispatch(resetHeroPartyList)}
        >
          조합 초기화
        </button>
      </div>

      <div className={"flex flex-row flex-1 mb-4 p-4 rounded-lg bg-sub-3"}>
        {heroPartyList.map((hero) => (
          <HeroPartyTripleItem
            hero={hero}
            removeTriplePartyHero={removeTriplePartyHero}
          />
        ))}
        {generateEmptyItem()}
      </div>

      <div
        className={
          "grid grid-cols-2 px-4 py-3 h-20 rounded-lg sub-title-2 text-sub-1 bg-sub-3"
        }
      >
        {heroPartyList.map((hero) => (
          <div className={"my-1"}>{hero.partyBuff}</div>
        ))}
      </div>
    </div>
  );
};

export default HeroPartyTripleRow;
