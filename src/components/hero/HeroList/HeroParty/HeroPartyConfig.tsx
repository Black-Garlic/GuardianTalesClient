import classNames from "classnames";
import { PARTY_TYPE } from "@constants/Constants";
import { useAppDispatch, useAppSelector } from "@store/store";
import { setPartyType } from "@services/hero/HeroSlice";

const HeroPartyConfig = () => {
  const dispatch = useAppDispatch();

  const partyTypeSelector = useAppSelector((state) => state.hero.partyType);

  return (
    <div className={"flex flex-row m-4 sub-title-2"}>
      <button
        className={classNames(
          "flex-1 mr-1.5 py-4 rounded-xl",
          partyTypeSelector === PARTY_TYPE.SINGLE
            ? "text-sub-1 bg-main"
            : "text-main bg-sub-5"
        )}
        onClick={() => dispatch(setPartyType(PARTY_TYPE.SINGLE))}
      >
        파티 1개
      </button>

      <button
        className={classNames(
          "flex-1 ml-1.5 py-4 rounded-xl",
          partyTypeSelector === PARTY_TYPE.TRIPLE
            ? "text-sub-1 bg-main"
            : "text-main bg-sub-5"
        )}
        onClick={() => dispatch(setPartyType(PARTY_TYPE.TRIPLE))}
      >
        파티 3개
      </button>
    </div>
  );
};

export default HeroPartyConfig;
