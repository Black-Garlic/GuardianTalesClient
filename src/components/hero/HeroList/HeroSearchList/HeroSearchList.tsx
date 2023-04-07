import HeroSearchListFilter from "@components/Hero/HeroList/HeroSearchList/HeroSearchListFilter";
import HeroSearchListItem from "@components/Hero/HeroList/HeroSearchList/HeroSearchListItem";

const HeroSearchList = () => {
  const heroList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const filterList = [
    {
      title: "속성",
      value: ["무", "광", "암", "화", "수", "지"],
    },
  ];

  return (
    <div className={"flex flex-col"}>
      <div className={"flex flex-col"}>
        <div className={"flex flex-row"}>
          <input className={"flex-1"} value={"검색 Input"} />
          <button>검색</button>
          <button>필터</button>
        </div>

        <div className={"flex-1"}>
          {filterList.map((filter) => (
            <HeroSearchListFilter />
          ))}
        </div>
      </div>
      <div className={"flex-1"}>
        {heroList.map(() => (
          <HeroSearchListItem />
        ))}
      </div>
    </div>
  );
};

export default HeroSearchList;
