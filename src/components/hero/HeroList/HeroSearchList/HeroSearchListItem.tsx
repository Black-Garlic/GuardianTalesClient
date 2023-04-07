const HeroSearchListItem = () => {
  return (
    <div className={"flex flex-row"}>
      <div>이미지</div>

      <div className={"flex flex-col"}>
        <div className={"flex flex-row"}>
          <div>영웅</div>
          <div>등급</div>
          <div>속성</div>
          <div>역할</div>
        </div>

        <div className={"flex flex-row"}>
          <div>연계기 시작</div>
          <div>연계기 종료</div>
          <div>파티 버프</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchListItem;
