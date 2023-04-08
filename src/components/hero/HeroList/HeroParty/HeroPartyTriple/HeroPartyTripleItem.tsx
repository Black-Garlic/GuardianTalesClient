interface HeroPartyTripleItemProps {
  hero: any;
}

const HeroPartyTripleItem = ({ hero }: HeroPartyTripleItemProps) => {
  return (
    <div
      className={
        "flex flex-col flex-1 relative m-1 rounded-lg border-4 border-sub-1"
      }
    >
      <div
        className={
          "flex flex-col w-full p-4 rounded-b-lg sub-title-3 text-sub-1 text-center bg-main"
        }
      >
        <div className={"flex-1 h-24 mb-2 p-1 pt-2 sub-title-2"}>
          {hero.name}
        </div>
        <div className={"flex flex-row flex-1 w-full mb-2"}>
          <div className={"flex-1 p-1 pt-2"}>{hero.element}</div>
          <div className={"flex-1 p-1 pt-2"}>{hero.role}</div>
        </div>
        <div className={"flex flex-row flex-1 mb-2"}>
          <div className={"flex-1 p-1 pt-2"}>{hero.chainStartType}</div>
          <div className={"flex-1 p-1 pt-2"}>{hero.chainEndType}</div>
        </div>
        <div className={"flex flex-row flex-1"}>
          <button className={"flex-1 p-1 pt-2 bg-sub-3"}>상세</button>
          <button className={"flex-1 p-1 pt-2 bg-sub-2"}>제외</button>
        </div>
      </div>
    </div>
  );
};

export default HeroPartyTripleItem;
