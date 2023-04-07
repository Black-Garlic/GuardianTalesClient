const HeroDetailInfo = () => {
  return (
    <div className={"flex flex-col flex-1"}>
      <div className={"flex flex-row"}>
        <div className={"flex-1"}>이름</div>
        <div className={"flex-1"}>등급</div>
      </div>
      <div className={"flex flex-row"}>
        <div className={"flex-1"}>역할</div>
        <div className={"flex-1"}>속성</div>
      </div>
      <div className={"flex flex-row"}>
        <div className={"flex-1"}>파티 버프</div>
        <div className={"flex-1 flex flex-row"}>
          <div className={"flex-1"}>전용 무기</div>
          <button>자세히 보기</button>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div className={"flex flex-row"}>
          <div className={"flex-1"}>무기 이름</div>
          <div className={"flex-1"}>차수</div>
        </div>
        <div className={"flex flex-row"}>
          <div className={"flex-1"}>종류</div>
          <div className={"flex-1"}>속성</div>
        </div>
        <div className={"flex flex-row"}>
          <div className={"flex-1"}>전용 무기 효과</div>
        </div>
        <div className={"flex flex-row"}>
          <div className={"flex-1"}>무기 스킬</div>
          <div className={"flex-1"}>연계기 타입</div>
        </div>
        <div className={"flex flex-row"}>
          <div className={"flex-1"}>무기 스킬 피해량</div>
          <div className={"flex-1"}>충전 시간</div>
        </div>
        <div className={"flex flex-row"}>
          <div className={"flex-1"}>연계기 추가 효과</div>
        </div>
      </div>
      <div className={"flex flex-row"}>
        <div className={"flex-1"}>일반 공격 1</div>
        <div className={"flex-1"}>일반 공격 1 설명</div>
      </div>
      <div className={"flex flex-row"}>
        <div className={"flex-1"}>일반 공격 2</div>
        <div className={"flex-1"}>일반 공격 2</div>
      </div>
      <div className={"flex flex-row"}>
        <div className={"flex-1"}>연계기</div>
      </div>
      <div className={"flex flex-row"}>
        <div className={"flex-1"}>연계기 시작</div>
        <div className={"flex-1"}>연계기 종료</div>
      </div>
      <div className={"flex flex-row"}>
        <div className={"flex-1"}>연계기 피해량</div>
        <div className={"flex-1"}>연계기 피해 타입</div>
      </div>
      <div className={"flex flex-row"}>
        <div className={"flex-1"}>연계기 추가 효과</div>
      </div>
      <div className={"flex flex-row"}>
        <div className={"flex-1"}>특수 능력</div>
        <div className={"flex-1"}>특수 능력 효과</div>
      </div>
    </div>
  );
};

export default HeroDetailInfo;
