import classNames from "classnames";

const HeroSearchListFilter = () => {
  const filter = [
    { title: "무", selected: true },
    { title: "광", selected: false },
    { title: "암", selected: false },
    { title: "화", selected: false },
    { title: "수", selected: false },
    { title: "지", selected: false },
  ];

  return (
    <div className={"flex flex-row px-3 py-4"}>
      <div className={"w-24"}>속성</div>
      <div className={"flex flex-row"}>
        {filter.map((filter, index) => (
          <div key={filter.title + index} className={"w-16 text-center"}>
            <button className={classNames(filter.selected && "text-sub-2")}>
              {filter.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSearchListFilter;
