import classNames from "classnames";
import { Option } from "@typings/Option";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@store/store";
import { setFilterOption } from "@services/hero/HeroSlice";

const HeroSearchListFilter = () => {
  const dispatch = useAppDispatch();

  const filterOptionSelector = useAppSelector(
    (state) => state.hero.filterOption
  );

  const toggleStageFilter = useCallback(
    (selectedStageOption: Option) => {
      dispatch(
        setFilterOption({
          ...filterOptionSelector,
          stage: filterOptionSelector.stage.map((stageOption) => {
            if (stageOption.label === selectedStageOption.label) {
              return { ...stageOption, select: !stageOption.select };
            } else {
              return stageOption;
            }
          }),
        })
      );
    },
    [dispatch, filterOptionSelector]
  );

  const toggleRoleFilter = useCallback(
    (selectedRoleOption: Option) => {
      dispatch(
        setFilterOption({
          ...filterOptionSelector,
          role: filterOptionSelector.role.map((roleOption) => {
            if (roleOption.label === selectedRoleOption.label) {
              return { ...roleOption, select: !roleOption.select };
            } else {
              return roleOption;
            }
          }),
        })
      );
    },
    [dispatch, filterOptionSelector]
  );

  const toggleElementFilter = useCallback(
    (selectedElementOption: Option) => {
      dispatch(
        setFilterOption({
          ...filterOptionSelector,
          element: filterOptionSelector.element.map((elementOption) => {
            if (elementOption.label === selectedElementOption.label) {
              return { ...elementOption, select: !elementOption.select };
            } else {
              return elementOption;
            }
          }),
        })
      );
    },
    [dispatch, filterOptionSelector]
  );

  const toggleWeaponTypeFilter = useCallback(
    (selectedWeaponTypeOption: Option) => {
      dispatch(
        setFilterOption({
          ...filterOptionSelector,
          weaponType: filterOptionSelector.weaponType.map(
            (weaponTypeOption) => {
              if (weaponTypeOption.label === selectedWeaponTypeOption.label) {
                return {
                  ...weaponTypeOption,
                  select: !weaponTypeOption.select,
                };
              } else {
                return weaponTypeOption;
              }
            }
          ),
        })
      );
    },
    [dispatch, filterOptionSelector]
  );

  const toggleWeaponSkillTypeFilter = useCallback(
    (selectedWeaponSkillTypeOption: Option) => {
      dispatch(
        setFilterOption({
          ...filterOptionSelector,
          weaponSkillType: filterOptionSelector.weaponSkillType.map(
            (weaponSkillTypeOption) => {
              if (
                weaponSkillTypeOption.label ===
                selectedWeaponSkillTypeOption.label
              ) {
                return {
                  ...weaponSkillTypeOption,
                  select: !weaponSkillTypeOption.select,
                };
              } else {
                return weaponSkillTypeOption;
              }
            }
          ),
        })
      );
    },
    [dispatch, filterOptionSelector]
  );

  const togglePartyBuffFilter = useCallback(
    (selectedPartyBuffOption: Option) => {
      dispatch(
        setFilterOption({
          ...filterOptionSelector,
          partyBuff: filterOptionSelector.partyBuff.map((partyBuffOption) => {
            if (partyBuffOption.label === selectedPartyBuffOption.label) {
              return { ...partyBuffOption, select: !partyBuffOption.select };
            } else {
              return partyBuffOption;
            }
          }),
        })
      );
    },
    [dispatch, filterOptionSelector]
  );

  const toggleChainSkillStartTypeFilter = useCallback(
    (selectedChainSkillStartTypeOption: Option) => {
      dispatch(
        setFilterOption({
          ...filterOptionSelector,
          chainSkillStartType: filterOptionSelector.chainSkillStartType.map(
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
        })
      );
    },
    [dispatch, filterOptionSelector]
  );

  const toggleChainSkillEndTypeFilter = useCallback(
    (selectedChainSkillEndTypeOption: Option) => {
      dispatch(
        setFilterOption({
          ...filterOptionSelector,
          chainSkillEndType: filterOptionSelector.chainSkillEndType.map(
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
        })
      );
    },
    [dispatch, filterOptionSelector]
  );

  return (
    <div className={"flex-1 mt-4 rounded-lg text-sub-1 bg-main"}>
      <div className={"flex flex-row px-3 py-4"}>
        <div className={"w-40"}>등급</div>

        <div className={"flex-1 grid grid-cols-4"}>
          {filterOptionSelector.stage.map((stageOption, index) => (
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
          {filterOptionSelector.role.map((roleOption, index) => (
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
          {filterOptionSelector.element.map((elementOption, index) => (
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
          {filterOptionSelector.weaponType.map((weaponTypeOption, index) => (
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
          {filterOptionSelector.weaponSkillType.map(
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
          {filterOptionSelector.partyBuff.map((partyBuffOption, index) => (
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
          {filterOptionSelector.chainSkillStartType.map(
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
          {filterOptionSelector.chainSkillEndType.map(
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
