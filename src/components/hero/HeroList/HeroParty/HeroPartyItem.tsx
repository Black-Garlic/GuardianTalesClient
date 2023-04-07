const HeroPartyItem = () => {
  return (
    <div className={"flex flex-col flex-1"}>
      <div>이미지</div>
      <div>영웅</div>
      <div className={"flex flex-row"}>
        <div>속성</div>
        <div>역할</div>
      </div>
      <div className={"flex flex-row"}>
        <div>연계기 시작</div>
        <div>연계기 종료</div>
      </div>
      <div className={"flex flex-row"}>
        <button>상세보기</button>
        <button>파티제외</button>
      </div>
    </div>
  );
};

export default HeroPartyItem;
