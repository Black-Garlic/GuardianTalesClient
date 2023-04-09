const HeroDetailInfo = () => {
  return (
    <div
      className={
        "flex flex-col flex-1 p-4 max-h-[1000px] overflow-y-scroll scrollbar-hide rounded-lg border-4 border-sub-1 text-sub-1 bg-sub-3"
      }
    >
      <div className={"flex flex-col mb-8"}>
        <div className={"flex flex-row"}>
          <div className={"flex-1 title-3"}>기본 정보</div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>이름</div>
            <div className={"flex-1"}>베스</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>등급</div>
            <div className={"flex-1"}>베스</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>역할</div>
            <div className={"flex-1"}>베스</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>속성</div>
            <div className={"flex-1"}>베스</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>파티 버프</div>
            <div className={"flex-1"}>베스</div>
          </div>

          <div className={"flex-1 flex-1 m-2 p-2"} />
        </div>
      </div>

      <div className={"flex flex-col mb-8"}>
        <div className={"flex flex-row"}>
          <div className={"flex-1 title-3"}>전용 무기</div>
          <button className={"w-20 h-11 m-2 p-2 pt-2.5 rounded-lg bg-main"}>
            포함
          </button>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>무기 이름</div>
            <div className={"flex-1"}>프레데터</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>차수</div>
            <div className={"flex-1"}>1차</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>전용 무기 효과</div>
            <div className={"flex-1"}>
              다크 스매시 적중 시 암속성 저항을 3초 동안 20% 감소시키고, 준
              피해의 10% 만큼 보호막을 생성합니다.
            </div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>무기 스킬</div>
            <div className={"flex-1"}>프레데터 스트라이크</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 타입</div>
            <div className={"flex-1"}>다운</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>스킬 피해량</div>
            <div className={"flex-1"}>235%</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>스킬 충전 시간</div>
            <div className={"flex-1"}>8초</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>전용무기 효과</div>
            <div className={"flex-1"}>베스</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>속성</div>
            <div className={"flex-1"}>베스</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>무기 스킬 추가 효과</div>
            <div className={"flex-1"}>
              범위 안의 아군은 체력이 회복되고, 부정적인 효과가 해제됩니다.
            </div>
          </div>
        </div>
      </div>

      <div className={"flex flex-col mb-8"}>
        <div className={"flex flex-row"}>
          <div className={"flex-1 title-3"}>일반 공격</div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>다크 스매시</div>
            <div className={"flex-1"}>
              마나가 깃든 양손검을 휘둘러 적들에게 근접 피해를 줍니다. 원거리
              딜러나 가장 멀리 있는 몬스터를 우선 공격합니다.
            </div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>다크 스매시</div>
            <div className={"flex-1"}>
              마나가 깃든 양손검을 휘둘러 적들에게 근접 피해를 줍니다. 원거리
              딜러나 가장 멀리 있는 몬스터를 우선 공격합니다.
            </div>
          </div>
        </div>
      </div>

      <div className={"flex flex-col mb-8"}>
        <div className={"flex flex-row"}>
          <div className={"flex-1 title-3"}>연계기 - 다크 인베이전</div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 시작</div>
            <div className={"flex-1"}>다운</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 종료</div>
            <div className={"flex-1"}>부상</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 피해량</div>
            <div className={"flex-1"}>400%</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 피해 타입</div>
            <div className={"flex-1"}>원거리</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 추가 효과</div>
            <div className={"flex-1"}>
              자신의 근접 피해량을 8초 동안 40% 증가시킵니다.
            </div>
          </div>
        </div>
      </div>

      <div className={"flex flex-col"}>
        <div className={"flex flex-row"}>
          <div className={"flex-1 title-3"}>특수 능력 - 전투 본능</div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>특수 능력 효과</div>
            <div className={"flex-1"}>
              3칸 이내에 있는 적의 숫자에 따라 피해량이 20% 에서 최대 60% 까지
              증가하고, 받는 피해량이 20% 에서 최대 60% 까지 감소합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetailInfo;
