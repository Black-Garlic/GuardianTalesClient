import HeroSearchListFilter from "@components/Hero/HeroList/HeroSearchList/HeroSearchListFilter";
import HeroSearchListItem from "@components/Hero/HeroList/HeroSearchList/HeroSearchListItem";
import { Hero } from "@typings/Hero";
import { useCallback, useEffect, useState } from "react";
import { FilterOption } from "@typings/Option";
import {
  CHAIN_TYPE,
  ELEMENT,
  ROLE,
  STAGE,
  WEAPON_TYPE,
} from "@constants/Constants";

interface HeroSearchListProps {
  setSearchText: any;
  heroList: Hero[];
}

const HeroSearchList = ({ setSearchText, heroList }: HeroSearchListProps) => {
  const [keyword, setKeyword] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [heroListFilter, setHeroListFilter] = useState(Filter);

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

  useEffect(() => {
    let newSearchString =
      heroListFilter.keyword === "" ? "" : "?keyword=" + heroListFilter.keyword;

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

    heroListFilter.stage.map((stageOption) => {
      if (stageOption.select) {
        filterUsed = true;
        selectedFilterList.stage.push(stageOption);
      }
    });

    heroListFilter.role.map((roleOption) => {
      if (roleOption.select) {
        filterUsed = true;
        selectedFilterList.role.push(roleOption);
      }
    });

    heroListFilter.element.map((elementOption) => {
      if (elementOption.select) {
        filterUsed = true;
        selectedFilterList.element.push(elementOption);
      }
    });

    heroListFilter.weaponType.map((weaponTypeOption) => {
      if (weaponTypeOption.select) {
        filterUsed = true;
        selectedFilterList.weaponType.push(weaponTypeOption);
      }
    });

    heroListFilter.weaponSkillType.map((weaponSkillTypeOption) => {
      if (weaponSkillTypeOption.select) {
        filterUsed = true;
        selectedFilterList.weaponSkillType.push(weaponSkillTypeOption);
      }
    });

    heroListFilter.partyBuff.map((partyBuffOption) => {
      if (partyBuffOption.select) {
        filterUsed = true;
        selectedFilterList.partyBuff.push(partyBuffOption);
      }
    });

    heroListFilter.chainSkillStartType.map((chainSkillStartTypeOption) => {
      if (chainSkillStartTypeOption.select) {
        filterUsed = true;
        selectedFilterList.chainSkillStartType.push(chainSkillStartTypeOption);
      }
    });

    heroListFilter.chainSkillEndType.map((chainSkillEndTypeOption) => {
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
          selectedFilterList.role
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
  }, [appendFilterString, heroListFilter, setSearchText]);

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
                setHeroListFilter((prev) => ({ ...prev, keyword: keyword }));
              }
            }}
          />
          <button
            className={"w-20 h-14 ml-3 rounded-lg text-sub-1 bg-main"}
            onClick={() =>
              setHeroListFilter((prev) => ({ ...prev, keyword: keyword }))
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
        </div>

        {openFilter && (
          <HeroSearchListFilter
            heroListFilter={heroListFilter}
            setHeroListFilter={setHeroListFilter}
          />
        )}
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
            {heroList.map((hero, index) => (
              <HeroSearchListItem key={index} hero={hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchList;

const Filter: FilterOption = {
  keyword: "",
  stage: [
    {
      label: STAGE.UNIQUE,
      value: STAGE.UNIQUE,
      select: false,
    },
    {
      label: STAGE.RARE_PROMOTION,
      value: STAGE.RARE_PROMOTION,
      select: false,
    },
    {
      label: STAGE.RARE,
      value: STAGE.RARE,
      select: false,
    },
  ],
  role: [
    { label: ROLE.WARRIOR, value: ROLE.WARRIOR, select: false },
    { label: ROLE.RANGED, value: ROLE.RANGED, select: false },
    { label: ROLE.TANKER, value: ROLE.TANKER, select: false },
    { label: ROLE.SUPPORT, value: ROLE.SUPPORT, select: false },
  ],
  element: [
    { label: ELEMENT.BASIC, value: ELEMENT.BASIC, select: false },
    { label: ELEMENT.LIGHT, value: ELEMENT.LIGHT, select: false },
    { label: ELEMENT.DARK, value: ELEMENT.DARK, select: false },
    { label: ELEMENT.FIRE, value: ELEMENT.FIRE, select: false },
    { label: ELEMENT.WATER, value: ELEMENT.WATER, select: false },
    { label: ELEMENT.EARTH, value: ELEMENT.EARTH, select: false },
  ],
  weaponType: [
    {
      label: WEAPON_TYPE.ONE_HANDED_SWORD,
      value: WEAPON_TYPE.ONE_HANDED_SWORD,
      select: false,
    },
    {
      label: WEAPON_TYPE.TWO_HANDED_SWORD,
      value: WEAPON_TYPE.TWO_HANDED_SWORD,
      select: false,
    },
    {
      label: WEAPON_TYPE.RIFLE,
      value: WEAPON_TYPE.RIFLE,
      select: false,
    },
    {
      label: WEAPON_TYPE.BOW,
      value: WEAPON_TYPE.BOW,
      select: false,
    },
    {
      label: WEAPON_TYPE.STAFF,
      value: WEAPON_TYPE.STAFF,
      select: false,
    },
    {
      label: WEAPON_TYPE.BASKET,
      value: WEAPON_TYPE.BASKET,
      select: false,
    },
    {
      label: WEAPON_TYPE.GAUNTLET,
      value: WEAPON_TYPE.GAUNTLET,
      select: false,
    },
    {
      label: WEAPON_TYPE.CLAW,
      value: WEAPON_TYPE.CLAW,
      select: false,
    },
  ],
  weaponSkillType: [
    { label: CHAIN_TYPE.DOWNED, value: CHAIN_TYPE.DOWNED, select: false },
    { label: CHAIN_TYPE.INJURED, value: CHAIN_TYPE.INJURED, select: false },
    { label: CHAIN_TYPE.AIRBORNE, value: CHAIN_TYPE.AIRBORNE, select: false },
  ],
  partyBuff: [
    { label: "속성공격력", value: "속성 공격력", select: false },
    { label: "체력", value: "체력", select: false },
    { label: "방어력", value: "방어력", select: false },
    { label: "근접 피해량", value: "근접 피해량", select: false },
    { label: "원거리 피해량", value: "원거리 피해량", select: false },
    { label: "기술 피해량", value: "기술 피해량", select: false },
    { label: "치명타 확률", value: "치명타 확률", select: false },
    { label: "충전 속도", value: "무기 기술 충전 속도", select: false },
  ],
  chainSkillStartType: [
    { label: CHAIN_TYPE.ALL, value: CHAIN_TYPE.ALL, select: false },
    { label: CHAIN_TYPE.DOWNED, value: CHAIN_TYPE.DOWNED, select: false },
    { label: CHAIN_TYPE.INJURED, value: CHAIN_TYPE.INJURED, select: false },
    { label: CHAIN_TYPE.AIRBORNE, value: CHAIN_TYPE.AIRBORNE, select: false },
  ],
  chainSkillEndType: [
    { label: CHAIN_TYPE.DOWNED, value: CHAIN_TYPE.DOWNED, select: false },
    { label: CHAIN_TYPE.INJURED, value: CHAIN_TYPE.INJURED, select: false },
    { label: CHAIN_TYPE.AIRBORNE, value: CHAIN_TYPE.AIRBORNE, select: false },
  ],
};
