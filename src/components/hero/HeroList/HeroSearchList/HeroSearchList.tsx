import HeroSearchListFilter from "@components/Hero/HeroList/HeroSearchList/HeroSearchListFilter";
import HeroSearchListItem from "@components/Hero/HeroList/HeroSearchList/HeroSearchListItem";
import { Hero } from "@typings/Hero";

interface HeroSearchListProps {
  heroList: Hero[];
}

const HeroSearchList = ({ heroList }: HeroSearchListProps) => {
  const filterList = [
    {
      title: "속성",
      value: ["무", "광", "암", "화", "수", "지"],
    },
    {
      title: "속성",
      value: ["무", "광", "암", "화", "수", "지"],
    },
  ];

  return (
    <div className={"flex flex-col m-4 p-4 rounded-lg sub-title-1 bg-sub-5"}>
      <div className={"flex flex-col mb-4 p-4 rounded-lg bg-sub-3"}>
        <div className={"flex flex-row mb-4"}>
          <input
            className={"flex-1 px-3 rounded-lg outline-0"}
            placeholder={"영웅 검색"}
          />
          <button className={"w-20 h-14 ml-3 rounded-lg text-sub-1 bg-main"}>
            검색
          </button>
          <button className={"w-20 h-14 ml-3 rounded-lg text-sub-1 bg-main"}>
            필터
          </button>
        </div>

        <div className={"flex-1 rounded-lg text-sub-1 bg-main"}>
          {filterList.map((filter) => (
            <HeroSearchListFilter />
          ))}
        </div>
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

          <div className={"max-h-[900px] overflow-y-scroll scrollbar-hide"}>
            {heroList.map((hero) => (
              <HeroSearchListItem hero={hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchList;
