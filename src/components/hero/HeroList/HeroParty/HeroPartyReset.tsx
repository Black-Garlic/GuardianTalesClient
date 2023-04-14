import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@store/store";
import { PARTY_TYPE } from "@constants/Constants";
import { resetSingleParty, resetTripleParty } from "@services/hero/HeroSlice";

const HeroPartyReset = () => {
  const dispatch = useAppDispatch();

  const partyTypeSelector = useAppSelector((state) => state.hero.partyType);

  return (
    <div className={"flex flex-row m-4 my-0 sub-title-2"}>
      <button
        className={classNames(
          "flex-1 mr-1.5 py-4 rounded-xl text-sub-1 bg-main"
        )}
        onClick={() =>
          partyTypeSelector === PARTY_TYPE.SINGLE
            ? dispatch(resetSingleParty())
            : dispatch(resetTripleParty())
        }
      >
        {partyTypeSelector === PARTY_TYPE.SINGLE
          ? "조합 초기화"
          : "조합 전체 초기화"}
      </button>
    </div>
  );
};

export default HeroPartyReset;
