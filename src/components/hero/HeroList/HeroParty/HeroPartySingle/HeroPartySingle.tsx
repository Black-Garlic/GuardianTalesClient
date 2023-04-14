import HeroPartySingleItem from "@components/Hero/HeroList/HeroParty/HeroPartySingle/HeroPartySingleItem";
import HeroPartySingleEmptyItem from "@components/Hero/HeroList/HeroParty/HeroPartySingle/HeroPartySingleEmptyItem";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useCallback } from "react";
import { Hero } from "@typings/Hero";
import { setSingleParty } from "@services/hero/HeroSlice";

const HeroPartySingle = () => {
  const dispatch = useAppDispatch();

  const singlePartySelector = useAppSelector((state) => state.hero.singleParty);

  const generateEmptyItem = useCallback(() => {
    const result = [];

    for (let index = 0; index < 4 - singlePartySelector.length; index++) {
      result.push(<HeroPartySingleEmptyItem key={"Empty-" + index} />);
    }

    return result;
  }, [singlePartySelector.length]);

  const removeSinglePartyHero = useCallback(
    (hero: Hero) => {
      dispatch(
        setSingleParty(
          singlePartySelector.filter(
            (existHero) => existHero.englishName !== hero.englishName
          )
        )
      );
    },
    [dispatch, singlePartySelector]
  );

  return (
    <div className={"flex flex-col flex-1 m-4 p-4 rounded-lg bg-sub-5"}>
      <div className={"flex flex-row flex-1 mb-4 p-4 h-40 rounded-lg bg-sub-3"}>
        {singlePartySelector.map((hero) => (
          <HeroPartySingleItem
            hero={hero}
            removeSinglePartyHero={removeSinglePartyHero}
          />
        ))}
        {generateEmptyItem()}
      </div>

      <div
        className={
          "flex flex-col px-4 py-3 h-[152px] rounded-lg sub-title-2 text-sub-1 bg-sub-3"
        }
      >
        {singlePartySelector.map((hero) => (
          <div className={"my-1"}>{hero.partyBuff}</div>
        ))}
      </div>
    </div>
  );
};

export default HeroPartySingle;
