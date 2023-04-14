import MainTemplate from "@components/Base/MainTemplate";
import { useCallback, useState } from "react";
import HeroPartySingle from "@components/Hero/HeroList/HeroParty/HeroPartySingle/HeroPartySingle";
import HeroPartyTriple from "@components/Hero/HeroList/HeroParty/HeroPartyTriple/HeroPartyTriple";
import HeroSearchList from "@components/Hero/HeroList/HeroSearchList/HeroSearchList";
import HeroPartyConfig from "@components/Hero/HeroList/HeroParty/HeroPartyConfig";
import { useGetHeroesListQuery } from "@services/hero/HeroApi";
import { PARTY_TYPE } from "@constants/Constants";
import { useAppSelector } from "@store/store";
import { Hero } from "@typings/Hero";

const HeroListPage = () => {
  const [partyConfig, setPartyConfig] = useState<string>(PARTY_TYPE.SINGLE);
  const [searchText, setSearchText] = useState<string>("");

  const singlePartySelector = useAppSelector((state) => state.hero.singleParty);
  const triplePartySelector = useAppSelector((state) => state.hero.tripleParty);

  const { data: heroes } = useGetHeroesListQuery(searchText, {
    refetchOnMountOrArgChange: 2,
  });

  const checkHeroExist = useCallback(
    (hero: Hero) => {
      let exist = false;
      let partyList: Hero[] = [];

      if (partyConfig === PARTY_TYPE.SINGLE) {
        partyList = [...singlePartySelector];
      } else {
        partyList = [
          ...triplePartySelector.first,
          ...triplePartySelector.second,
          ...triplePartySelector.third,
        ];
      }

      partyList.map((existHero) => {
        if (existHero.englishName === hero.englishName) {
          exist = true;
        }
      });

      return exist;
    },
    [
      partyConfig,
      singlePartySelector,
      triplePartySelector.first,
      triplePartySelector.second,
      triplePartySelector.third,
    ]
  );

  return (
    <MainTemplate>
      <div className={"flex flex-row flex-1"}>
        <div className={"flex flex-col flex-1 min-h-[1000px] max-h-[1300px]"}>
          <HeroPartyConfig
            partyConfig={partyConfig}
            setPartyConfig={setPartyConfig}
          />

          {partyConfig === PARTY_TYPE.SINGLE ? (
            <HeroPartySingle />
          ) : (
            <HeroPartyTriple />
          )}
        </div>

        <div
          className={"flex-1 min-h-[1000px] overflow-y-scroll scrollbar-hide"}
        >
          <HeroSearchList
            partyConfig={partyConfig}
            setSearchText={setSearchText}
            heroList={heroes || []}
            checkHeroExist={checkHeroExist}
          />
        </div>
      </div>
    </MainTemplate>
  );
};

export default HeroListPage;
