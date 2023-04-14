import HeroPartyTripleRow from "@components/Hero/HeroList/HeroParty/HeroPartyTriple/HeroPartyTripleRow";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useCallback } from "react";
import { Hero } from "@typings/Hero";
import {
  resetTripleFirstParty,
  resetTripleSecondParty,
  resetTripleThirdParty,
  setTripleFirstParty,
  setTripleSecondParty,
  setTripleThirdParty,
} from "@services/hero/HeroSlice";

const HeroPartyTriple = () => {
  const dispatch = useAppDispatch();

  const triplePartySelector = useAppSelector((state) => state.hero.tripleParty);

  const removeTripleFirstPartyHero = useCallback(
    (hero: Hero) => {
      dispatch(
        setTripleFirstParty(
          triplePartySelector.first.filter(
            (existHero) => existHero.englishName !== hero.englishName
          )
        )
      );
    },
    [dispatch, triplePartySelector.first]
  );

  const removeTripleSecondPartyHero = useCallback(
    (hero: Hero) => {
      dispatch(
        setTripleSecondParty(
          triplePartySelector.second.filter(
            (existHero) => existHero.englishName !== hero.englishName
          )
        )
      );
    },
    [dispatch, triplePartySelector.second]
  );

  const removeTripleThirdPartyHero = useCallback(
    (hero: Hero) => {
      dispatch(
        setTripleThirdParty(
          triplePartySelector.third.filter(
            (existHero) => existHero.englishName !== hero.englishName
          )
        )
      );
    },
    [dispatch, triplePartySelector.third]
  );

  return (
    <div className={"flex flex-col mt-2"}>
      <HeroPartyTripleRow
        heroPartyList={triplePartySelector.first}
        partyIndex={1}
        resetHeroPartyList={resetTripleFirstParty()}
        removeTriplePartyHero={removeTripleFirstPartyHero}
      />
      <HeroPartyTripleRow
        heroPartyList={triplePartySelector.second}
        partyIndex={2}
        resetHeroPartyList={resetTripleSecondParty()}
        removeTriplePartyHero={removeTripleSecondPartyHero}
      />
      <HeroPartyTripleRow
        heroPartyList={triplePartySelector.third}
        partyIndex={3}
        resetHeroPartyList={resetTripleThirdParty()}
        removeTriplePartyHero={removeTripleThirdPartyHero}
      />
    </div>
  );
};

export default HeroPartyTriple;
