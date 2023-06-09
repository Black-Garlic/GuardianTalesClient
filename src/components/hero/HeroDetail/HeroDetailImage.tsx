interface HeroDetailImageProps {
  heroEnglishName: string;
}

const HeroDetailImage = ({ heroEnglishName }: HeroDetailImageProps) => {
  return (
    <div
      className={
        "w-[700px] max-h-[1000px] rounded-lg relative border-4 border-sub-1"
      }
    >
      <div className={"w-full h-full rounded-lg bg-sub-6"}>
        <img
          className={"object-cover w-full h-full rounded-lg"}
          src={`/image/Background/${heroEnglishName}.png`}
        />
      </div>

      <img
        className={"absolute object-cover w-full h-full top-0 rounded-lg"}
        src={`/image/Character/Detail/${heroEnglishName}.png`}
      />
    </div>
  );
};

export default HeroDetailImage;
