import HeroPartySingleItem from "@components/Hero/HeroList/HeroParty/HeroPartySingle/HeroPartySingleItem";
import HeroPartySingleEmptyItem from "@components/Hero/HeroList/HeroParty/HeroPartySingle/HeroPartySingleEmptyItem";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useCallback } from "react";
import { Hero } from "@typings/Hero";
import { setSingleParty } from "@services/hero/HeroSlice";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const HeroPartySingle = () => {
  const dispatch = useAppDispatch();

  const singlePartySelector = useAppSelector((state) => state.hero.singleParty);

  const generateEmptyItem = useCallback(() => {
    const result = [];

    for (let index = 0; index < 4 - singlePartySelector.length; index++) {
      result.push(<HeroPartySingleEmptyItem key={"Empty-" + index} />);
    }

    return result;
  }, [singlePartySelector.length]);

  const removeSinglePartyHero = useCallback(
    (hero: Hero) => {
      dispatch(
        setSingleParty(
          singlePartySelector.filter(
            (existHero) => existHero.englishName !== hero.englishName
          )
        )
      );
    },
    [dispatch, singlePartySelector]
  );

  const onDragEnd = useCallback(
    (result: any) => {
      console.log(result);
      console.log(result?.source?.index);
      console.log(result?.destination?.index);
      if (
        result?.source?.index !== null &&
        result?.destination?.index !== null
      ) {
        const singleParty = [...singlePartySelector];
        const [removed] = singleParty.splice(result.source.index, 1);
        singleParty.splice(result.destination.index, 0, removed);
        console.log(singleParty);

        dispatch(setSingleParty(singleParty));
      }
    },
    [dispatch, singlePartySelector]
  );

  return (
    <div className={"flex flex-col flex-1 m-4 p-4 rounded-lg bg-sub-5"}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided: any) => (
            <div
              className={
                "flex flex-row flex-1 mb-4 p-4 h-40 rounded-lg bg-sub-3"
              }
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {singlePartySelector.map((hero, index) => (
                <HeroPartySingleItem
                  hero={hero}
                  index={index}
                  removeSinglePartyHero={removeSinglePartyHero}
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
          "flex flex-col px-4 py-3 h-[152px] rounded-lg sub-title-2 text-sub-1 bg-sub-3"
        }
      >
        {singlePartySelector.map((hero) => (
          <div className={"my-1"}>{hero.partyBuff}</div>
        ))}
      </div>
    </div>
  );
};

export default HeroPartySingle;
