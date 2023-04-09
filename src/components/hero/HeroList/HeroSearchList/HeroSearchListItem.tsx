const HeroSearchListItem = () => {
  return (
    <div className={"flex flex-row my-2 p-2 rounded-lg bg-main"}>
      <div className={"w-16 h-16 mr-2"}>
        <img src={`/image/Sprites/Beth.png`} />
      </div>

      <div className={"flex flex-col flex-1"}>
        <div className={"flex flex-row flex-1 h-8 pt-1"}>
          <div className={"flex-1"}>베스</div>
          <div className={"w-28 text-center"}>유니크</div>
          <div className={"w-28 text-center"}>암</div>
          <div className={"w-28 text-center"}>원거리 딜러</div>
          <div className={"w-28 text-center"}>다운</div>
          <div className={"w-28 text-center"}>부상</div>
        </div>

        <div className={"flex flex-row flex-1 h-8 pt-1"}>
          <div className={"flex-1"}>근접 피해량 50%</div>
          <button className={"w-28 text-center"}>1번 파티</button>
          <button className={"w-28 text-center"}>2번 파티</button>
          <button className={"w-28 text-center"}>3번 파티</button>
          <button className={"w-28 text-center"}>상세정보</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchListItem;
