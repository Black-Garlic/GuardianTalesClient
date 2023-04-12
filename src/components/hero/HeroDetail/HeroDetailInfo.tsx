import { Hero } from "@typings/Hero";

interface HeroDetailInfoProps {
  hero?: Hero;
}

const HeroDetailInfo = ({ hero }: HeroDetailInfoProps) => {
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
            <div className={"flex-1"}>{hero?.name}</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>등급</div>
            <div className={"flex-1"}>{hero?.stage}</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>역할</div>
            <div className={"flex-1"}>{hero?.role}</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>속성</div>
            <div className={"flex-1"}>{hero?.element}</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>파티 버프</div>
            <div className={"flex-1"}>{hero?.partyBuff} 증가</div>
          </div>
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
            <div className={"flex-1"}>{hero?.weaponInfo?.name}</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>차수</div>
            <div className={"flex-1"}>{hero?.weaponPhase}</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>무기 타입</div>
            <div className={"flex-1"}>{hero?.weaponType}</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>속성</div>
            <div className={"flex-1"}>{hero?.weaponInfo.element}</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>전용 무기 효과</div>
            <div className={"flex-1"}>{hero?.weaponInfo.weaponOption}</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>무기 스킬</div>
            <div className={"flex-1"}>{hero?.weaponInfo.skillName}</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 타입</div>
            <div className={"flex-1"}>{hero?.weaponInfo.chainType}</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>스킬 피해량</div>
            <div className={"flex-1"}>{hero?.weaponInfo.skillDamage}%</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>스킬 충전 시간</div>
            <div className={"flex-1"}>{hero?.weaponInfo.skillRegenTime}초</div>
          </div>
        </div>

        {hero?.weaponInfo?.skillAdditionalEffect && (
          <div className={"flex flex-row"}>
            <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
              <div className={"w-48"}>무기 스킬 추가 효과</div>
              <div className={"flex-1"}>
                {hero?.weaponInfo.skillAdditionalEffect}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={"flex flex-col mb-8"}>
        <div className={"flex flex-row"}>
          <div className={"flex-1 title-3"}>일반 공격</div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>{hero?.firstNormalAttackName}</div>
            <div className={"flex-1"}>{hero?.firstNormalAttackDescription}</div>
          </div>
        </div>

        {hero?.secondNormalAttackName && (
          <div className={"flex flex-row"}>
            <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
              <div className={"w-48"}>{hero?.secondNormalAttackName}</div>
              <div className={"flex-1"}>
                {hero?.secondNormalAttackDescription}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={"flex flex-col mb-8"}>
        <div className={"flex flex-row"}>
          <div className={"flex-1 title-3"}>
            연계기 - {hero?.chainSkillName}
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 시작</div>
            <div className={"flex-1"}>{hero?.chainSkillStartType}</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 종료</div>
            <div className={"flex-1"}>{hero?.chainSkillEndType}</div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 피해량</div>
            <div className={"flex-1"}>{hero?.chainSkillDamage}%</div>
          </div>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 피해 타입</div>
            <div className={"flex-1"}>
              {hero?.chainSkillDamageType || "ALL"}
            </div>
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>연계기 추가 효과</div>
            <div className={"flex-1"}>{hero?.chainSkillAdditionalEffect}</div>
          </div>
        </div>
      </div>

      <div className={"flex flex-col"}>
        <div className={"flex flex-row"}>
          <div className={"flex-1 title-3"}>
            특수 능력 - {hero?.specialAbilityName}
          </div>
        </div>

        <div className={"flex flex-row"}>
          <div className={"flex flex-1 m-2 p-2 rounded-lg bg-main"}>
            <div className={"w-48"}>특수 능력 효과</div>
            <div className={"flex-1"}>{hero?.specialAbilityDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetailInfo;
