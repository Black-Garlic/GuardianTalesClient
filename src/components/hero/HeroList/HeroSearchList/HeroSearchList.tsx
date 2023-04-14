import HeroSearchListFilter from "@components/Hero/HeroList/HeroSearchList/HeroSearchListFilter";
import HeroSearchListItem from "@components/Hero/HeroList/HeroSearchList/HeroSearchListItem";
import { Hero } from "@typings/Hero";
import { useCallback, useEffect, useState } from "react";
import { FilterOption } from "@typings/Option";
import {
  resetFilterOption,
  setFilterOption,
  setSingleParty,
  setTripleFirstParty,
  setTripleSecondParty,
  setTripleThirdParty,
} from "@services/hero/HeroSlice";
import { useAppDispatch, useAppSelector } from "@store/store";

interface HeroSearchListProps {
  setSearchText: any;
  heroList: Hero[];
  checkHeroExist: any;
}

const HeroSearchList = ({
  setSearchText,
  heroList,
  checkHeroExist,
}: HeroSearchListProps) => {
  const dispatch = useAppDispatch();

  const [keyword, setKeyword] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const singlePartySelector = useAppSelector((state) => state.hero.singleParty);
  const triplePartySelector = useAppSelector((state) => state.hero.tripleParty);
  const filterOptionSelector = useAppSelector(
    (state) => state.hero.filterOption
  );

  const appendFilterString = useCallback(
    (searchString: string, filterString: string) => {
      if (searchString === "") {
        searchString = "?" + filterString;
      } else {
        searchString += "&" + filterString;
      }

      return searchString;
    },
    []
  );

  const addSinglePartyHero = useCallback(
    (hero: Hero) => {
      if (singlePartySelector.length < 4) {
        if (!checkHeroExist(hero)) {
          dispatch(setSingleParty([...singlePartySelector, hero]));
        }
      }
    },
    [checkHeroExist, dispatch, singlePartySelector]
  );

  const addTripleFirstPartyHero = useCallback(
    (hero: Hero) => {
      if (triplePartySelector.first.length < 4) {
        if (!checkHeroExist(hero)) {
          dispatch(setTripleFirstParty([...triplePartySelector.first, hero]));
        }
      }
    },
    [checkHeroExist, dispatch, triplePartySelector.first]
  );

  const addTripleSecondPartyHero = useCallback(
    (hero: Hero) => {
      if (triplePartySelector.second.length < 4) {
        if (!checkHeroExist(hero)) {
          dispatch(setTripleSecondParty([...triplePartySelector.second, hero]));
        }
      }
    },
    [checkHeroExist, dispatch, triplePartySelector.second]
  );

  const addTripleThirdPartyHero = useCallback(
    (hero: Hero) => {
      if (triplePartySelector.third.length < 4) {
        if (!checkHeroExist(hero)) {
          dispatch(setTripleThirdParty([...triplePartySelector.third, hero]));
        }
      }
    },
    [checkHeroExist, dispatch, triplePartySelector.third]
  );

  useEffect(() => {
    let newSearchString =
      filterOptionSelector.keyword === ""
        ? ""
        : "?keyword=" + filterOptionSelector.keyword;

    let filterUsed = false;
    let selectedFilterList: FilterOption = {
      keyword: "",
      stage: [],
      role: [],
      element: [],
      weaponType: [],
      weaponSkillType: [],
      partyBuff: [],
      chainSkillStartType: [],
      chainSkillEndType: [],
    };

    filterOptionSelector.stage.map((stageOption) => {
      if (stageOption.select) {
        filterUsed = true;
        selectedFilterList.stage.push(stageOption);
      }
    });

    filterOptionSelector.role.map((roleOption) => {
      if (roleOption.select) {
        filterUsed = true;
        selectedFilterList.role.push(roleOption);
      }
    });

    filterOptionSelector.element.map((elementOption) => {
      if (elementOption.select) {
        filterUsed = true;
        selectedFilterList.element.push(elementOption);
      }
    });

    filterOptionSelector.weaponType.map((weaponTypeOption) => {
      if (weaponTypeOption.select) {
        filterUsed = true;
        selectedFilterList.weaponType.push(weaponTypeOption);
      }
    });

    filterOptionSelector.weaponSkillType.map((weaponSkillTypeOption) => {
      if (weaponSkillTypeOption.select) {
        filterUsed = true;
        selectedFilterList.weaponSkillType.push(weaponSkillTypeOption);
      }
    });

    filterOptionSelector.partyBuff.map((partyBuffOption) => {
      if (partyBuffOption.select) {
        filterUsed = true;
        selectedFilterList.partyBuff.push(partyBuffOption);
      }
    });

    filterOptionSelector.chainSkillStartType.map(
      (chainSkillStartTypeOption) => {
        if (chainSkillStartTypeOption.select) {
          filterUsed = true;
          selectedFilterList.chainSkillStartType.push(
            chainSkillStartTypeOption
          );
        }
      }
    );

    filterOptionSelector.chainSkillEndType.map((chainSkillEndTypeOption) => {
      if (chainSkillEndTypeOption.select) {
        filterUsed = true;
        selectedFilterList.chainSkillEndType.push(chainSkillEndTypeOption);
      }
    });

    if (filterUsed) {
      if (selectedFilterList.stage.length > 0) {
        let filterString =
          "stage=" +
          selectedFilterList.stage
            .map((stageOption) => stageOption.value)
            .join(",");

        newSearchString = appendFilterString(newSearchString, filterString);
      }

      if (selectedFilterList.role.length > 0) {
        let filterString =
          "role=" +
          selectedFilterList.role
            .map((roleOption) => roleOption.value)
            .join(",");

        newSearchString = appendFilterString(newSearchString, filterString);
      }

      if (selectedFilterList.element.length > 0) {
        let filterString =
          "element=" +
          selectedFilterList.element
            .map((elementOption) => elementOption.value)
            .join(",");

        newSearchString = appendFilterString(newSearchString, filterString);
      }

      if (selectedFilterList.weaponType.length > 0) {
        let filterString =
          "weaponType=" +
          selectedFilterList.weaponType
            .map((weaponTypeOption) => weaponTypeOption.value)
            .join(",");

        newSearchString = appendFilterString(newSearchString, filterString);
      }

      if (selectedFilterList.weaponSkillType.length > 0) {
        let filterString =
          "weaponSkillType=" +
          selectedFilterList.weaponSkillType
            .map((weaponSkillTypeOption) => weaponSkillTypeOption.value)
            .join(",");

        newSearchString = appendFilterString(newSearchString, filterString);
      }

      if (selectedFilterList.partyBuff.length > 0) {
        let filterString =
          "partyBuff=" +
          selectedFilterList.partyBuff
            .map((partyBuffOption) => partyBuffOption.value)
            .join(",");

        newSearchString = appendFilterString(newSearchString, filterString);
      }

      if (selectedFilterList.chainSkillStartType.length > 0) {
        let filterString =
          "chainSkillStartType=" +
          selectedFilterList.chainSkillStartType
            .map((chainSkillStartTypeOption) => chainSkillStartTypeOption.value)
            .join(",");

        newSearchString = appendFilterString(newSearchString, filterString);
      }

      if (selectedFilterList.chainSkillEndType.length > 0) {
        let filterString =
          "chainSkillEndType=" +
          selectedFilterList.chainSkillEndType
            .map((chainSkillStartTypeOption) => chainSkillStartTypeOption.value)
            .join(",");

        newSearchString = appendFilterString(newSearchString, filterString);
      }
    }

    setSearchText(newSearchString);
  }, [appendFilterString, filterOptionSelector, setSearchText]);

  return (
    <div
      className={
        "flex flex-col m-4 p-4 w-[900px] rounded-lg sub-title-1 bg-sub-5"
      }
    >
      <div className={"flex flex-col mb-4 p-4 rounded-lg bg-sub-3"}>
        <div className={"flex flex-row"}>
          <input
            className={"flex-1 px-3 rounded-lg outline-0"}
            placeholder={"영웅 검색"}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(
                  setFilterOption({ ...filterOptionSelector, keyword: keyword })
                );
              }
            }}
          />

          <button
            className={"w-20 h-14 ml-3 rounded-lg text-sub-1 bg-main"}
            onClick={() =>
              dispatch(
                setFilterOption({ ...filterOptionSelector, keyword: keyword })
              )
            }
          >
            검색
          </button>

          <button
            className={"w-20 h-14 ml-3 rounded-lg text-sub-1 bg-main"}
            onClick={() => setOpenFilter((prev) => !prev)}
          >
            필터
          </button>

          <button
            className={"w-20 h-14 ml-3 rounded-lg text-sub-1 bg-main"}
            onClick={() => dispatch(resetFilterOption())}
          >
            초기화
          </button>
        </div>

        {openFilter && <HeroSearchListFilter />}
      </div>

      <div className={"flex-1 p-4 rounded-lg bg-sub-3 "}>
        <div className={"p-2 rounded-lg text-sub-1"}>
          <div className={"flex flex-col flex-1 p-2"}>
            <div className={"flex flex-col flex-1 ml-2 pl-16"}>
              <div className={"flex flex-row flex-1 h-8 pt-1"}>
                <div className={"flex-1"}>영웅</div>
                <div className={"w-28 text-center"}>등급</div>
                <div className={"w-28 text-center"}>속성</div>
                <div className={"w-28 text-center"}>역할</div>
                <div className={"w-28 text-center"}>연계기 시작</div>
                <div className={"w-28 text-center"}>연계기 종료</div>
              </div>
            </div>
          </div>

          <div className={"h-[900px] overflow-y-scroll scrollbar-hide"}>
            {heroList.map(
              (hero, index) =>
                !checkHeroExist(hero) && (
                  <HeroSearchListItem
                    key={index}
                    hero={hero}
                    addSinglePartyHero={addSinglePartyHero}
                    addTripleFirstPartyHero={addTripleFirstPartyHero}
                    addTripleSecondPartyHero={addTripleSecondPartyHero}
                    addTripleThirdPartyHero={addTripleThirdPartyHero}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchList;
