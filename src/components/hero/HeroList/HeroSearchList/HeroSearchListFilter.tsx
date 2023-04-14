import classNames from "classnames";
import { FilterOption, Option } from "@typings/Option";
import { Dispatch, SetStateAction, useCallback } from "react";

interface HeroSearchListFilterProps {
  heroListFilter: FilterOption;
  setHeroListFilter: Dispatch<SetStateAction<FilterOption>>;
}

const HeroSearchListFilter = ({
  heroListFilter,
  setHeroListFilter,
}: HeroSearchListFilterProps) => {
  const toggleStageFilter = useCallback(
    (selectedStageOption: Option) => {
      setHeroListFilter((prev) => ({
        ...prev,
        stage: prev.stage.map((stageOption) => {
          if (stageOption.label === selectedStageOption.label) {
            return { ...stageOption, select: !stageOption.select };
          } else {
            return stageOption;
          }
        }),
      }));
    },
    [setHeroListFilter]
  );

  const toggleRoleFilter = useCallback(
    (selectedRoleOption: Option) => {
      setHeroListFilter((prev) => ({
        ...prev,
        role: prev.role.map((roleOption) => {
          if (roleOption.label === selectedRoleOption.label) {
            return { ...roleOption, select: !roleOption.select };
          } else {
            return roleOption;
          }
        }),
      }));
    },
    [setHeroListFilter]
  );

  const toggleElementFilter = useCallback(
    (selectedElementOption: Option) => {
      setHeroListFilter((prev) => ({
        ...prev,
        element: prev.element.map((elementOption) => {
          if (elementOption.label === selectedElementOption.label) {
            return { ...elementOption, select: !elementOption.select };
          } else {
            return elementOption;
          }
        }),
      }));
    },
    [setHeroListFilter]
  );

  const toggleWeaponTypeFilter = useCallback(
    (selectedWeaponTypeOption: Option) => {
      setHeroListFilter((prev) => ({
        ...prev,
        weaponType: prev.weaponType.map((weaponTypeOption) => {
          if (weaponTypeOption.label === selectedWeaponTypeOption.label) {
            return { ...weaponTypeOption, select: !weaponTypeOption.select };
          } else {
            return weaponTypeOption;
          }
        }),
      }));
    },
    [setHeroListFilter]
  );

  const toggleWeaponSkillTypeFilter = useCallback(
    (selectedWeaponSkillTypeOption: Option) => {
      setHeroListFilter((prev) => ({
        ...prev,
        weaponSkillType: prev.weaponSkillType.map((weaponSkillTypeOption) => {
          if (
            weaponSkillTypeOption.label === selectedWeaponSkillTypeOption.label
          ) {
            return {
              ...weaponSkillTypeOption,
              select: !weaponSkillTypeOption.select,
            };
          } else {
            return weaponSkillTypeOption;
          }
        }),
      }));
    },
    [setHeroListFilter]
  );

  const togglePartyBuffFilter = useCallback(
    (selectedPartyBuffOption: Option) => {
      setHeroListFilter((prev) => ({
        ...prev,
        partyBuff: prev.partyBuff.map((partyBuffOption) => {
          if (partyBuffOption.label === selectedPartyBuffOption.label) {
            return { ...partyBuffOption, select: !partyBuffOption.select };
          } else {
            return partyBuffOption;
          }
        }),
      }));
    },
    [setHeroListFilter]
  );

  const toggleChainSkillStartTypeFilter = useCallback(
    (selectedChainSkillStartTypeOption: Option) => {
      setHeroListFilter((prev) => ({
        ...prev,
        chainSkillStartType: prev.chainSkillStartType.map(
          (chainSkillStartTypeOption) => {
            if (
              chainSkillStartTypeOption.label ===
              selectedChainSkillStartTypeOption.label
            ) {
              return {
                ...chainSkillStartTypeOption,
                select: !chainSkillStartTypeOption.select,
              };
            } else {
              return chainSkillStartTypeOption;
            }
          }
        ),
      }));
    },
    [setHeroListFilter]
  );

  const toggleChainSkillEndTypeFilter = useCallback(
    (selectedChainSkillEndTypeOption: Option) => {
      setHeroListFilter((prev) => ({
        ...prev,
        chainSkillEndType: prev.chainSkillEndType.map(
          (chainSkillEndTypeOption) => {
            if (
              chainSkillEndTypeOption.label ===
              selectedChainSkillEndTypeOption.label
            ) {
              return {
                ...chainSkillEndTypeOption,
                select: !chainSkillEndTypeOption.select,
              };
            } else {
              return chainSkillEndTypeOption;
            }
          }
        ),
      }));
    },
    [setHeroListFilter]
  );

  return (
    <div className={"flex-1 mt-4 rounded-lg text-sub-1 bg-main"}>
      <div className={"flex flex-row px-3 py-4"}>
        <div className={"w-40"}>등급</div>

        <div className={"flex-1 grid grid-cols-4"}>
          {heroListFilter.stage.map((stageOption, index) => (
            <div key={stageOption.value + index} className={"text-center"}>
              <button
                className={classNames(stageOption.select && "text-sub-2")}
                onClick={() => toggleStageFilter(stageOption)}
              >
                {stageOption.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={"flex flex-row px-3 py-4"}>
        <div className={"w-40"}>역할</div>

        <div className={"flex-1 grid grid-cols-4"}>
          {heroListFilter.role.map((roleOption, index) => (
            <div key={roleOption.value + index} className={"text-center"}>
              <button
                className={classNames(roleOption.select && "text-sub-2")}
                onClick={() => toggleRoleFilter(roleOption)}
              >
                {roleOption.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={"flex flex-row px-3 py-4"}>
        <div className={"w-40"}>속성</div>

        <div className={"flex-1 grid grid-cols-6"}>
          {heroListFilter.element.map((elementOption, index) => (
            <div key={elementOption.value + index} className={"text-center"}>
              <button
                className={classNames(elementOption.select && "text-sub-2")}
                onClick={() => toggleElementFilter(elementOption)}
              >
                {elementOption.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={"flex flex-row px-3 py-4"}>
        <div className={"w-40"}>무기</div>

        <div className={"flex-1 grid grid-cols-4 gap-4"}>
          {heroListFilter.weaponType.map((weaponTypeOption, index) => (
            <div key={weaponTypeOption.value + index} className={"text-center"}>
              <button
                className={classNames(weaponTypeOption.select && "text-sub-2")}
                onClick={() => toggleWeaponTypeFilter(weaponTypeOption)}
              >
                {weaponTypeOption.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={"flex flex-row px-3 py-4"}>
        <div className={"w-40"}>무기 스킬 타입</div>

        <div className={"flex-1 grid grid-cols-4"}>
          {heroListFilter.weaponSkillType.map(
            (weaponSkillTypeOption, index) => (
              <div
                key={weaponSkillTypeOption.value + index}
                className={"text-center"}
              >
                <button
                  className={classNames(
                    weaponSkillTypeOption.select && "text-sub-2"
                  )}
                  onClick={() =>
                    toggleWeaponSkillTypeFilter(weaponSkillTypeOption)
                  }
                >
                  {weaponSkillTypeOption.label}
                </button>
              </div>
            )
          )}
        </div>
      </div>

      <div className={"flex flex-row px-3 py-4"}>
        <div className={"w-40"}>파티 버프</div>

        <div className={"flex-1 grid grid-cols-4 gap-4"}>
          {heroListFilter.partyBuff.map((partyBuffOption, index) => (
            <div key={partyBuffOption.value + index} className={"text-center"}>
              <button
                className={classNames(partyBuffOption.select && "text-sub-2")}
                onClick={() => togglePartyBuffFilter(partyBuffOption)}
              >
                {partyBuffOption.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={"flex flex-row px-3 py-4"}>
        <div className={"w-40"}>연계기 시작</div>

        <div className={"flex-1 grid grid-cols-4"}>
          {heroListFilter.chainSkillStartType.map(
            (chainSkillStartTypeOption, index) => (
              <div
                key={chainSkillStartTypeOption.value + index}
                className={"text-center"}
              >
                <button
                  className={classNames(
                    chainSkillStartTypeOption.select && "text-sub-2"
                  )}
                  onClick={() =>
                    toggleChainSkillStartTypeFilter(chainSkillStartTypeOption)
                  }
                >
                  {chainSkillStartTypeOption.label}
                </button>
              </div>
            )
          )}
        </div>
      </div>

      <div className={"flex flex-row px-3 py-4"}>
        <div className={"w-40"}>연계기 종료</div>

        <div className={"flex-1 grid grid-cols-4"}>
          {heroListFilter.chainSkillEndType.map(
            (chainSkillEndTypeOption, index) => (
              <div
                key={chainSkillEndTypeOption.value + index}
                className={"text-center"}
              >
                <button
                  className={classNames(
                    chainSkillEndTypeOption.select && "text-sub-2"
                  )}
                  onClick={() =>
                    toggleChainSkillEndTypeFilter(chainSkillEndTypeOption)
                  }
                >
                  {chainSkillEndTypeOption.label}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSearchListFilter;
