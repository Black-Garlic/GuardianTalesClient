import { Link } from "react-router-dom";
import { Hero } from "@typings/Hero";
import { Draggable } from "react-beautiful-dnd";

interface HeroPartySingleItemProps {
  hero: Hero;
  index: number;
  removeSinglePartyHero: any;
}

const HeroPartySingleItem = ({
  hero,
  index,
  removeSinglePartyHero,
}: HeroPartySingleItemProps) => {
  return (
    <Draggable
      draggableId={hero.englishName}
      index={index}
      key={hero.englishName}
    >
      {(provided): JSX.Element => (
        <div
          className={
            "flex flex-col flex-1 relative m-1 rounded-lg border-4 border-sub-1"
          }
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={"flex flex-col flex-1 bg-sub-1"}>
            <img
              className={"object-cover w-full h-full"}
              src={`/image/Character/List/${hero.englishName}.png`}
            />
          </div>

          <div
            className={
              "flex flex-col absolute w-full p-4 bottom-[0%] rounded-lg sub-title-3 text-sub-1 text-center bg-main"
            }
          >
            <div className={"flex-1 h-24 mb-2 p-1 pt-2 sub-title-2"}>
              {hero.name}
            </div>
            <div className={"flex flex-row flex-1 w-full mb-2"}>
              <div className={"flex-1 p-1 pt-2"}>{hero.element}</div>
              <div className={"flex-1 p-1 pt-2"}>{hero.role}</div>
            </div>
            <div className={"flex flex-row flex-1 mb-2"}>
              <div className={"flex-1 p-1 pt-2"}>
                {hero.chainSkillStartType}
              </div>
              <div className={"flex-1 p-1 pt-2"}>{hero.chainSkillEndType}</div>
            </div>
            <div className={"flex flex-row flex-1"}>
              <Link
                className={"flex-1 p-1 pt-2 bg-sub-3"}
                to={`/detail/${hero.heroInfoId}`}
              >
                상세
              </Link>
              <button
                className={"flex-1 p-1 pt-2 bg-sub-2"}
                onClick={() => removeSinglePartyHero(hero)}
              >
                제외
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default HeroPartySingleItem;
