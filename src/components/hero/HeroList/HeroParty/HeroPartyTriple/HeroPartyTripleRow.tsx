import HeroPartyTripleItem from "@components/Hero/HeroList/HeroParty/HeroPartyTriple/HeroPartyTripleItem";
import HeroPartyTripleEmptyItem from "@components/Hero/HeroList/HeroParty/HeroPartyTriple/HeroPartyTripleEmptyItem";
import { Hero } from "@typings/Hero";
import { useCallback } from "react";
import classNames from "classnames";
import { useAppDispatch } from "@store/store";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  setTripleFirstParty,
  setTripleSecondParty,
} from "@services/hero/HeroSlice";

interface HeroPartyTripleRowProps {
  heroPartyList: Hero[];
  partyIndex: number;
  resetHeroPartyList: any;
  removeTriplePartyHero: any;
}

const HeroPartyTripleRow = ({
  heroPartyList,
  partyIndex,
  resetHeroPartyList,
  removeTriplePartyHero,
}: HeroPartyTripleRowProps) => {
  const dispatch = useAppDispatch();

  const generateEmptyItem = useCallback(() => {
    const result = [];

    for (let index = 0; index < 4 - heroPartyList.length; index++) {
      result.push(<HeroPartyTripleEmptyItem key={"Empty-" + index} />);
    }

    return result;
  }, [heroPartyList.length]);

  const onDragEnd = useCallback(
    (result: any) => {
      if (
        result?.source?.index !== null &&
        result?.destination?.index !== null
      ) {
        const partyList = [...heroPartyList];
        const [removed] = partyList.splice(result.source.index, 1);
        partyList.splice(result.destination.index, 0, removed);

        if (partyIndex === 1) {
          dispatch(setTripleFirstParty(partyList));
        } else if (partyIndex === 2) {
          dispatch(setTripleSecondParty(partyList));
        } else if (partyIndex === 3) {
          dispatch(setTripleSecondParty(partyList));
        }
      }
    },
    [dispatch, heroPartyList]
  );

  return (
    <div className={"flex flex-col flex-1 m-4 my-2 p-4 rounded-lg bg-sub-5"}>
      <div className={"flex flex-row mx-0 mb-4 sub-title-2"}>
        <div
          className={classNames(
            "flex-1 mr-2 py-4 rounded-xl text-sub-1 text-center bg-main"
          )}
        >
          {partyIndex}번 파티
        </div>

        <button
          className={classNames(
            "flex-1 ml-2 py-4 rounded-xl text-sub-1 bg-main"
          )}
          onClick={() => dispatch(resetHeroPartyList)}
        >
          조합 초기화
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={`triple-${partyIndex}`} direction="horizontal">
          {(provided: any) => (
            <div
              className={"flex flex-row flex-1 mb-4 p-4 rounded-lg bg-sub-3"}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {heroPartyList.map((hero, index) => (
                <HeroPartyTripleItem
                  hero={hero}
                  index={index}
                  removeTriplePartyHero={removeTriplePartyHero}
                />
              ))}
              {provided.placeholder}
              {generateEmptyItem()}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div
        className={
          "grid grid-cols-2 px-4 py-3 h-20 rounded-lg sub-title-2 text-sub-1 bg-sub-3"
        }
      >
        {heroPartyList.map((hero) => (
          <div className={"my-1"}>{hero.partyBuff}</div>
        ))}
      </div>
    </div>
  );
};

export default HeroPartyTripleRow;
